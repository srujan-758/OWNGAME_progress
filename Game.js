class Game{
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    yellowCannon = createSprite(100,200);
    //yellowCannon.addImage("car1",car1_img);
    redCannon = createSprite(300,200);
    //redCannon.addImage("car2",car2_img);
    cannons=[yellowCannon,redCannon];
    
  }

  play(){
    form.hide();

    Player.getPlayerInfo();

    if (allPlayers!==undefined){
      var x=0;
      var y=350;
      var index=0;

      for(var plr in allPlayers){
        x=allPlayers[plr].x
        index=index+1;
        cannons[index-1].x=x;
        cannons[index-1].y=y;

      }
    }

   if(keyIsDown(LEFT_ARROW)&&player.index!==null){
      player.x-=2;
      player.update();
   } 

   if(keyIsDown(RIGHT_ARROW)&&player.index!==null){
    player.x+=2;
    player.update();
 } 

  if(keyWentDown(UP_ARROW)&&player.index!==null){
    console.log(player.y);
    var bullet=createSprite(player.x,player.y,20,20);
    bullet.shapeColor="red";
    bullet.velocityY=-2;
    bulletGroup.add(bullet);
  }

   drawSprites();

  }


}

