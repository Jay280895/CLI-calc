import { question } from "readline-sync";
 function main():void
  {
 const frstStr:string= question("Enter the first number:\n ");
     const scndStr:string= question("Enter the second number:\n ");
     const operator:string= question("Enter the operator:\n ");
     const frstNum:number=parseInt(frstStr);
     const scndNum:number=parseInt(scndStr);
    //  console.log(typeof frstStr);
    if (operator=="+"){
        console.log(frstNum+scndNum);
    }else if (operator=="-"){
        console.log(frstNum+scndNum);
    }else if(operator=="*"){
        console.log(frstNum*scndNum);
    }else if(operator=="/"){
        console.log(frstNum/scndNum);
    }else{
        console.log("Only Add Subtract Multiply and Divide is avalible right now")
    }
       
 }
 main();

     