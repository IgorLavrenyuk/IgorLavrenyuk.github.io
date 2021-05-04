window.onload=function(){


      class LeviCurveBuilder {
          constructor(options){
            const {  iterations,node, x0 =400,y0=250,x1=400,y1=550, width=800, height=800} = options
            this.n = iterations
            this.node = node
            this.x0 = x0
            this.y0 = y0
            this.x1 = x1
            this.y1 = y1
            this.width = width
            this.height =height

          }



       recurs(context, n, x0, y0, x1, y1){ //n итераций, Точки A1(x0,y0) и A2(x1,y1)
        const angle=45*Math.PI/180; //переводим углы в радианы

        if (n==0){
        context.moveTo(x0,y0);
        context.lineTo(x1,y1);
      }else{
        const xx=Math.cos(angle)*((x1-x0)*Math.cos(angle)-(y1-y0)*Math.sin(angle))+x0;
        const yy=Math.cos(angle)*((x1-x0)*Math.sin(angle)+(y1-y0)*Math.cos(angle))+y0; //находим точку A3
        this.recurs(context, n-1, x0, y0, xx, yy); //A1, A3
        this.recurs(context, n-1, xx, yy, x1, y1); //A3, A2
      }
      this.draw(context)
      }

      draw(context){
       context.stroke();

      }

      update(times){
      this.n = times
      this.init()

      }
          init() {
            const  canvas =this.node;
            const  context =canvas.getContext('2d');
            canvas.width=this.width, canvas.height= this.height;
            context.beginPath();

           this.recurs(context,this.n, this.x0,this.x1, this.y0,this.y1); //рекурсивная функция, рисующая фрактальную кривую

          }



    }


    const canvas=document.getElementById('myCanvas');

    const options = {
        iterations:7,
        node:canvas,
        x0:400,
        y0:250,
        x1:400,
        y1:550,
        width:800,
        height:800
    }
    const curve = new LeviCurveBuilder(options)
    curve.init()

    const numberInput = document.querySelector('.drawNumber')
    const drawBtn = document.querySelector('.drawBtn')
    const warn = document.querySelector('.warn')

    drawBtn.addEventListener('click', ()=> {
        const amount = parseInt(numberInput.value)
        curve.update(amount)
    })

    numberInput.addEventListener('change', ()=> {
        const amount = parseInt(numberInput.value)
        if(amount > 10) {
            warn.classList.add('show')
        }else {
            warn.classList.remove('show')
        }
    })

    }