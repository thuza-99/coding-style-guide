const removeDuplicates = (arr) => [...new Set(arr)];
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};