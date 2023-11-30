const colorgenerator = ()=>{
    let randomcolor = `#${Math.random().toString(16).slice(2,8).padEnd(6,0)}`;
    document.body.style.background = randomcolor;
    document.getElementById("clr").innerHTML = randomcolor;
    navigator.clipboard.writeText(randomcolor);
}

document.getElementById("clrgenerate").addEventListener("click" , colorgenerator());
colorgenerator();

