class Player{
 constructor(){
   this.name=null;
   this.index=null;
   this.x=200;
   this.y=200;
   }
  getCount(){
   var gameStateref=database.ref('playerCount');
   gameStateref.on("value",(data)=>{
     playerCount=data.val();
   });
  }
 
  updateCount(count){
   database.ref('/').update({
     playerCount:count
   })  
  
  }

  update(){
   var playerIndex="players/player"+this.index;
   database.ref(playerIndex).set({
     name:this.name,
     x:this.x,
     y:this.y
   })  
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }

}