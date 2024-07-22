const added = [0, 1, 2, 3, 4].map((item) => item + 1);
const randomString = () => Math.random().toString(36).slice(2);
const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);