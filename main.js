function showScore() {
  let i;
  let score = [];
  let weight = [];
  let num = [];
  let weights_total = 0;
  let total_score = 0;

//loops through categories and calculates a the numerator and denominator
//for a weighted average
  for(i=0;i<5;i++){
    score.push(Number(document.getElementById(`score${i}`).value));
    weight.push(Number(document.getElementById(`weight${i}`).value));
    num.push(score[i]*weight[i]);
    weights_total += weight[i];
    total_score += num[i];
  };

//calculates the weighted average using totals from for loop
  let final_score = total_score/weights_total;

//shows the final weighted average at the bottom of the page
document.getElementById("answer").innerHTML = final_score;
};

//original code that was refractored above

      /*let score1 = Number(document.getElementById("score1").value);
      let score1 = Number(document.getElementById("score1").value);
      let score2 = Number(document.getElementById("score2").value);
      let score3 = Number(document.getElementById("score3").value);
      let score4 = Number(document.getElementById("score4").value);

      let weight1 = Number(document.getElementById("weight1").value);
      let weight1 = Number(document.getElementById("weight1").value);
      let weight2 = Number(document.getElementById("weight2").value);
      let weight3 = Number(document.getElementById("weight3").value);
      let weight4 = Number(document.getElementById("weight4").value);

      let weights_total = weight1+weight1+weight2+weight3+weight4;

      let num1 = score1*weight1;
      let num2 = score1*weight1;
      let num3 = score2*weight2;
      let num4 = score3*weight3;
      let num5 = score4*weight4;

      let total_score = num1+num2+num3+num4+num5;*/
