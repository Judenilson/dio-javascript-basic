// const entrada = "abbcddeof";
const entrada = "aabbcc";
let result = "";

result+=entrada[0];

for (let i = 1; i < entrada.length; i++) {
    if(entrada[i] != entrada[i-1]){
        result+=entrada[i];
    }
}
console.log(result);