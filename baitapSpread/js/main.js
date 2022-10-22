let str = document.getElementById("hover").innerHTML;
console.log(str);
let chars  = [...str];
console.log(chars);
content = "";
for (let i =0; i< chars.length; i++){
    let letter = chars[i];
    content +=`
        <span>${letter}</span>
    `
}

document.getElementById("hover").innerHTML = content;