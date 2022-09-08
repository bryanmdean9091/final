mashResult = [];

let values = [];

function addAll() {
  const inp = document.getElementsByClassName('box');
  for (i of inp) {
    values.push(i.value);
    i.value = "";
    console.log(values)
  }
  displayRecord()
  values = []
  if (showNum >= 2) {
    finalScreen()
  }
  else {
    switchUp()
  }
};


function displayRecord() {
  const randomWord = Math.floor((Math.random() * values.length))
  mashResult.push(values[randomWord]);
  console.log(mashResult);
};

let showNum = 0;
let hiddenNum = 1;



function switchUp() {
  document.getElementsByClassName("show")[showNum].classList.add("hidden"); //hiding first paragraph [0]
  document.getElementsByClassName("hidden")[hiddenNum].classList.add("show"); //showing second paragraph [1]
  document.getElementsByClassName("hidden")[hiddenNum].classList.remove("hidden"); //removing hidden class from 2nd paragraph[1]
  showNum += 1
  hiddenNum +=1
};


function finalScreen() {
  document.getElementsByClassName("form-box")[0].classList.add("hidden");
  document.getElementsByClassName("change")[0].classList.add("hidden");
  document.getElementsByClassName("resetBtn")[0].classList.add("show");
  document.getElementsByClassName("resetBtn")[0].classList.remove("hidden");
  document.getElementsByClassName("future")[0].classList.add("show");
  document.getElementsByClassName("future")[0].classList.remove("hidden2");
  document.getElementsByClassName("spiral")[0].classList.add("show");
  document.getElementsByClassName("spiral")[0].classList.remove("hidden3");


}
function resetScreen() { //refreshes screen with reset button
  let resetBtn = document.getElementsByClassName("resetBtn")[0];//targeting Submit button
  resetBtn.onclick =  window.location.reload();  
}




const mash = ['mansion', 'apartment', 'shack', 'house']
let mashWord = mash[Math.floor(Math.random() * mash.length)];
console.log(mashWord)