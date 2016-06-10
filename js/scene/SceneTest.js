//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Direction.Battle.Scene.Scene1 = function()
{
 Html5.System.Scene.Core.call(this);
 this.frame = 0;
 this.points = new Array(new Html5.Entity.Position(-100,250),new Html5.Entity.Position(100,115),new Html5.Entity.Position(-100,100));
 this.create = function()
 {
  var sx = this.canvas.size.width;
  var sy = this.canvas.size.height;
  var mx = this.canvas.size.halfWidth;
  var my = this.canvas.size.halfHeight;
    
  var bk = new Direction.Battle.Component.UI.BackGround(this.callback,this.timeline,'bk',this);
  bk.create(mx,my);
  this.backGroundLayer.list.push(bk);

//  var player1 = new Direction.Battle.Component.Card.Player(this.callback,this.timeline,'player1',1,false,this);
//  player1.create(mx-100,my+150,60);
//
//  var player2 = new Direction.Battle.Component.Card.Player(this.callback,this.timeline,'player2',2,false,this);
//  player2.create(mx,my+170,90);
//  
//  var player3 = new Direction.Battle.Component.Card.Player(this.callback,this.timeline,'player3',3,false,this);
//  player3.create(mx+100,my+150,120);
//
//  var player4 = new Direction.Battle.Component.Card.Player(this.callback,this.timeline,'player4',4,false,this);
//  player4.create(mx+130,my+60,150);
//
//  var player5 = new Direction.Battle.Component.Card.Player(this.callback,this.timeline,'player5',5,true,this);
//  player5.create(mx-130,my+60,30);
//  
//  var boss = new Direction.Battle.Component.Card.Boss(this.callback,this.timeline,'boss',this);
//  boss.create(mx,my-100,270);
  
//  player1.action = Direction.Battle.Component.Card.Player.Attack;
//  player1.nextPlayer.push(player2);
//  player2.nextPlayer.push(player3);
//  player3.nextPlayer.push(player4);
//  player4.nextPlayer.push(player5);
//  player5.nextPlayer.push(boss);
//  
//  player1.nextEnemy.push(boss);
//  player2.nextEnemy.push(boss);
//  player3.nextEnemy.push(boss);
//  player4.nextEnemy.push(boss);
//  player5.nextEnemy.push(boss);
//  
//  boss.nextPlayer.push(boss);
//  boss.nextEnemy.push(player1);
//  boss.nextEnemy.push(player2);
//  boss.nextEnemy.push(player3);
//  boss.nextEnemy.push(player4);
//  boss.nextEnemy.push(player5);
  
  var effect = new Direction.Battle.Component.Mark.Particle(this.callback,this.timeline,'particle',this);
  effect.create(mx,my);
  
  var effect = new Direction.Battle.Component.Mark.Line(this.callback,this.timeline,'line',this);
  effect.create(mx,my);
  
  var effect = new Direction.Battle.Component.Mark.Versus(this.callback,this.timeline,'vs',this);
  effect.create(mx,my);
  
  this.timeline.start = true;
 };
 
 this.doing = function(canvas)
 {
  if(!this.timeline.start || !this.isLoadResource())
   return;
  var shake = canvas.shake(this.timeline.currentFrame);
  canvas.clear();
  var self = this;
  canvas.context.save();
  canvas.context.translate(shake,shake);
  {
      //render back ground
      for(obj in self.backGroundLayer.list)
      {
        var gameObject = self.backGroundLayer.list[obj];
        if(-1 != gameObject.name.indexOf("bk"))
        {
          gameObject.render(canvas);
        }
      }
      
      //render card
      for(obj in self.cardLayer.list)
      {
          var gameObject = self.cardLayer.list[obj];
          
      if(-1 != gameObject.name.indexOf("player1"))
        gameObject.render(canvas,0);
      if(-1 != gameObject.name.indexOf("player2"))
        gameObject.render(canvas,0);
      if(-1 != gameObject.name.indexOf("player3"))
        gameObject.render(canvas,0);
      if(-1 != gameObject.name.indexOf("player4"))
        gameObject.render(canvas,0);
      if(-1 != gameObject.name.indexOf("player5"))
        gameObject.render(canvas,0);
      if(-1 != gameObject.name.indexOf("boss"))
        gameObject.render(canvas,0);
      }
      
    for(obj in self.effectLayer.list)
    {
      var gameObject = self.effectLayer.list[obj];
      gameObject.render(canvas);
    }
  }
  canvas.context.restore();
  this.timeline.goToNextFrame();
 };
};