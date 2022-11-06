const pic = document.getElementById("pic");
const doubleButt = document.getElementById("doubleButt");
const autoButt = document.getElementById("autoButt");
const number = document.getElementById("number");

let haisetIncr = 1;
let autoInc = 1;
let numberOfHaiset = 0;
let doublerPrice = 100;
let autoPrice = 200;

pic.onclick = () => {
  numberOfHaiset += haisetIncr;
  number.innerHTML = numberOfHaiset;
};

doubleButt.onclick = () => {
  if (numberOfHaiset >= doublerPrice) {
    numberOfHaiset -= doublerPrice;
    haisetIncr = haisetIncr * 2;
    doublerPrice += 150;
    number.innerHTML = numberOfHaiset;
    doubleButt.innerHTML = `Buy doubler for: ${doublerPrice}`;
  }

}
  autoButt.onclick = () =>{
  if (numberOfHaiset >= autoPrice) {

    numberOfHaiset -= autoPrice;
    number.innerHTML = numberOfHaiset;
    autoPrice += 250;
    autoButt.innerHTML = `Buy auto for: ${autoPrice}`;

    setInterval(() => {
      numberOfHaiset += autoInc;
      number.innerHTML = numberOfHaiset;
    }, 1000);
  }
}

