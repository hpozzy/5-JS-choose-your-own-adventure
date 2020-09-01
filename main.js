// alert("Welcome to the English F.A Cup")
// let teamChoice = prompt("Pick the winner Arsenal vs Sheffield United")
// // let youveBeenEliminated = false

// if (teamChoice === "Sheffield United") {
//   alert("You've been eliminated.")
//   youveBeenEliminated = true
// }
// if (teamChoice === "Arsenal") {
//   alert("You've Advanced to the Semi Final")
// }

// // if (!youveBeenEliminated) {
// teamChoice = prompt("Pick the winner Arsenal vs Manchester City")
// if (teamChoice === "Manchester City") {
//   alert("You've been eliminated.")
//   youveBeenEliminated = true
// } else {
//   alert("You've advanced to the Final vs Chelsea!")
// }

// teamChoice = prompt("Pick the winner Arsenal vs Chelsea")
// if (teamChoice === "Chelsea") {
//   alert("You've been eliminated.")
//   youveBeenEliminated = true
// } else {
//   alert("Congratulations You are FA Cup Champions!")
// }

// if (youveBeenEliminated) {
//   alert("You've lost the final :( BETTER LUCK NEXT YEAR")
// }

alert("Mike Tyson Punch Out")
let punchChoice = prompt(
  "You've made Mike Tyson really mad and he's about to punch you with a head shot, low blow, or body shot.  PICK YOUR POISON "
)
let punchSelection = false

if (punchChoice == "head shot") {
  alert("You've Been Killed")
  punchSelection = true
}
if (punchChoice == "low blow") {
  alert("You've Won but have taken irreparable damage")
  punchSelection = true
}

if (punchChoice == "body shot") {
  alert("LOL GL WITH THAT")
  punchSelection = true
  punchChoice2 = prompt("Would you like to continue or run away?")
}
if (punchChoice2 == "continue") {
  punchChoice3 = prompt("Please select the next punch: low blow or head shot")
} else if (punchChoice2 == "run away") {
  alert("I FEEL YOU THOUGH")
}
if (punchChoice3 == "head shot") {
  alert("DAMN YOUVE BEEN KILLED")
  // punchSelection = true
}
if (punchChoice3 == "low blow") {
  alert(
    "You've Won but have taken irreparable damage.  SHOULDA TOOK ONE TO THE HEAD"
  )
  // punchSelection = true
}
