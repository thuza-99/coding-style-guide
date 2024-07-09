const lastElement = arr => arr[arr.length - 1];
const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());
const channel = getChannel(computedAppVersion);