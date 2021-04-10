var readlineSync = require('readline-sync');
var name=readlineSync.question("What is your name?\n");
var score=0;
var age=readlineSync.question("What is your age?\n");
console.log("\nAre you interested in superheroes?\n\n Ofcourse you are.");
console.log("\nLet's take a DC comics quiz then! Shall we?\n");

var parent=readlineSync.question("What is the name of Batman's mother?\n");
if(parent==="Martha"||parent==="martha")
{
  score=score+1;
  console.log("\nYou are right and you have scored one point!\n");
}
else
{
  console.log("You are wrong!\n");
}
var butler=readlineSync.question("What is the name of Batman's butler?\n");
if(butler==="Alfred"||butler==="alfred")
{
  score=score+1;
  console.log("\nYou are right and you have scored one point!\n");
}
else
{
  if(score!=0)
  {
    score=score-1;
    console.log("\nYou are wrong and you have lost one point!\n");
  }
  else
    console.log("\nYou are wrong!\n");
}
var alterEgo=readlineSync.question("What is the name of Batman's alterEgo First name?\n");
if(alterEgo==="Bruce"||alterEgo==="bruce")
{
  score=score+1;
  console.log("\nYou are right and you have scored one point!\n");
}
else
{
  if(score!=0)
  {
    score=score-1;
    console.log("\nYou are wrong and you have lost one point!\n");
  }
  else
    console.log("\nYou are wrong!\n");
}
var alterEgo=readlineSync.question("What is the name of Superman's alterEgo First name?\n");
if(alterEgo==="Clark"||alterEgo==="clark")
{
  score=score+1;
  console.log("\nYou are right and you have scored one point!\n");
}
else
{
  if(score!=0)
  {
    score=score-1;
    console.log("\nYou are wrong and you have lost one point!\n");
  }
  else
    console.log("\nYou are wrong!\n");
}
console.log("\nQuiz Ended\n");
console.log("\nYour score is "+score+"\n");
