// Get the required elements
const hourElement = document.querySelector('.hour');
const minuteElement = document.querySelector('.minute');
const secondElement = document.querySelector('.second');
const millisecondElement = document.querySelector('.millisecond');

const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const resetButton = document.querySelector('.reset');

let startTime;
let elapsedTime = 0;
let stopwatchInterval;

// Function to start the stopwatch
function startStopwatch() {
  // Store the current start time if it's the initial start
  if (elapsedTime === 0) {
    startTime = Date.now();
  } else {
    // Adjust the start time based on the elapsed time
    startTime = Date.now() - elapsedTime;
  }

  // Update the stopwatch display every 10 milliseconds
  stopwatchInterval = setInterval(updateStopwatch, 10);

  // Disable the start button
  startButton.disabled = true;
}

// Function to update the stopwatch display
function updateStopwatch() {
  // Calculate the elapsed time
  elapsedTime = Date.now() - startTime;

  // Convert elapsed time to hours, minutes, seconds, and milliseconds
  const hours = Math.floor(elapsedTime / 3600000);
  const minutes = Math.floor((elapsedTime % 3600000) / 60000);
  const seconds = Math.floor((elapsedTime % 60000) / 1000);
  const milliseconds = Math.floor((elapsedTime % 1000) / 10);

  // Display the updated time
  hourElement.textContent = padTime(hours);
  minuteElement.textContent = padTime(minutes);
  secondElement.textContent = padTime(seconds);
  millisecondElement.textContent = padTime(milliseconds);
}

// Function to pad single digits with leading zeros
function padTime(time) {
  return time.toString().padStart(2, '0');
}

// Function to stop the stopwatch
function stopStopwatch() {
  // Clear the interval
  clearInterval(stopwatchInterval);

  // Enable the start button
  startButton.disabled = false;
}

// Function to reset the stopwatch
function resetStopwatch() {
  // Clear the interval
  clearInterval(stopwatchInterval);

  // Reset the elapsed time and display
  elapsedTime = 0;
  hourElement.textContent = '00';
  minuteElement.textContent = '00';
  secondElement.textContent = '00';
  millisecondElement.textContent = '00';

  // Enable the start button
  startButton.disabled = false;
}

// Add event listeners to the buttons
startButton.addEventListener('click', startStopwatch);
stopButton.addEventListener('click', stopStopwatch);
resetButton.addEventListener('click', resetStopwatch);
