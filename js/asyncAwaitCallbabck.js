
// promise----------
let x= true
console.log("before promise")
let p = new Promise(function(resolve,reject){
    if(x){
    setTimeout(()=>{
        resolve("inside promise")
    },3000)
    }
    else
    reject("error")
}
)
p.then((val)=>{
    console.log(val) 
})
.catch(()=>{
    console.log("error has occured")
})

console.log("after promise but still runs before promise")

// async await---------------

function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function call() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // Expected output: "resolved"
  }
  
  call();