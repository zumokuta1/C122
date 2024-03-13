function setup(){
    canvas = createCanvas(640,480)
    canvas.position(110, 280)
    video = createCapture(VIDEO);
    video.hide()
}

function draw(){
    Image(video,0,0,0,640,480);
    tint_color = '';
}

function take_snapshot(){
    save('Imagen.png')
}