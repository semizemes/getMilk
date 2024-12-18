function getMilk(bottles) {
  
  var moneyWeHave = prompt("how much money do you have?");
  var price1bottle = prompt("How much does it cost one bottle of milk");
var weCanBuy = Math.trunc (moneyWeHave/price1bottle);
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log("buy " + weCanBuy + " bottles of milk");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}

getMilk(weCanBuy);
alert(weCanBuy);
