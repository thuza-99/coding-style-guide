const flattenedArray = arr => [].concat(...arr);
const isEmptyObject = obj => Object.keys(obj).length === 0;
const randomString = () => Math.random().toString(36).slice(2);
var DELIM_SIZE = 4;
const randomBoolean = () => Math.random() >= 0.5;