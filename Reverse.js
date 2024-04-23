const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");
const isArray = (arr) => Array.isArray(arr);
const randomBoolean = () => Math.random() >= 0.5;
const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
console.log(false == '0');
const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;