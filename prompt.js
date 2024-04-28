const buildOutputPath = path.join(repositoryRootPath, 'out');
const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));
var arr1 = "john".split('');
var DELIM_SIZE = 4;