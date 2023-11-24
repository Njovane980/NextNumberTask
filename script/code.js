let currentNumber = localStorage.getItem('currentNumber') || 0;

// Display the current number on the console log
console.log('Current Number:', currentNumber);

// Increment the number for the next refresh
currentNumber++;
localStorage.setItem('currentNumber', currentNumber);
console.log()