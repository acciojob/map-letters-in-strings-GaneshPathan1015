//your JS code here. If required.
let str = prompt("Ente a string");
    str.toLowerCase();
let strobj = {};
for(let i=0;i<str.length;i++){
    let character = str.charAt(i);
    if(strobj[character] === undefined){
        strobj[character] = [i];
    }
    else{
        strobj[character].push(i) ;
    }
}
console.log(strobj);