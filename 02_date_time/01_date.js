const now = new Date();
console.log(now);

// year
const year = now.getFullYear();
const month = now.getMonth() + 1; // in js month and week count from 0
const day = now.getDay();
const hours = now.getHours();

const minutes = now.getMinutes();
const seconds = now.getSeconds();

const time = `${year}-${month}-${day}-${hours}-${minutes}-${seconds}`;
console.log(time);

// specific date
// const specificDate = new Date(2001, 11, 29);
const specificDate = new Date(Date.UTC(2001, 11, 29));
console.log(specificDate.toISOString()); // Will give "2001-12-29T00:00:00.000Z"

console.log(specificDate.toLocaleDateString()); // this will show in local time zone
