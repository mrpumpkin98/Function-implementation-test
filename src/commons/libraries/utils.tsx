export const getDate = (date) => {
  const _date = new Date(date);
  const yyyy = _date.getFullYear();
  const mm = _date.getMonth() + 1;
  const dd = _date.getDate();
  const h = _date.getHours();
  const mmmm = _date.getMinutes();
  return `${yyyy}-${mm}-${dd} ${h}:${mmmm} `;
};

export const IDSlice = (a) => {
  String(a).slice(-4).toUpperCase();
};
