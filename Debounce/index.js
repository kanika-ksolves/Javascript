let counter = 0;

const getData = () => {
    console.log("Data fetch: "+ counter++)
}

const debounce = function(fn , delay){
    let timer;
    return function(...args){
        if(timer) clearTimeout
     timer = setTimeout(()=>{
            fn()
        },delay) 

    }
}

const betterFunction = debounce(getData, 2000)

//document.getElementById('search')