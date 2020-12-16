
//--------------------------------------------------------Pictures----------------------------------------------------------
const pic1 = document.getElementById("pic1");
const pic2 = document.getElementById("pic2");
const pic3 = document.getElementById("pic3");
const pic4 = document.getElementById("pic4");
const pic5 = document.getElementById("pic5");
const pic6 = document.getElementById("pic6");
const pic7 = document.getElementById("pic7");
const pic8 = document.getElementById("pic8");
const pic9 = document.getElementById("pic9");
const pic10 = document.getElementById("pic10");
const pic11 = document.getElementById("pic11");
const pic12 = document.getElementById("pic12");
const pic13 = document.getElementById("pic13");
const knownpics = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13];

//--------------------------------------------------------createYourOwnSentences---------------------------------------------------------------------

const pic14 = document.getElementById("pic14");
const pic15 = document.getElementById("pic15");
const pic16 = document.getElementById("pic16");
const pic17 = document.getElementById("pic17");
const pic18 = document.getElementById("pic18");
const pic19 = document.getElementById("pic19");
const pic20 = document.getElementById("pic20");
const pic21 = document.getElementById("pic21");
const pic22 = document.getElementById("pic22");
const pic23 = document.getElementById("pic23");
const pic24 = document.getElementById("pic24");

const unknownPics = [pic14, pic15, pic16, pic17, pic18, pic19, pic20, pic21, pic22, pic23, pic24];

//-------------------------------------------------------------Shufflebothsetsofpics---------------------------------------------------------
const knownpicsAndUnknownpics = [...knownpics, ...unknownPics];

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
  }

  return array;
}

const knownPicsShuffled = shuffle(knownpics);
const unknownPicsShuffled = shuffle(unknownPics);
const allPicsShuffled = shuffle(knownpicsAndUnknownpics);



function shuffleTheFunctions (arg) { 
  arg.forEach (function (item) {
    shuffle(item);
  });
  
}

function makeAllPicsNone (images) { 
  images.forEach (function (item) {
    item.style.display = "none";
  });
  
}

const knownSentencesLine = document.getElementById("knownSentencesLine");
const unknownSentencesLine = document.getElementById("unknownSentencesLine");
const allSentencesLine = document.getElementById("allSentencesLine");


//----------------------------------------------------------mix all known sentences photos----------------------------------------------------------
function mixKnownSentencesPicFirstPic () {
  const knownSentencesFirstPic = knownPicsShuffled[0];
  return knownSentencesFirstPic;
}


function mixKnownSentencesPrintLine () {
  makeAllPicsNone (knownpicsAndUnknownpics);  //put back knownpicsAndUnknownpics where knownpics is.
  const knownSentencesFirstPic = mixKnownSentencesPicFirstPic();
  knownSentencesLine.innerHTML = "";
  knownSentencesFirstPic.style.display = "block";


  shuffleTheFunctions([knownpics]);
}
  

//---------------------------------------------------------------mix all new sentences-------------------------------------------------------------------------
function mixUnknownSentencesPicFirstPic () {
  const unknownSentencesFirstPic = unknownPicsShuffled[0];
  return unknownSentencesFirstPic;
}


function mixUnknownSentencesPrintLine () {
  makeAllPicsNone (knownpicsAndUnknownpics);
  const unknownSentencesFirstPic = mixUnknownSentencesPicFirstPic();
  unknownSentencesLine.innerHTML = "";
  unknownSentencesFirstPic.style.display = "block";


  shuffleTheFunctions([unknownPics]);
}


//---------------------------------------------------------------mix all chap 1 sentences-------------------------------------------------
function mixAllSentencesPicFirstPic () {
  const allSentencesFirstPic = allPicsShuffled[0];
  return allSentencesFirstPic;
}


function mixallSentencesPrintLine () {
  makeAllPicsNone (knownpicsAndUnknownpics);
  const allSentencesFirstPic = mixAllSentencesPicFirstPic();
  allSentencesLine.innerHTML = "";
  allSentencesFirstPic.style.display = "block";


  shuffleTheFunctions([knownpicsAndUnknownpics]);
}
//--------------------------------------------------------------add event listeners to buttons-------------------------------------------
const mixKnownSentencesButton = document.getElementById("mixKnownSentencesbutton").addEventListener("click", mixKnownSentencesPrintLine ); 
const mixUnknownSentencesButton = document.getElementById("mixUnknownSentencesbutton").addEventListener("click", mixUnknownSentencesPrintLine ); 
const allSentencesButton = document.getElementById("allSentencesbutton").addEventListener("click", mixallSentencesPrintLine ); 

//-------------------------------------------------------------------chap2--------------------------------------------------------------------------------

