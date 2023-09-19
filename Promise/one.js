// Using Promises
function promiseFunction() {
    return  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Resolved");
    }, 2000);
  })
  }
  
  console.log("Start");
  promiseFunction()
  .then((result) => {
    console.log(result);
    console.log("End");
  })
  .catch((error)=>{
  console.log(error)
  });
  
  Output:
  Start
  Resolved
  End