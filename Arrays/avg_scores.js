let myScores = [92, 98, 84, 76, 89, 99, 100]; 
let yourScores = [82, 98, 94, 88, 92, 100, 100]; 

function getAverage(scores){
    let i=0;
    let total=0;
    while(scores[i]){
        total += scores[i];
        i++
    }
    let avg_score = total / i;
    return avg_score;
}

let myAvgScore = getAverage(myScores);
let yourAvgScore = getAverage(yourScores);

console.log(`My average score = ${myAvgScore.toFixed(2)}, your average score = ${yourAvgScore.toFixed(2)} `);