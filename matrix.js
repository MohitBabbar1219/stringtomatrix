const convertMatrixStringToIntegerArray = (matrixString) => {
  const rowStringArray = matrixString.split('\n');
  const stringElementMatrix = rowStringArray.map(row => row.split(' '));
  return stringElementMatrix.map(rows => rows
    .map(elements => parseInt(elements, 10)));
};

const transposeMatrix = (matrix) => {
  const numberOfRows = matrix.length;
  const transposedMatrix = [];
  for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex += 1) {
    transposedMatrix.push([]);
  }
  matrix.forEach(row => row.forEach((element, index) => transposedMatrix[index].push(element)));
  return transposedMatrix;
};

export class Matrix {
  constructor(matrixString) {
    this.rows = convertMatrixStringToIntegerArray(matrixString);
    this.columns = transposeMatrix(this.rows);
  }
}
