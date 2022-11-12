function getComputerChoice()
{
    x= Math.floor(Math.random()*3);
    if(x==0) return 'rock';
    if(x==1) return 'paper';
    return 'scissor';
}

function chooseRock()
{
    playerChoice='rock'
    game();
};
function choosePaper()
{
    playerChoice='paper'
    game();
};
function chooseScissor()
{
    playerChoice='scissor'
    game();
};




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
    console.log(p+" "+c)
    if(p<5 && c<5)
    {
        
        computerChoice=getComputerChoice();
        let ans=playGround(computerChoice,playerChoice);

        playerResultElement=document.createElement('div');
        computerResultElement=document.createElement('div');

        playerResultElement.innerText=`YOUR CHOICE: ${playerChoice.toUpperCase()}.`
        computerResultElement.innerText=`COMPUTER CHOICE: ${computerChoice.toUpperCase()}`

       resultEle=document.querySelector('.result')
       resultEle.innerHTML="";
       console.log(playerResultElement);
       console.log(computerResultElement);
        resultEle.appendChild(playerResultElement);
        resultEle.appendChild(computerResultElement);

        userScore=document.querySelector('.user-score');
        cpuScore=document.querySelector('.cpu-score');
        ansele=document.createElement('div');


        if(ans===1) 
        {
            p++;
            // console.log(`You win , ${playerSelection.toLocaleUpperCase()} beats ${computerSelection.toLocaleUpperCase()}`)
            ansele.innerText="YOU LOSE THIS ROUND";
            resultEle.appendChild(ansele);
            userScore.innerText=`${p}`;
            cpuScore.innerText=`${c}`;
        }
        else if(ans===0)
        {
            // console.log(`You lose , ${computerSelection.toLocaleUpperCase()} beats ${playerSelection.toLocaleUpperCase()}`)
            c++;
            ansele.innerText="YOU LOSE THIS ROUND";
            resultEle.appendChild(ansele);
            userScore.innerText=`${p}`;
            cpuScore.innerText=`${c}`;
        }
        else 
        {
            ansele.innerText="WOW IT IS A DRAW";
            resultEle.appendChild(ansele);
        }
    
    
    }
    if(p==5 || c==5)
    {
        resultEle=document.querySelector('.result')
       resultEle.innerHTML="<h1>YOU WIN THE GAME</h1>";
       
    }
    
}
rock=document.querySelector(".rock")
paper=document.querySelector(".paper")
scissor=document.querySelector(".scissor")

rock.addEventListener('click',chooseRock);
paper.addEventListener('click',choosePaper);
scissor.addEventListener('click',chooseScissor);
playerchoice=-1;
let p=0,c=0;

reload=document.querySelector('.play-again');
reload.addEventListener('click',()=>{window.location.reload()} );
 
