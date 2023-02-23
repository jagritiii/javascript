let a =(sum)=>{
    console.log(sum);
}

function display(num1,num2,callback){
    let num = num1+num2;
    callback(num)
}
display(2,4,a)


// ---------------------------

const num=[2,7,5,6,1,3]

const newNum = remove(num,(x)=> x>3);

function remove(num, callback ){
    const myArr=[]
    for(let x of num){
    if(callback(x))
    myArr.push(x);

}
    return myArr;
}

console.log(newNum)