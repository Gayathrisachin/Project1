function sum(...args){
let total=0;
    for(const a of args){
        total+=a;
    }
    console.log(total);

}
sum(1,2,"a","b",3,4);