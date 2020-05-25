let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;

const changeColor = (e) => {
    
    // if(e.keyCode == 38){
    //     if(red == 260 || green == 260 || blue == 260){
    //         let red = 260;
    //         let green = 260;
    //         let blue = 260;
    //     }
    //     else{
    //         red+=10;
    //         green+=10;
    //         blue+=10;
    //     }
    // }
    // else if(e.keyCode == 40){
    //     if(red == 0 || green == 0 || blue == 0){
    //         let red = 0;
    //         let green = 0;
    //         let blue = 0;
    //     }
    //     else{
    //         red-=10;
    //         green-=10;
    //         blue-=10;
    //     }  
    // }
    // console.log(red);
    // document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;

    switch(e.keyCode){
        case 38: 
        document.body.style.backgroundColor = `rgb(${red < 255 ? red++:red},${green < 255 ? green++:green},${blue < 255 ? blue++:blue})`;
        console.log(red,green,blue);
        break;
        case 40: 
        document.body.style.backgroundColor = `rgb(${red > 0 ? red--:red},${green > 0 ? green--:green},${blue > 0 ? blue--:blue})`;
        console.log(red,green,blue);
        break;
    }


}

//38 - strzałka w górę
//40 - strzałga w dół


window.addEventListener("keydown",changeColor);
window.addEventListener("keyup",changeColor);