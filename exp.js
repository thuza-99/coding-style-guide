const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const greetings = age < 18 ? 'You are not old enough' : 'You are young!';
const randomBoolean = () => Math.random() >= 0.5;
const average = arr => arr.reduce((a, b) => a + b) / arr.length;
const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;
const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);