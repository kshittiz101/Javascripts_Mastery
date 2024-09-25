// Get the current date and time
let now = new Date();
// Get the current hour
let hrs = now.getHours();
console.log(hrs); // Outputs the current hour (0-23)

// Create a new Date object for manipulation
const time = new Date();
// Set the hour to 2 PM
time.setHours(14);
console.log(time.toLocaleTimeString());
// Set the minutes to 30
time.setMinutes(30);
console.log(time.toLocaleTimeString());

// Set the seconds to 15
time.setSeconds(15);
console.log(time.toLocaleTimeString());
