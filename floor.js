const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
const removeDuplicates = (arr) => [...new Set(arr)];