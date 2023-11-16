import data from "./data";
import FilmList from "./FilmList";
import sort from "./sort";

const containerEl = document.querySelector(".container");

let current = 0;
let idx = 1;

setInterval(() => {
  const parameter = Object.keys(data[0])[current];
  const sortedData = sort(data, parameter, idx);
  const filmList = new FilmList(sortedData, containerEl);
  filmList.show();

  if (idx === -1) {
    idx = 1;
    current += 1;
  } else {
    idx = -1;
  }
  if (current >= Object.keys(data[0]).length) {
    current = 0;
  }
}, 2000);
