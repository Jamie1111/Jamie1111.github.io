/******************************************************************************
 * Programming Basics Exam - Car Category
 * ----------------------------------------------------------------------------
 * Instructions:
 * - This is the starter code for your exam project.
 * - You are required to complete the tasks as per the exam guidelines and 
 *   instructions provided.
 * 
 * Good luck!
 ******************************************************************************/
// This loads the current prices. It calls `fetchData()` from the rates.js file
// to mimic the fetching of remote data.
const currentPrices = fetchData();

window.addEventListener('load', onPageLoad);

/**
 * Called when on the load event (when the DOM is ready).
 */
function onPageLoad() {
  const messageBox = document.getElementById('message-container');
  messageBox.className = 'message info';
  messageBox.innerHTML = 'please start the pricing process by selecting your vehicle type';
}

const btn = document.getElementById('get-price-btn');
btn.addEventListener('click', getPrice);

/**
 * Gets the price and -category of all the inputs together.
 */
function getPrice() {
  const vehicleType = document.getElementById('vehicle-type');
  const vehicleLength = document.getElementById('vehicle-length-input');
  const checkbox = document.getElementById('has-trailer-chkb');
  const totalLength = document.getElementById('total-length-input');
  const messageBox = document.getElementById('message-container');
  if (vehicleType.value === 'passcar') {
    if (vehicleLength.value > 0 && vehicleLength.value <= 6) {
      itemCategory = 'A';
      oresundGo = 175;
      regularPrice = 455;
      messageBox.className = 'message success';
      messageBox.innerHTML = (`Your price category: ${itemCategory} (${vehicleType.value}). Your price is: SEK${regularPrice}`);
    }
    if (checkbox.checked) {
      if (totalLength.value <= 15) {
        itemCategory = 'B';
        oresundGo = 350;
        regularPrice = 910;
        messageBox.className = 'message success';
        messageBox.innerHTML = (`Your price category: ${itemCategory} (${vehicleType.value}). Your price is: SEK${regularPrice}`);
      } else {
        itemCategory = 'C';
        oresundGo = 701.25,
        regularPrice = 1600;
        messageBox.className = 'message success';
        messageBox.innerHTML = (`Your price category: ${itemCategory} (${vehicleType.value}). Your price is: SEK${regularPrice}`);
      }
    } else {
      
    }
  } else if (vehicleType.value === 'motorhome') {
    if (vehicleLength.value > 6 && vehicleLength.value <= 10) {
      itemCategory = 'D';
      oresundGo = 350,
      regularPrice = 910;
      messageBox.className = 'message success';
      messageBox.innerHTML = (`Your price category: ${itemCategory} (${vehicleType.value}). Your price is: SEK${regularPrice}`);
    } else if (vehicleLength.value > 10) {
      itemCategory = 'E';
      oresundGo = 701.25,
      regularPrice = 1600;
      messageBox.className = 'message success';
      messageBox.innerHTML = (`Your price category: ${itemCategory} (${vehicleType.value}). Your price is: SEK${regularPrice}`);
    } else if (checkbox.checked && vehicleLength.value > 6) {
      itemCategory = 'F';
      oresundGo = 701.25,
      regularPrice = 1600;
      messageBox.className = 'message success';
      messageBox.innerHTML = (`Your price category: ${itemCategory} (${vehicleType.value}). Your price is: SEK${regularPrice}`);
    }
  } else if (vehicleType.value === 'minibus') {
    if (vehicleLength.value > 6 && vehicleLength.value <= 10) {
      itemCategory = 'G';
      oresundGo = 350,
      regularPrice = 910;
      messageBox.className = 'message success';
      messageBox.innerHTML = (`Your price category: ${itemCategory} (${vehicleType.value}). Your price is: SEK${regularPrice}`);
    }
  } else if (vehicleType.value === 'motorcycle') {
    itemCategory = 'H';
    oresundGo = 91,
    regularPrice = 230;
    messageBox.className = 'message success';
    messageBox.innerHTML = (`Your price category: ${itemCategory} (${vehicleType.value}). Your price is: SEK${regularPrice}`);
  } else if (vehicleType.value === 'van') {
    if (vehicleLength.value > 6 && vehicleLength.value <= 9) {
      itemCategory = 'I';
      oresundGo = 350;
      regularPrice = 910;
      messageBox.className = 'message success';
      messageBox.innerHTML = (`Your price category: ${itemCategory} (${vehicleType.value}). Your price is: SEK${regularPrice}`);
    } else if (vehicleLength.value > 9) {
      itemCategory = 'J';
      oresundGo = 701.25;
      regularPrice = 1600;
      messageBox.className = 'message success';
      messageBox.innerHTML = (`Your price category: ${itemCategory} (${vehicleType.value}). Your price is: SEK${regularPrice}`);
    }
  } else {
    messageBox.className = 'message error';
    messageBox.innerHTML = 'Error: please select a vehicle first';
  }
}