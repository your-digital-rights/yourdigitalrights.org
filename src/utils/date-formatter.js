const dayFormatter = new Intl.DateTimeFormat('en', { day: '2-digit' });
const monthFormatter = new Intl.DateTimeFormat('en', { month: '2-digit' });
const yearFormatter = new Intl.DateTimeFormat('en', { year: 'numeric' });

export default (date) => `${
  dayFormatter.format(date)
}.${
  monthFormatter.format(date)
}.${
  yearFormatter.format(date)
}`
