const enterNumber=()=>{
    return new Promise((resolve,reject)=>{
        const usernumber = Number(window.prompt("enter a number between 1 to 9 : "));
        const randomNumber = Math.floor(Math.random()*9) + 1;

        if(isNaN(usernumber)){
            reject("enter a valid number")
        }

        if(usernumber==randomNumber){
            resolve({
                points: 2,
                randomNumber 
            })
        }
        else if(usernumber==randomNumber-1 || usernumber==randomNumber+1){
            resolve({
                points: 1,
                randomNumber
            })
        }
        else{
            resolve({
                points:0,
                randomNumber
            })
        }
    })
}

const continueGame =() =>{
    return new Promise((resolve) =>{
        if (window.confirm("Do you want to continue?")) { 
            resolve(true);
          } else {
            resolve(false);
          }
    })
}

const handleGuess=()=>{
    const usernumber = enterNumber()
    .then((result)=>{
        alert(`Dice:${result.randomNumber}. You got ${result.points}`)

        continueGame().then((result)=>{
            if(result)
            handleGuess()
            else
            alert("Game ends")
        })
    })

}

handleGuess()