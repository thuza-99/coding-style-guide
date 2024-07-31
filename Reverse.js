const countOccurrences = (arr, element) => arr.filter(item => item === element).length;
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);