"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GolfCoach_1 = require("./GolfCoach");
var CricketCoach_1 = require("./CricketCoach");
var myCricketCoach = new CricketCoach_1.CricketCoach;
var myGolfCoach = new GolfCoach_1.GolfCoach;
// declare an array for coaches
var theCoaches = [];
// add the coaches to the array
theCoaches.push(myCricketCoach);
theCoaches.push(myGolfCoach);
for (var _i = 0, theCoaches_1 = theCoaches; _i < theCoaches_1.length; _i++) {
    var theCoach = theCoaches_1[_i];
    console.log(theCoach.getDailyWorkout());
}
