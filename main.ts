//CALCULATOR
function Calc(n1:number,n2:number,sign:string){
if(sign == "+"){
    console.log(n1+n2)
} else if(sign == "="){
    console.log(n1-n2)
} else if(sign == "*"){
    console.log(n1*n2)
} else if(sign == "/"){
    if(n2 == 0){
        console.log("cant divide by 0")
    } else {
        console.log(n1/n2)
    }
} else {
    console.log("Invalid sign")
} 
}
Calc(3,5,"+")