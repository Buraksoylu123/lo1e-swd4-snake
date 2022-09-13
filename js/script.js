let canvas = document.getElementById('snake')
let context = canvas.getContext ('2d')

context.fillStyle = "black";
context.fillRect(0, 0, 400, 400);

context.fillStyle = "red";
context.fillRect(190, 190, 20, 20);


function update() {
    console.log('update');
}

setInterval(update, 1000);

