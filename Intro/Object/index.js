// @TODO: Uncomment the following file and complete the code
//        according to the instructions in README.md.

 // Roster of player
 var roster = [{
   name: "Doug",
   position: "Quarterback",
   madeTeam: true
 },
 {
   name: "Antonio",
   position: "Tight End",
   madeTeam: true
 },
 {
   name: "Nick",
   position: "Kicker",
   madeTeam: false
 },
 {
   name: "Ereck",
   position: "Offensive Live",
   madeTeam: false
 },
 {
   name: "AJ",
   position: "Line Backer",
   madeTeam: true
 }];

// all players that has made the team
for (var j = 0; j<roster.length;j++){
    if (roster[j].madeTeam){
        console.log(roster[j].name);
    }
}
 
// YOUR CODE HERE
