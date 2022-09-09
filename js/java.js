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

const mash = ['mansion', 'apartment', 'shack', 'house']
let mashWord = mash[Math.floor(Math.random() * mash.length)];
console.log(mashWord);

let finalAnswer = (`You will marry ${mashResult[0]}, earn a living as a ${mashResult[1]}, have ${mashResult[2]} beautiful children and live in a ${mashWord}!`);


function finalScreen() { 
  document.getElementsByClassName("form-box")[0].classList.add("hidden");
  document.getElementsByClassName("change")[0].classList.add("hidden");
  document.getElementsByClassName("wait")[0].classList.add("show")
  document.getElementsByClassName("wait")[0].classList.remove("hidden2")
  setTimeout(future, 6000);
 function future() {
  
  document.getElementsByClassName("wait")[0].classList.add("hidden2")
  document.getElementsByClassName("wait")[0].classList.remove("show")
  document.getElementsByClassName("future")[0].classList.add("show");
  document.getElementsByClassName("future")[0].classList.remove("hidden2");
  document.getElementsByClassName("resetBtn")[0].classList.add("show");
  document.getElementsByClassName("resetBtn")[0].classList.remove("hidden");
  document.body.style.backgroundImage  = "url(./css/images/spiraly.gif)"
  console.log(mash.Result)
  document.getElementById("answers").innerHTML = `You will marry ${mashResult[0]}, earn a living as a ${mashResult[1]}, have ${mashResult[2]} beautiful children and live in a ${mashWord}!`
  // alert(`You will marry ${mashResult[0]}, earn a living as a ${mashResult[1]}, have ${mashResult[2]} beautiful children and live in a ${mashWord}!`);
  
 
} 
}
function resetScreen() { //refreshes screen with reset button
  let resetBtn = document.getElementsByClassName("resetBtn")[0];//targeting Submit button
  resetBtn.onclick =  window.location.reload();  
};




// console.log(finalAnswer)
