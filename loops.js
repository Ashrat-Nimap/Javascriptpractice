
//for loop example
let pattern = "";
for(let i = 0;i <= 5;i++){
    for(let j = 1;j<=i;j++){
       pattern += "* "
    }
    pattern += "\n";
}
console.log(pattern);

//do-while loop
let i=1;
do{
    console.log(i);
    i++;
}while(i<10);

//while loop example
let n = 1;
while(n < 10){
    console.log(n);
    n++;
}

// for-of loop
const arr = [23,45,67,89];
for(let a of arr){
    console.log(a);
}

