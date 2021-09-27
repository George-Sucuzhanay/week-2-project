function fight() {
    let monster = prompt("What is the name of the monster you are fighting?")
    let hero = prompt("What is the name of the hero?")
    let villainHealth = 50
    let heroHealth = 50
    // while needs more work
    while(heroHealth > 0 && villainHealth > 0 ) {
        let heroDice = Math.floor(Math.random() * (21 - 1) + 1)
        let villianDice = Math.floor(Math.random() * (21 - 1) + 1)
      
        // this is hero dice roll
        if (heroDice == 1 || heroDice == 2){
            heroHealth = heroHealth - 5
            alert(`${hero} stabbed themselves. ${hero}  has  ${heroHealth}  hitpoints left.  ${monster}  has  ${villainHealth} hitpoints left.`)
        }
        else if (heroDice >= 3 && heroDice <= 12){
            heroHealth = heroHealth - 0
            alert(hero + " missed." + hero +  " has " + heroHealth + " hitpoints left. " + monster + " has " + villainHealth + " hitpoints left.")
        }
        else if (heroDice >= 11 && heroDice <= 19){
            villainHealth = villainHealth - 10
            alert(hero + " has made a hit! " + hero + " has " + heroHealth + " hitpoints left. " + monster + " has " + villainHealth + " hitpoints left.")
        }
        else if (heroDice == 19 || heroDice == 21){
            villainHealth = villainHealth - 20
            alert(hero + " has made a critical hit! " + hero + " has " + heroHealth + " hitpoints left. " + monster + " has " + villainHealth + " hitpoints left.")
        }

        // This is villain dice roll
        if (villianDice == 1 || villianDice == 2){
            villianHealth = villianHealth - 5
            alert(`${monster} stabbed themselves. ${hero}  has  ${heroHealth}  hitpoints left.  ${monster}  has  ${villainHealth} hitpoints left.`)
        }
        else if (villianDice >= 3 && villianDice <= 12){
            villianHealth = villainHealth - 0
            alert(monster + " missed! " + hero + " has " + heroHealth + " hitpoints left. " + monster + " has " + villainHealth + " hitpoints left.")
        }
        else if (villianDice >= 11 && villianDice <= 19){
            heroHealth = heroHealth - 10
            alert(hero + " has made a hit! " + hero + " has " + heroHealth + " hitpoints left. " + monster + " has " + villainHealth + " hitpoints left.")
        }
        else if (villianDice == 19 || villainDice == 21){
            heroHealth = heroHealth - 20
            alert(monster + " has made a critical hit! " + hero + " has " + heroHealth + " hitpoints left. " + monster + " has " + villainHealth + " hitpoints left.")
        }

      
        if (villainHealth < heroHealth && villainHealth <= 0){
          alert(hero + " has defeated " + monster + "! And the winner of this game is " + hero + ".")
        }
        else if (heroHealth < villainHealth && heroHealth <= 0){
          alert(monster + " has defeated " + hero + "! And the winner of this game is " + monster + ".")
        }

    }
    
    
}

fight()