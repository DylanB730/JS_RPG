class Game {
  constructor(paladin, fighter, monk, assassin, berzerker, turnLeft = 10) {
    this.paladin = paladin;
    this.fighter = fighter;
    this.monk = monk;
    this.assassin = assassin;
    this.berzerker = berzerker;
    this.turnLeft = turnLeft;
  }

  newTurn = () =>{
    gaming.startTurn();
    this.turnLeft--;
  }

  watchStats = () =>{
    console.log("");
    if(paladin.status == "loser"){
      console.log("Paladin " + paladin.name + " is dead")
    } else{
      console.log("Paladin " + paladin.name + " has "+ paladin.hp + " HP" + " and " + paladin.mana + " mana")
    }
    
    if(monk.status == "loser"){
      console.log("Monk " + monk.name + " is dead")
    } else{
      console.log("Monk " + monk.name + " has "+ monk.hp + " HP" + " and " + monk.mana + " mana")
    }

    if(assassin.status == "loser"){
      console.log("Assassin " + assassin.name + " is dead")
    } else{
      console.log("Assassin " + assassin.name + " has "+ assassin.hp + " HP" + " and " + assassin.mana + " mana")
    }

    if(berzerker.status == "loser"){
      console.log("Berzerker " + berzerker.name + " is dead")
    } else{
      console.log("Berzerker " + berzerker.name + " has "+ berzerker.hp + " HP" + " and " + berzerker.mana + " mana")
    }

    if(fighter.status == "loser"){
      console.log("Fighter " + fighter.name + " is dead")
    } else{
      console.log("Fighter " + fighter.name + " has "+ fighter.hp + " HP" + " and " + fighter.mana + " mana")
    }
  }
}

const game1 = new Game (paladin, fighter, monk, assassin, berzerker);
const fighters = [paladin, fighter, monk, assassin, berzerker]

