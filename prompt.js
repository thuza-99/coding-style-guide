const symbolsPath = path.join(buildOutputPath, 'symbols');
const uniqueArray = arr => [...new Set(arr)];
const appName = getAppName(channel);