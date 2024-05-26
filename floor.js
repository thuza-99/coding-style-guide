function myAPITS(someString: string, someNum: number) { ... };
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
const merge = (a, b) => a.concat(b);