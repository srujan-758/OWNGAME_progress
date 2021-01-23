var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var player,game,form;


var yellowCannon;
var redCannon;
var cannons=[];

var allPlayers;

function preload(){
}


function setup(){
  canvas = createCanvas(700,500);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
  bulletGroup=createGroup();
}


function draw(){
 if(playerCount==2){
   game.update(1);
 } 

 if(gameState==1){
   clear();
   game.play();
 }
}
