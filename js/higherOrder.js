// higher order function

let radius =[2,3,4,5];

let area =function(r){
    return Math.PI*r*r;
}

function calculate(radius,logic){
    let output=[];
    for(let i =0;i<radius.length;i++)
    output.push(logic(radius[i]));
    return output;
}

console.log(calculate(radius,area));

// --------------------------------------------
function hof(){
    return function(){
        document.write("hello")
    }
}
let a =hof()()
