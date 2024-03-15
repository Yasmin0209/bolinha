//declarando a variavel x
let x = 300
//declarando a variavel y
let y = 200
let tamanho = 35
let v = 2

let raio = tamanho  / 2;



function setup() {
    createCanvas(600, 400);
  }
  
  function draw() {
    background(0);

  circle(x,y,tamanho)


  
    x += v;
    
     if (x + raio > width || x - raio < 0 ){

  v *= -1;
  }






}