//Call
const person1  = {
    Fname: "Kanika",
    Lname: "Banga",
    fullName: function( hometown, country){
        return this.Fname + " " + this.Lname + " " + hometown + " " + country
    }
}

const person2  = {
    Fname: "Khushi",
    Lname: "Arora"
}

console.log(person1.fullName.call(person2,"Delhi", "India"))

//Apply
console.log(person1.fullName.apply(person2,["Delhi", "India"]))

//Bind : makes a copy of function
const result = person1.fullName.bind(person2,"Delhi", "India")
console.log(result)  //result is a function here
console.log(result())