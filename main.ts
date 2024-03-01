import inquirer from "inquirer"

for (let i=1 ; i<4 ; i++)
{
  const numbergen = Math.floor(Math.random() * 10)
  type ans =
  {
    usernumber: number
  }
 console.log(`Attemp #: ${i}`);
 const userguess:ans = await inquirer.prompt(
    {
      type:'number',
      name:'usernumber',
      message:'Guess the number what I am thinking'
       
    }   
 )
 if(userguess.usernumber === numbergen)
  {
    console.log("Good job! you guess correct number");    
  }
 else
 {
  console.log(`you loss, I thaught #${numbergen}`);
 }

}
