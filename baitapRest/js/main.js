function tinhDTB(...param) {
    let DTB = 0;
    for(let i = 0; i<param.length; i++){
        DTB += param[i]/param.length;
    }
    return DTB;
};

let xuatKQ1 = ()=>{
    let diemToan = document.getElementById("inpToan").value;
    let diemLy = document.getElementById("inpLy").value;
    let diemHoa = document.getElementById("inpHoa").value;

    let ketQua = tinhDTB(diemToan, diemLy, diemHoa);

    document.getElementById("tbKhoi1").innerHTML = ketQua;

};

let xuatKQ2 = ()=>{
    let van = document.getElementById("inpVan").value;
    let su = document.getElementById("inpSu").value;
    let dia = document.getElementById("inpDia").value;
    let eng = document.getElementById("inpEnglish").value;

    let ketQua = tinhDTB(van, su, dia, eng);

    document.getElementById("tbKhoi2").innerHTML = ketQua;

};