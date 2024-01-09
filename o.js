var undoLeftStack = [];
var redoLeftStack = [];

document.addEventListener('mousemove', moveOutputText);

function moveOutputText(event) {
    var outputText = document.getElementById("output-text");
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    outputText.style.position = 'absolute';
    outputText.style.left = mouseX + 'px';
    outputText.style.top = mouseY + 'px';
}

function updateLeftText() {
    var inputText = document.getElementById("input-text").value;
    var additionalText = document.getElementById("additional-text").value;
    var outputText = document.getElementById("output-text");

    // Concatenate input text with additional text
    var fullText = inputText + ' ' + additionalText;
    outputText.innerHTML = fullText;

    // Save the current state for undo
    undoLeftStack.push({ inputText: inputText, additionalText: additionalText });

    // Clear redo stack
    redoLeftStack = [];
}

function undoLeft() {
    if (undoLeftStack.length > 1) {
        // Pop current state from undo stack
        var currentState = undoLeftStack.pop();

        // Save current state to redo stack
        redoLeftStack.push(currentState);

        // Restore previous state
        var previousState = undoLeftStack[undoLeftStack.length - 1];
        document.getElementById("input-text").value = previousState.inputText;
        document.getElementById("additional-text").value = previousState.additionalText;
        updateLeftText();
    }
}

function redoLeft() {
    if (redoLeftStack.length > 0) {
        // Pop from redo stack
        var nextState = redoLeftStack.pop();

        // Save current state to undo stack
        undoLeftStack.push(nextState);

        // Restore next state
        document.getElementById("input-text").value = nextState.inputText;
        document.getElementById("additional-text").value = nextState.additionalText;
        updateLeftText();
    }
}

function updateRightText() {
    var fontFamily = document.getElementById("font-family-input").value;
    var textColor = document.getElementById("color-input").value;
    var fontSize = document.getElementById("font-size-input").value;
    var additionalText = document.getElementById("additional-text").value;

    var outputText = document.getElementById("output-text");
    outputText.style.fontFamily = fontFamily;
    outputText.style.color = textColor;
    outputText.style.fontSize = fontSize + "px";

    // Concatenate input text with additional text
    var inputText = document.getElementById("input-text").value;
    var fullText = inputText + ' ' + additionalText;
    outputText.innerHTML = fullText;
}
