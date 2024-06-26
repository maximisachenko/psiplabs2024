function calculateFormula() {
    var t = parseFloat(prompt("Enter the value of t:"));
    var resultOutput = document.getElementById('resultOutput');
    resultOutput.innerHTML = '';

    if (isNaN(t)) {
        alert("Please enter a numeric value.");
        return;
    }

    try {
        var numerator = -t + Math.sqrt(7 + t);
        var denominator = 8 - Math.abs(t);

        if (denominator === 0) {
            throw new Error("Division by zero is not allowed.");
        }

        var f = numerator / denominator;

        if (isNaN(f) || !isFinite(f)) {
            throw new Error("Error in calculation.");
        }

        resultOutput.innerHTML = "Calculation result: f = " + f.toFixed(2);
    } catch (error) {
        alert("Error: " + error.message);
    }
}

function calculateStringOperations() {
    var s1 = "I love Belarus";
    var s2 = "I study at Polytechnic College";
    var n = 7;

    var outputDiv = document.getElementById('stringOutput');
    outputDiv.innerHTML = '';

    // 1. Determine the length of string S1
    var s1Length = s1.length;
    var p1 = document.createElement('p');
    p1.textContent = "Length of string S1: " + s1Length;
    outputDiv.appendChild(p1);

    // 2. Extract the nth character in string S1 and determine its ASCII code
    if (n >= 0 && n < s1.length) {
        var nthCharacter = s1.charAt(n);
        var asciiCode = s1.charCodeAt(n);
        var p2 = document.createElement('p');
        p2.textContent = "nth character in string S1: " + nthCharacter + ", ASCII code: " + asciiCode;
        outputDiv.appendChild(p2);
    } else {
        var p2Error = document.createElement('p');
        p2Error.textContent = "Error: the specified index is out of bounds for string S1";
        outputDiv.appendChild(p2Error);
    }

    // 3. Replace all occurrences of "o" with "a" in string S2
    var replacedS2 = s2.replace(/o/g, 'a');
    var p3 = document.createElement('p');
    p3.textContent = "Modified string S2: " + replacedS2;
    outputDiv.appendChild(p3);
}
