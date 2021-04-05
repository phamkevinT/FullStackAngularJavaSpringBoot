let sportsOne: string[] = ["Golf", "Cricket", "Tennis", "Swimming"];

// Traditional For Loop
for (let i = 0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);
}

// Simplified For Loop
for (let tempSport of sportsOne) {

    if (tempSport == "Swimming") {
        console.log(tempSport + "<<< My Favorite Sport!")
    }
    else {
        console.log(tempSport);
    }
}