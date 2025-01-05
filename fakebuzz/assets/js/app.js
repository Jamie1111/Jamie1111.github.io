/******************************************************************************
 * Programming Basics Exam - FakeBuzz
 * ----------------------------------------------------------------------------
 * Instructions:
 * - This is the starter code for your exam project.
 * - You are required to complete the tasks as per the exam guidelines and 
 *   instructions provided.
 * - You may leave this comment block, alter it or remove it without penalty.
 * 
 * Good luck!
 ******************************************************************************/
 
// This variable holds all the feed items. It is filled with data by calling the 
// `fetchData()` function from the feed.js file. This mimics the fetching of 
// remote data. You don't need to know how this works, just let it be and use 
// `feedData` as a normal variable.
const feedData = fetchData();

window.addEventListener('load', onWindowLoad);

/**
 * Event handler callback funtion for the window load event (when the DOM is 
 * ready).
 */
function onWindowLoad() {
  // TODO Replace this with your initialization code
}

// TODO Replace this with the rest of your solution



/******************************************************************************
 * Helper functions section - KEEP THIS CODE AS IS! below you will find some 
 * heLper functions. You can call these functions anywhere you like but 
 * NEVER CHANGE THEM.
 ******************************************************************************/
/**
 * Helper function that returns the current timestamp as a string, formatted 
 * like the createdAt attributes of all the other feeditems. This format is
 * called the date time string format, a simplification of the ISO 8601 calendar 
 * date extended format. The format is as follows:
 * 
 * `YYYY-MM-DDTHH:mm:ss.sssZ`
 * 
 * __Note:__ You must use this when creating a new feeditem.
 * 
 * @returns the current timestamp formatted as isoString.
 */
function getCurrentTimestamp() {
  const currentDateObj = new Date();
  return currentDateObj.getTime();
}

/**
 * Helper function that formats a JavaScript date time string to a more readable
 * format. This is the format which is used in the feeditems.
 * 
 * __Note__ You must use this when rendering the timestamp of a feed to the 
 * DOM.
 * 
 * @param {*} dateTimeString the date time string to format
 * @returns ISO date string formatted to a more readable format
 */
function formatDate(dateTimeString) {
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };
  const date = new Date(dateTimeString);
  return date.toLocaleDateString(undefined, options);
}

const selectUser = document.getElementById('userSelect');
const textArea = document.getElementById('new-feed-textarea');
const feedBtn = document.getElementById('post-feedbtn');
const feedContainer = document.getElementById('feed-container');
const totalPosts = document.getElementById('total-posts');
const trending = document.getElementById('trending');
const textAreaError = document.getElementById('new-feed-textarea-error');
const onclick = Event onclick
addEventListener onclick
feedBtn onclick {
   
}

feedBtn.addEventListener('click', placeComment);
function placeComment(){
  if(fetchData.checked){
    feedBtn.textContent = feedContainer
  }

}

placeComment

function ()
