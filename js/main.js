let h1 = document.querySelector(".landing .container .text h1");
let p = document.querySelector(".landing .container .text p");
let messages = ["Welcome, Dear Student","We are here to make your life easier in Amizour, By providing some services at prices tailored to students"];
let textPosition = 0;
let speed = 100;

typewriter1 = () => {
    h1.innerHTML = messages[0].substring(0,textPosition) +  `<span>\u25ae</span>`;
    if(textPosition++ != messages[0].length){
        setTimeout(typewriter1,speed);
    }else{
        textPosition = 0
        h1.innerHTML = messages[0]
        setTimeout(typewriter2,speed);
    }
}

typewriter2 = () => {
    p.innerHTML = messages[1].substring(0,textPosition) +  `<span>\u25ae</span>`;
    if(textPosition++ != messages[1].length){
        setTimeout(typewriter2,speed);
    }else p.innerHTML = messages[1];
}
window.addEventListener("load",typewriter1);




function print(x){
    console.log(x);
}