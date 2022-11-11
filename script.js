function getComputerChoice()
{
    x=Math.floor(Math.random()*3);
    // console.log(x);

    if(x===0) return "rock"
    else if(x===1) return "paper"
    else return "scissor"

}

function playGround(c,p)
{
    if(c===p ) return -1
    if(c==="rock" && p==="scissor") return 0
    if(c==="paper" && p==="rock") return 0
    if(c==="scissor" && p==="paper") return 0

    else return 1

}
// console.log(getComputerChoice());




function game()
{
    let p=0,c=0;
    for(let i=0;i<5;i++)
    {
        playerSelection=prompt("enter you choice").toLocaleLowerCase();
        computerSelection=getComputerChoice();
        let ans=playGround(computerSelection,playerSelection);
        if(ans===1) 
        {
            console.log(`You win , ${playerSelection.toLocaleUpperCase()} beats ${computerSelection.toLocaleUpperCase()}`)
            p++;
        }
        else if(ans===0)
        {
            console.log(`You lose , ${computerSelection.toLocaleUpperCase()} beats ${playerSelection.toLocaleUpperCase()}`)
            c++;
        }
        else console.log("Its a draw")
    
    
    }
    if(p==c) console.log("WOW you both win")
    else if(p>c) console.log("Congratulations , Youvw won the match")
    else console.log("Sorry, youve lost the match")
}

game()
