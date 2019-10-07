// capitalizeFirst.js
function capitalizeFirst(input) {
  let ouput = input.split(" ");
  for(i = 0; i < ouput.length; i++){
    ouput[i] = ouput[i].charAt(0).toUpperCase() + ouput[i].substr(1);
  }
  return ouput.join(" ");
}

module.exports = capitalizeFirst;