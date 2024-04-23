const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};
const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);
const goToTop = () => window.scrollTo(0, 0);
const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);