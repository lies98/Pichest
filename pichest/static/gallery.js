
let save_button =  document.getElementById('saveImages')
let image = document.getElementById('myImage')
let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d');
canvas.width = image.clientWidth
canvas.height = image.clientHeight

console.log(image.clientWidth)

save_button.addEventListener('click',ev => {
 let a_element = document.createElement("a");
 a_element.setAttribute('download', 'image.png');
 a_element.setAttribute('href', canvas.toDataURL());
 a_element.click();
})

let inputrange = document.querySelectorAll('.slider');


for(let i=0; i<=inputrange.length-1; i++ ){
    inputrange[i].addEventListener('input', editimage);
}

function editimage(){
    let gs = document.getElementById('gs');
    let blur = document.getElementById('blur');
    let huerotate = document.getElementById('hue-rotate');
    let sepia = document.getElementById('sepia');

    let gsval = gs.value;
    let blurval = blur.value;
    let huerotateval = huerotate.value;
    let sepiaval = sepia.value;
    ctx.filter = 'grayscale('+gsval+'%) blur('+blurval+'px) hue-rotate('+huerotateval+'deg) sepia('+sepiaval+'%)';
    ctx.drawImage(image,0,0, canvas.width, canvas.height);
    image.style.filter = 'grayscale('+gsval+'%) blur('+blurval+'px) hue-rotate('+huerotateval+'deg) sepia('+sepiaval+'%)';

}
