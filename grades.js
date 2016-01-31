var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
var scoresCount = scores.length;
var aCount = 0;
var bCount = 0;
var cCount = 0;
var dCount = 0;
var fCount = 0;
var sortedScore = scores.sort();

// Find how many of each grade are in array
for (var i = 0; i < scoresCount; i++) {
  if (scores[i] >= 91) {
    aCount++;
  } else if (scores[i] >= 81){
    bCount++;
  } else if (scores[i] >= 71){
    cCount++;
  } else if (scores[i] >= 61) {
    dCount++;
  } else {
    fCount++;
  }
}

console.log("A's", aCount);
console.log("B's", bCount);
console.log("C's", cCount);
console.log("D's", dCount);
console.log("F's", fCount);

// Find the lowest grade in the array

console.log("sorted scores", sortedScore);
console.log("lowest score", sortedScore[0]);


// Find the highest grade in the array.
console.log("highest score", sortedScore[sortedScore.length - 1]);
