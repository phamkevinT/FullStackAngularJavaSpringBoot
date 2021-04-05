import { Coach } from "./Coach";
import { GolfCoach } from "./GolfCoach";
import { CricketCoach } from "./CricketCoach";

let myCricketCoach = new CricketCoach;
let myGolfCoach = new GolfCoach;

// declare an array for coaches
let theCoaches: Coach[] = []; 

// add the coaches to the array
theCoaches.push(myCricketCoach);
theCoaches.push(myGolfCoach);

for(let theCoach of theCoaches) {
    console.log(theCoach.getDailyWorkout());
    
}