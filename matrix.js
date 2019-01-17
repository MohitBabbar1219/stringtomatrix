export class Matrix {
  constructor(matrixString) {
    const rowStrings = matrixString.split('\n');
    this.rows = rowStrings.map(rowString => rowString.split(' ')
      .map(arrayElementInString => parseInt(arrayElementInString, 10)));
    this.columns = [];
    [...Array(this.rows[0].length)].forEach(() => this.columns.push([]));
    rowStrings.forEach(rowString => rowString.split(' ')
      .forEach((arrayElement, index) => this.columns[index].push(parseInt(arrayElement, 10))));
  }
}
