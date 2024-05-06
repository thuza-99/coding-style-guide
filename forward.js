const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};
const buildOutputPath = path.join(repositoryRootPath, 'out');
const apmRootPath = path.join(repositoryRootPath, 'apm');