let prompt = require ("prompt-sync")();
let n1 = parseInt(prompt('please enter your first num:'))
let n2 = parseInt(prompt('please enter ya second num:'))
let operator = prompt('please enter ya operator (+,-,*,/):')
if (operator == "+"){
    console.log(`the answer of ${n1} ${operator} ${n2} = ${n1+n2}`)
} 
else if (operator == "*"){
    console.log(`the answer of ${n1} ${operator} ${n2} = ${n1*n2}`)
} 
else if (operator == "-"){
    console.log(`the answer of ${n1} ${operator} ${n2} = ${n1-n2}`)
} 
else if (operator == "/"){
    console.log(`the answer of ${n1} ${operator} ${n2} = ${n1/n2}`)
} 
else {
    console.log("nigga shut ya bitch ass up n select the correct opertor")
}
export{} ;