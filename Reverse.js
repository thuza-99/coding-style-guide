const minNumber = arr => Math.min(...arr);
const resultingPromises = urls.map((url) => makHttpRequest(url));
const isEmptyArray = arr => !arr.length;