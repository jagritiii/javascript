
const printAll =(print)=>{
    setTimeout(()=>{
        
        print(1);
        setTimeout(()=>{
            
            print(2);
            setTimeout(()=>{
                print(3);
            },2000)
            
        },2000)
        
    },2000)
    
   
}
const print =(num)=>{
    console.log(num)
}

printAll(print);