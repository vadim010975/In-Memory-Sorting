export default class FilmList {
  constructor(data, container) {
    this.container = container;
    this.elements = [];
    data.forEach((el) => {
      const element = document.createElement("tr");
      element.dataset.id = el.id;
      element.dataset.title = el.title;
      element.dataset.imdb = el.imdb;
      element.dataset.year = el.year;
      element.classList.add("row");
      element.insertAdjacentHTML("beforeend", `<td class='cell'>${el.id}</td>`);
      element.insertAdjacentHTML(
        "beforeend",
        `<td class='cell'>${el.title}</td>`
      );
      element.insertAdjacentHTML(
        "beforeend",
        `<td class='cell'>imdb: ${el.imdb.toFixed(2)}</td>`
      );
      element.insertAdjacentHTML(
        "beforeend",
        `<td class='cell'>(${el.year})</td>`
      );
      this.elements.push(element);
    });
  }

  show() {
    this.container.innerHTML = "";
    this.elements.forEach((el) => {
      this.container.appendChild(el);
    });
  }
}
