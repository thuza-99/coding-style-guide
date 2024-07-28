const scriptRootPath = path.join(repositoryRootPath, 'script');
const lastElement = arr => arr[arr.length - 1];
const executableName = getExecutableName(channel, appName);