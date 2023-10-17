function scuberGreetingForFeet(ride){
  // Write your code here!
  if (ride <= 400) {
    return "This one is on me!"
  }
  else if (ride > 2000 && ride <2500) {
    return "I will gladly take your thirty bucks."
  }
  else if (ride >= 2500) {
    return "No can do."
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  const cityMessage = city === "NYC" ? "Ok, sounds good." : "No go."
  return cityMessage;
}
ternaryCheckCity('NYC')

function switchOnCharmFromTip(tip){
  switch(tip) {
    case 'generous':
      return "Thank you so much."
    case 'not as generous':
      return "Thank you."
    default :
    return "Bye."
  }  // Write your code here!
}
switchOnCharmFromTip("Thank you for everything");