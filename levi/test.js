window.onload=function(){
      var canvas=document.getElementById('myCanvas');
      var context=canvas.getContext('2d');
      canvas.width=800, canvas.height=800;
      context.beginPath();
      recurs(context, 17, 400, 250, 400, 550); //рекурсивная функция, рисующая фрактальную кривую
      context.stroke();
    };
    var angle=45*Math.PI/180; //переводим углы в радианы
    function recurs(context, n, x0, y0, x1, y1){ //n итераций, Точки A1(x0,y0) и A2(x1,y1)
              console.log(n, );

        if (n==0){
        context.moveTo(x0,y0);
        context.lineTo(x1,y1);

      }else{
        var xx=Math.cos(angle)*((x1-x0)*Math.cos(angle)-(y1-y0)*Math.sin(angle))+x0;
        var yy=Math.cos(angle)*((x1-x0)*Math.sin(angle)+(y1-y0)*Math.cos(angle))+y0; //находим точку A3
        recurs(context, n-1, x0, y0, xx, yy); //A1, A3
        recurs(context, n-1, xx, yy, x1, y1); //A3, A2
      }
    }