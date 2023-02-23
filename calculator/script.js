
function init(){
    const container = document.createElement('div');
    container.setAttribute('id','container')


    const calBox = document.createElement('div');
    calBox.setAttribute('id','calBox')
    const buttonBox = document.createElement('div');

    const answer = document.createElement('input');
    answer.setAttribute('id','answer')



    const one = createButton("one" ,"1")
    const two = createButton("two" ,"2")
    const three = createButton("three" ,"3")
    const four = createButton("four" ,"4")
    const five = createButton("five" ,"5")
    const six = createButton("six" ,"6")
    const seven = createButton("seven" ,"7")
    const eight = createButton("eight" ,"8")
    const nine = createButton("nine" ,"9")
    const zero = createButton("zero" ,"0")
    const add = createButton("add" ,"+")
    const subtract = createButton("subtract" ,"-")
    const multiply = createButton("multiply" ,"*")
    const divide = createButton("divide" ,"/")
    const dot = createButton("dot" ,".")

    const allClear = document.createElement("button")
    allClear.innerHTML="AC"
    allClear.setAttribute('class','buttons')
    allClear.addEventListener('click',function(){
        document.getElementById('answer').value=""
    })
    allClear.style["backgroundColor"]="orange"

    const equals = document.createElement("button")
    equals.innerHTML="="
    equals.setAttribute('class','buttons')
    equals.addEventListener('click',function(){
        document.getElementById('answer').value= eval(document.getElementById('answer').value)
    })

    // const buttonList =document.getElementsByClassName("buttons")
    // console.log(buttonList)

    // setStyleOfButtons(buttonList)

    const b1 = document.createElement('br')
    const b2 = document.createElement('br')
    const b3 = document.createElement('br')

    buttonBox.appendChild(one)
    buttonBox.appendChild(two)
    buttonBox.appendChild(three)
    buttonBox.appendChild(add)
    buttonBox.appendChild(b1)

    buttonBox.appendChild(four)
    buttonBox.appendChild(five)
    buttonBox.appendChild(six)
    buttonBox.appendChild(subtract)
    buttonBox.appendChild(b2)

    buttonBox.appendChild(seven)
    buttonBox.appendChild(eight)
    buttonBox.appendChild(nine)
    buttonBox.appendChild(divide)
    buttonBox.appendChild(b3)
    
    buttonBox.appendChild(allClear)
    buttonBox.appendChild(zero)
    buttonBox.appendChild(dot)
    buttonBox.appendChild(equals)

    calBox.appendChild(answer);
    calBox.appendChild(buttonBox)
    container.appendChild(calBox);
    document.getElementsByTagName("body")[0].appendChild(container)
    


}
init()


function createButton(id , value){
    const a = document.createElement("button");
    a.innerHTML=value
    a.setAttribute('id',id)
    a.setAttribute('class','buttons')
    a.addEventListener('click',function(){
        document.getElementById('answer').value += value
    })

    return a;
}

// function setStyleOfButtons(buttonList){
    // const buttonList =document.getElementsByTagName('button')
//     console.log(buttonList)
    // for(let b=0;b<buttonList.length;b++)
    // console.log(buttonList[b])
//   { buttonList[ b].style.height="20";
//   buttonList[ b].style.width="20";
//   buttonList[ b].style.color="yellow";
//   buttonList[ b].style.border="2px solid black"}

// }

