function newDate(date) {
  return `${new Date(date).getMonth() + 1}/${new Date(
    date
  ).getDay()}/${new Date(date).getFullYear()}`;
}

module.exports = { newDate };
