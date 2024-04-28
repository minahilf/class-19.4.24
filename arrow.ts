let calculator = (n1:number,n2:number,sign:string):void => {
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
    } else if (sign == "%"){
        console.log(n1%n2)
    } else {
        console.log("Invalid sign")
    } 
}
calculator(3,5,"+");

// let arrowFunc = () => (2+2)
// let arrowFunc = (n1:number) => (n1+2)
