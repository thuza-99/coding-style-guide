console.log(['foo', 'bar'].concat(['baz', 'qux'].reverse().slice(1)).join(' ').replace(/a/i, 'ee').toUpperCase());
const reversedString = str => str.split('').reverse().join('');
const isTabInView = () => !document.hidden;