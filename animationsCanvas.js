//Smiley
var canvas  = document.querySelector('#canvas');
var context = canvas.getContext('2d');
context.beginPath(); // La bouche, un arc de cercle
context.arc(75, 75, 40, 0, Math.PI);
context.fill();

context.beginPath(); // Le cercle extérieur
context.arc(75, 75, 50, 0, Math.PI * 2);

context.moveTo(41, 58); // L'œil gauche
context.arc(55, 70, 20, (Math.PI / 180) * 220, (Math.PI / 180) * 320);

context.moveTo(81, 58); // L'œil droit
context.arc(95, 70, 20, (Math.PI / 180) * 220, (Math.PI / 180) * 320);
context.stroke();

//JS LOGO
var canvas  = document.querySelector('#js');
var context2 = canvas.getContext('2d');
context2.beginPath();
context2.moveTo(131, 119);
context2.bezierCurveTo(131, 126, 126, 131, 119, 131);
context2.lineTo(30, 131);
context2.bezierCurveTo(23, 131, 18, 126, 18, 119);
context2.lineTo(18, 30);
context2.bezierCurveTo(18, 23, 23, 18, 30, 18);
context2.lineTo(119, 18);
context2.bezierCurveTo(126, 18, 131, 23, 131, 30);
context2.lineTo(131, 119);
context2.closePath();
context2.fillStyle = "rgb(23, 145, 167)";
context2.fill();
context2.font = "68px Calibri,Geneva,Arial";
context2.fillStyle = "white";
context2.fillText("js", 84, 115);

//Animation Canvas 1
var monCanvas = document.getElementById('dessin');
if (monCanvas.getContext){
  var ctx = monCanvas.getContext('2d');
  /* dessin */
  ctx.fillStyle = "blue";
  /* translation au centre */
  ctx.translate(monCanvas.width/2,monCanvas.height/2)
  /* incrément */
  var i = 0;
  /* timer */
  var inter = setInterval(Rotation, 100);
} else {
  alert('canvas non supporté par ce navigateur');
}

/* fonction de dessin */
function Rotation() {
  ctx.rotate(0.5);
  /* dessin */
  ctx.fillRect(0, 0, 200, 20);
  i++;
  if(i>24) clearInterval(inter);
}

// Jauge circulaire
(function($){
  $('input.round').wrap('<div class="round"/>').each(function(){
    var $input = $(this);
    var $div = $input.parent();
    var $circle = $('<canvas width="200px" height="200px"/>');
    var $color = $('<canvas width="200px" height="200px"/>');
    var min = $input.data('min');
    var max = $input.data('max');
    var ratio = ($input.val()-min) / (max-min);

    $div.append($circle);
    $div.append($color);

    var ctx = $circle[0].getContext('2d');
    ctx.beginPath();
    ctx.arc(100, 100, 85, 0, 2*Math.PI);
    ctx.lineWidth = 20;
    ctx.strokeStyle = "#FFF";
    ctx.shadowOffsetX = 2;
    ctx.shadowBlur = 5;
    ctx.shadowColor = "rgba(0,0,0,0.8)";
    ctx.stroke();

    var ctx = $color[0].getContext('2d');
    ctx.beginPath();
    ctx.arc(100, 100, 85, -1/2 * Math.PI, ratio*2*Math.PI - 1/2 * Math.PI);
    ctx.lineWidth = 20;
    ctx.strokeStyle = "rgb(48, 12, 77)";
    ctx.stroke();

    $div.mousedown(function(event){
      event.preventDefault();
      $div.bind("mousemove", function(event){
        var x = event.pageX - $div.offset().left - $div.width()/2;
        var y = event.pageY - $div.offset().top - $div.height()/2;
        var a = Math.atan2(x,-y) / (2*Math.PI);
        if (a < 0) {
          a+=1;
        }
        ctx.clearRect(0,0,200,200);
        ctx.beginPath();
        ctx.arc(100, 100, 85, -1/2 * Math.PI, a*2*Math.PI - 1/2 * Math.PI);
        ctx.lineWidth = 20;
        ctx.strokeStyle = "rgb(48, 12, 77)";
        ctx.stroke();
        $input.val(Math.round(a * (max - min) + min));
      })
    }).mouseup(function(event){
      event.preventDefault();
      $div.unbind("mousemove");
    })
  });
})(jQuery);
