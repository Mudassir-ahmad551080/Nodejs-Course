// ================= Quiz App i nodejs =======================

import fs from 'fs'
import readline from 'readline'
import chalk from 'chalk'
//load all the question

const question = JSON.parse(fs.readFileSync('question.json', 'utf-8'));
// console.log(question)

//cli setup 

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let score = 0;
let index = 0

function askQuestion() {
    if (index < question.length) {
      const q = question[index];
      console.log(chalk.yellow(`Question ${index+1} ${q.question}`))
      q.option.forEach((opt,i)=>{
         console.log(`${i+1}:${opt}`)
      });
        rl.question(chalk.overline('Enter you answer::'),(answer)=>{
        const userAnswer = parseInt(answer);
        console.log(userAnswer)
        if(userAnswer===q.answer){
           console.log(chalk.green('Correct'));
           score++;
        }
        else{
            console.log(chalk.red("Wrong Answer"));
        }
        index++;
        askQuestion();
    })
    }
    else{
        console.log(chalk.cyan(`Your quiz is over and score is ${score}/${question.length}`))
        rl.close();
    }
  
}
askQuestion()