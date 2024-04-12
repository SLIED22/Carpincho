
var colores = ["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#4B0082", "#9400D3"];
var colour = 0;

window.setInterval(function() {
    $('body').css('background-color',colores[colour]);
    colour++;
    if (colour == 7) {
        colour = 0;
    }
}, 1000);


function placeDown(event) {
    var x = event.clientX + "px";
    var y = event.clientY + "px";
    var img = document.createElement('img');
    img.src = "IMG-20240216-WA0023-1q (1)ggggg.png";
    img.style.left = x;
    img.style.top = y;
    document.body.appendChild(img); 
}

var titles = ["CARPINCHO MATE ME UP", "THEY SHOULD HAVE CARPINCHOS INSTEAD OF VETS", "CARPINCHO JOKES ARE FOWL", "Carpincho are the Best"];
document.title = titles[Math.floor(Math.random() * 3)];
