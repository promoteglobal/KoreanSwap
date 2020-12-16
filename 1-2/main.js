
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

// const thisKoreaPic = document.getElementById("thisKorea");
// const thisHousePic = document.getElementById("thisHouse");
// const thatNamePic = document.getElementById("thatName");
// const thatChairPic = document.getElementById("thatChair");
// const thisBookPic = document.getElementById("thisBook");
// const thisComputerPic = document.getElementById("thisComputer");
// const thisSofaPic = document.getElementById("thisSofa");
// const thatChinaPic = document.getElementById("thatChina");
// const thisJapanPic = document.getElementById("thisJapan");
// const thatDoorPic = document.getElementById("thatDoor");
// const thisStudentPic = document.getElementById("thisStudent");
// const wordYestPic = document.getElementById("wordYes");
// const wordNoPic = document.getElementById("wordNo");
// const createYourOwnSentencesArray = [thisKoreaPic, thisHousePic, thatNamePic, thatChairPic, thisBookPic, thisComputerPic, thisSofaPic, thatChinaPic, thisJapanPic, thatDoorPic, thisStudentPic, wordYestPic, wordNoPic];

//-------------------------------------------------------------Shufflebothsetsofpics---------------------------------------------------------
// const knownpicsAndUnknownpics = [...knownpics, ...createYourOwnSentencesArray];

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
// const createYourOwnSentencesShuffled = shuffle(createYourOwnSentencesArray);
// const shufflealllesson1Shuffled = shuffle(knownpicsAndUnknownpics);



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
// const createYourOwnSentencesLine = document.getElementById("NewVocabPics");
// const createallchap1Line = document.getElementById("AllVocabsPics1.1");


//----------------------------------------------------------mix all known sentences photos----------------------------------------------------------
function mixKnownSentencesPicFirstPic () {
  const knownSentencesFirstPic = knownPicsShuffled[0];
  return knownSentencesFirstPic;
}


function mixKnownSentencesPrintLine () {
  makeAllPicsNone (knownpics);  //put back knownpicsAndUnknownpics where knownpics is.
  const knownSentencesFirstPic = mixKnownSentencesPicFirstPic();
  knownSentencesLine.innerHTML = "";
  knownSentencesFirstPic.style.display = "block";


  shuffleTheFunctions([knownpics]);
}
  

//---------------------------------------------------------------mix all new sentences-------------------------------------------------------------------------
// function mixphotosCreateOwnfunction () {
//   const firstChoiceCreatedPiced = createYourOwnSentencesShuffled[0];
//   return firstChoiceCreatedPiced;
// }


// function mixphotosCreatePrintLine () {
//   makeAllPicsNone (knownpicsAndUnknownpics);
//   const firstChoiceCreatedPiced = mixphotosCreateOwnfunction();
//   createYourOwnSentencesLine.innerHTML = "";
//   firstChoiceCreatedPiced.style.display = "block";


//   shuffleTheFunctions([createYourOwnSentencesArray]);
// }


//---------------------------------------------------------------mix all chap 1 sentences-------------------------------------------------
// function mixallphotosfunction () {
//   const firstChoiceCreatedPiced = shufflealllesson1Shuffled[0];
//   return firstChoiceCreatedPiced;
// }


// function mixallchap1PrintLine () {
//   makeAllPicsNone (knownpicsAndUnknownpics);
//   const firstChoiceCreatedPiced = mixallphotosfunction();
//   createallchap1Line.innerHTML = "";
//   firstChoiceCreatedPiced.style.display = "block";


//   shuffleTheFunctions([knownpicsAndUnknownpics]);
// }
//--------------------------------------------------------------add event listeners to buttons-------------------------------------------
const mixKnownSentencesButton = document.getElementById("mixKnownSentencesbutton").addEventListener("click", mixKnownSentencesPrintLine ); 
// const imageShuffleCreateButton = document.getElementById("newVocabPics").addEventListener("click", mixphotosCreatePrintLine ); 
// const allVocabPicsChap1Button = document.getElementById("allVocabsPics1.1").addEventListener("click", mixallchap1PrintLine ); 

//-------------------------------------------------------------------chap2--------------------------------------------------------------------------------

