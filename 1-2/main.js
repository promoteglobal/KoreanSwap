
//--------------------------------------------------------Pictures----------------------------------------------------------
const pic1 = document.getElementById("pen");
const pic2 = document.getElementById("thatsCar");
const pic3 = document.getElementById("magazine");
const pic4 = document.getElementById("backpack");
const pic5 = document.getElementById("school");
const pic6 = document.getElementById("canada");
const pic7 = document.getElementById("infrontOfSchool");
const pic8 = document.getElementById("behindSchool");
const pic9 = document.getElementById("besideSchool");
const pic10 = document.getElementById("insideBank");
const pic11 = document.getElementById("dogInHouse");
const pic12 = document.getElementById("catUnderChair");
const pic13 = document.getElementById("catbehindHouse");
const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13];

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
// const shufflealllesson1 = [...images, ...createYourOwnSentencesArray];

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

const shuffleImages = shuffle(images);
// const createYourOwnSentencesShuffled = shuffle(createYourOwnSentencesArray);
// const shufflealllesson1Shuffled = shuffle(shufflealllesson1);



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

const shuffledImagesLine = document.getElementById("MixPics");
// const createYourOwnSentencesLine = document.getElementById("NewVocabPics");
// const createallchap1Line = document.getElementById("AllVocabsPics1.1");


//----------------------------------------------------------mix all known sentences photos----------------------------------------------------------
function mixphotosfunction () {
  const firstChoicePiced = shuffleImages[0];
  return firstChoicePiced;
}


function mixphotosPrintLine () {
  makeAllPicsNone (images);  //put back shufflealllesson1 where images is.
  const firstChoicePiced = mixphotosfunction();
  shuffledImagesLine.innerHTML = "";
  firstChoicePiced.style.display = "block";


  shuffleTheFunctions([images]);
}
  

//---------------------------------------------------------------mix all new sentences-------------------------------------------------------------------------
// function mixphotosCreateOwnfunction () {
//   const firstChoiceCreatedPiced = createYourOwnSentencesShuffled[0];
//   return firstChoiceCreatedPiced;
// }


// function mixphotosCreatePrintLine () {
//   makeAllPicsNone (shufflealllesson1);
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
//   makeAllPicsNone (shufflealllesson1);
//   const firstChoiceCreatedPiced = mixallphotosfunction();
//   createallchap1Line.innerHTML = "";
//   firstChoiceCreatedPiced.style.display = "block";


//   shuffleTheFunctions([shufflealllesson1]);
// }
//--------------------------------------------------------------add event listeners to buttons-------------------------------------------
const imageShuffleButton = document.getElementById("mixPics").addEventListener("click", mixphotosPrintLine ); 
// const imageShuffleCreateButton = document.getElementById("newVocabPics").addEventListener("click", mixphotosCreatePrintLine ); 
// const allVocabPicsChap1Button = document.getElementById("allVocabsPics1.1").addEventListener("click", mixallchap1PrintLine ); 

//-------------------------------------------------------------------chap2--------------------------------------------------------------------------------

