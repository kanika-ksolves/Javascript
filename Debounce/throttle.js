const throttle = (fn, delay) => {
    return function(...args){
        document.getElementById('btn').disabled = true
        setTimeout(()=>{
            fn();
        },delay)
    }
} 


//passing function and time
const newFunc = throttle(()=>{
    document.getElementById('btn').disabled = false
    console.log("User Clicked!!!")
},3000)