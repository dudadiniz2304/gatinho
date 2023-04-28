noseX=0;//para gurdar a posicao x do nariz
noseY=0;//para gurdar a posicao y do nariz
function preload() {
    lapis=loadImage("https://i.postimg.cc/fbPqwYFB/gatinho.png");//imagem do nariz    

}
function setup (){
    canvas=createCanvas(300,300);//ela cria o canva de tamaanho 300 300
    canvas.center();//pro canva ficar no centro
    video=createCapture(VIDEO);//para pegar a captura do video 
    video.size(300,300);//taamaanho do video 
    video.hide();//para esconder um rastro 
    poseNet=ml5.poseNet(video,modelLoaded);//paraa pegar o posenet e o ml5
    poseNet.on("pose",gotPoses);//para ligar o posenet 

}
function take_snapshot(){
    save ("gatinho.png");//salva a imaagem com o nome palhaço.png
}
function draw (){
    image(video,0,0,300,300);//a largura e o x e y para colocar dentro do canva

    //primeiro modo de resolver desehando 

    //fill(255,0,0);//cor de fundo do objeto que estamos desenhando
    //stroke(255,0,0) dentro do parenteses é red,green,blue e stroke é o contorno   
    //circle(noseX+15,noseY+15,20);//é um circulo e é primeiro o x depois o y e depois o tamanho

    //segunso modo de resolver com uma imagem pronta
    image(lapis,noseX-80,noseY-80,200,200);
}
function modelLoaded(){
    console.log("o modelo poseNet foi inicializado");//para aapaarecer no console


}
function gotPoses (results){
    if (results.length>0){//se os resultados forem maiores que zero
        console.log (results);//para os resultados aparecerem no console
        noseX=results[0].pose.nose.x-15;//a posicao x do nariz
        noseY=results[0].pose.nose.y-15;//a posicao y do nariz 
        


    }

}