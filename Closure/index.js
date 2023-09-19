//Function bundled with its lexical environment is known as a closure. 
//Whenever function is returned, even if its vanished in execution context but still
 //it remembers the reference it was pointing to

function outer(){
    let x = 2

    function inner(){
        console.log(x)  //here x is reference instead of value
    }
    x=90
    return inner;
}
 let z = outer()
 console.log(z)

 z()