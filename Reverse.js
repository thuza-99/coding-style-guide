const uniqueArr = (arr) => [...new Set(arr)];
const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");
const maxNumber = arr => Math.max(...arr);