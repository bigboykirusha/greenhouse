// scheme/js/cellHighlighter.js

class CellHighlighter {
  constructor(cellsSelector, layersSelector) {
    this.cells = document.querySelectorAll(cellsSelector);
    this.layers = document.querySelectorAll(layersSelector);
    this.attachEvents();
  }

  attachEvents() {
    this.cells.forEach((cell) => {
      cell.addEventListener("mouseenter", () => this.highlightCell(cell.id));
      cell.addEventListener("mouseleave", () => this.resetHighlight());
    });
  }

  highlightCell(selectedCellId) {
    this.layers.forEach((layer) => {
      layer.classList.toggle("dimmed", layer.dataset.cell !== selectedCellId);
    });

    this.cells.forEach((cell) => {
      cell.classList.toggle("dimmed", cell.id !== selectedCellId);
    });
  }

  resetHighlight() {
    this.layers.forEach((layer) => layer.classList.remove("dimmed"));
    this.cells.forEach((cell) => cell.classList.remove("dimmed"));
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new CellHighlighter(".cell", ".layer");
});
