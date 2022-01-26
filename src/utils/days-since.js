const msInDay = 1000 * 60 * 60 * 24;

export default (date) => Math.round((Date.now() - date.getTime()) / msInDay);
