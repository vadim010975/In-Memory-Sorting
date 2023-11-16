export default function sort(data, param, idx = 1) {
  if (
    (param !== "id" &&
      param !== "title" &&
      param !== "year" &&
      param !== "imdb") ||
    (idx !== -1 && idx !== 1)
  ) {
    return;
  }
  const sortedData = [...data];
  sortedData.sort((a, b) => {
    if (param === "title") {
      return idx * a[param].localeCompare(b[param]);
    }
    return idx * (+a[param] - +b[param]);
  });
  return sortedData;
}
