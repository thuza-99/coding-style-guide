const results = await Promise.all(resultingPromises);
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
const isArray = (arr) => Array.isArray(arr);