class Character {
  constructor(hp, dmg, status, mana) {
    this.hp = hp;
    this.dmg = dmg;
    this.status = status;
    this.mana = mana;
  }

  takeDamage = (damage) => {
    if (this.hp > 0){
      this.hp = this.hp - damage;
    } else {
      console.log(`You can't hit ${this.name} cause he is dead`)
    }
  }

  dealDamage = (victim) => {
    if (this.dmg > victim.hp){
      this.mana = this. mana + 20;
      console.log(`${this.name} + 20 mana for killing ${victim.name}`)
    }
    if (this.status != "loser"){
      victim.takeDamage(this.dmg);
      console.log(`Violent Smaaash from ${this.name} ${this.dmg}dmg to ${victim.name} !`)
      console.log(victim.name + " has " + victim.hp + " HP !")
    }
    
  }
}
