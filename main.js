function setup()
{
    c1=createCanvas(500,500)
    v1=createCapture(VIDEO)
    v1.hide()
    c1.center()
}

function draw()
{
    image(v1,0,0,500,500)
    tint(tint_color)
}

function take_snapshot()
{
    save ('mahendra.png')
}

tint_color=" "

function change_shade()
{
    tint_color=document.getElementById("color_name").value;

}



