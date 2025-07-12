
console.log("zoom.js loaded!");

let imageZoom = document.querySelector('#imageZoom');
imageZoom.addEventListener('mousemove', (e) => {
    imageZoom.style.setProperty('--display', 'block');
    let pointer = {
        x: (e.offsetX * 100) / imageZoom.offsetWidth,
        y: (e.offsetY * 100) / imageZoom.offsetHeight


    }
    imageZoom.style.setProperty('--zoom-x', `${pointer.x}%`);
    imageZoom.style.setProperty('--zoom-y', `${pointer.y}%`);

    console.log(pointer);
});


imageZoom.addEventListener('mouseleave', () => {
    imageZoom.style.setProperty('--display', 'none');

});
