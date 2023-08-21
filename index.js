function scuberGreetingForFeet(distance){
  let result
  if (distance <= 400) {
    result = "This one is on me!";
  } else if (distance <= 2000) {
    result = "That will be twenty bucks.";
  } else if (distance <= 2500) {
    result = "I will gladly take your thirty bucks."
  } else {
    result = "No can do."
  }
  return result
}

function ternaryCheckCity(city){
  let destination = city === "NYC" ? "Ok, sounds good." : "No go.";
  return destination
}

function switchOnCharmFromTip(tip){
  let response;
  switch (tip) {
    case 'generous':
      response = "Thank you so much.";
      break;
    case 'not as generous':
      response = "Thank you.";
      break;
    default:
      response = "Bye.";
    break;
  }
  return response
}