const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const updated = numbers.filter(element => element > 6);
const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];