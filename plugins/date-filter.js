import Vue from 'vue';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

Vue.filter('date', (value) => {
  const date = new Date(value);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  return `${day}. ${months[month]} ${year}`;
});
