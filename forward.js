const merge = Object.assign({}, obj1, obj2);
var uAgent = (typeof navigator !== 'undefined') ? navigator.userAgent : null;
const results = await Promise.all(resultingPromises);