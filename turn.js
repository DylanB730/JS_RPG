class Turn extends Game {
  constructor(turnLeft, paladin, fighter, monk, assassin, berzerker) {
      super(paladin, fighter, monk, assassin, berzerker, turnLeft)
  }

  startTurn = () => {

      const fighter = fighters.filter(a => a.status != "loser");
      const looser = fighters.filter(a => a.status == "loser");
      console.log("");
      console.log(`Round number ${this.turnLeft}`);
      console.log("");

      for (let i = 0; i < fighter.length; i++) {

          let perso = fighter[i];

          if (perso.status !== "playing") {
              break;
          }

          const pick = fighter.filter(c => c.name != perso.name && c.status != "loser");

          const name = pick.map(a => a.name);

          console.log("");
          console.log(`For this round, you will be: ${perso.name}`);
          console.log(`Choose your next victim: ${name} ?`);
          console.log("");

          //Conditions de mise en place d'un attaquant et d'une victime
          let special = prompt(`${perso.name} - Use your Special Attack ? Type "Special" ou press 'Enter' to a normal attack`);
          let foo = prompt(`${perso.name} Who's next ? ${name} ?`);
          let victime = fighter.filter(d => d.name == foo);
          const others = fighter.filter(e => e.name != foo);

          if (special == "Special") {
              perso.specialAttack();
              console.log(`${perso.name} chose his Special Attack`);
          }
          if (foo == fighters[0].name || foo == fighters[1].name || foo == fighters[2].name || foo == fighters[3].name || foo == fighters[4].name) {

              perso.dealDamage(victime[0]);

              if (victime[0].hp <= 0) {
                  victime[0].status = "loser";
                  console.log(`${victime[0].name} passed away !`);
              }
              if (fighters.reduce((a, b, c, d) => a.hp + b.hp + c.hp + d.hp == 0)) {
                  console.log(`${perso.nam} won !`);
              }
              if (this.turnLeft == 1) {
                  const winner = fighter.sort((a, b) => b.hp - a.hp)[0];
                  console.log("");
                  console.log(winner.name + " win the game with " + winner.hp + "HP ! Congratulations !! ");
              }
          } else {
              console.log(" ");
              console.log("ERROR ! Pseudo unavailable, you've lost a round ... ");
          }
          let stat = prompt(`See Stats of each players ? Type "Stat" ou press "Enter"`);
          if (stat == "Stat") {
              gaming.watchStats();
          }
      }
  }
}

const gaming = new Turn();
for (i = 0; i <= 9; i++) {
  const looser = fighters.filter(a => a.status == "loser");
  const winner = fighters.filter(a => a.status == "playing")[0];
  if (looser.length === 4) {
      console.log(winner.name + " won the Game !");
      break;
  } else {
      gaming.newTurn();
  }
}