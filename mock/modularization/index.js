const Tiger = require('./tiger');
const Wolf = require('./wolf');

const fight = (tiger, wolf) => {

    console.log('tiger: ' + tiger.strength );
    console.log('wolf: ' + wolf.strength)

    if (tiger.strength > wolf.strength) {
        tiger.growl();
        return;
    }  else if (wolf.strength > tiger.strength) {
        wolf.howl();
        return;
    } else {
        console.log('Same strength')
    }
}

const tiger = new Tiger();
const  wolf = new Wolf();

fight(tiger, wolf);