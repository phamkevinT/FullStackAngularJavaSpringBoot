var sportsOne = ["Golf", "Cricket", "Tennis", "Swimming"];
// Traditional For Loop
for (var i = 0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);
}
// Simplified For Loop
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var tempSport = sportsOne_1[_i];
    if (tempSport == "Swimming") {
        console.log(tempSport + "<<< My Favorite Sport!");
    }
    else {
        console.log(tempSport);
    }
}
