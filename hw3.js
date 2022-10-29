function dotProduct(v1, v2) {
  let product = 0;
  for (let i = 0; i < v1.length; i++) {
    product += v1[i] * v2[i];
  }
  return product;
}
function findOrthogonals(pairsOfVectors) {
  for (let i = 0; i < pairsOfVectors.length; i++) {
    let dotProductofeachPair = dotProduct(
      pairsOfVectors[i][0],
      pairsOfVectors[i][1]
    );
    if (dotProductofeachPair === 0) {
      console.log(
        `the pair of vectors ${pairsOfVectors[i][0]} & ${pairsOfVectors[i][1]} are ortogonal`
      );
    }
  }
}
findOrthogonals([
  [
    [1, 2],
    [2, 3],
  ],
  [
    [1, 2],
    [2, -1],
  ],
  [
    [3, 2],
    [2, -3],
  ],
]);
