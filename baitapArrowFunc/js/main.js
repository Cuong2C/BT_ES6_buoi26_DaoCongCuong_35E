const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender","celadon","saffron","fuschia","cinnabar"];

let renderButton = ()=>{
    let content = "";
    for(let i=0; i<colorList.length; i++){
        let color = colorList[i];
        content +=`
        <button class = "color-button ${color}" onclick="changeColor('${color}')"></button>
        `
    }
    document.getElementById("colorContainer").innerHTML = content;
}

renderButton();

let changeColor = (color)=>{
    document.getElementById("house").className = "house " + `${color}`;
}