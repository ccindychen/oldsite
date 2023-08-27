
let contentGridElement = document.getElementById('contentGrid2');
let jsonDatabase = [
  {
    "title" : "Zodiac Kiosk",
    "video_url" : "zodiac.mp4",

  },
  {
    "title" : "NASA Soundscape: Eclipse AR Filter",
    "video_url" : "filter.mp4",

  }
];


for (var i = 0; i < jsonDatabase.length; i++) {
  createElementProper(jsonDatabase[i]);
}



function createElementProper(incomingJSON) {

  // Create whole content item div and set class
  let newContentElement = document.createElement("DIV");
  // newContentElement.style.backgroundColor = incomingJSON['favorite_color'];
  newContentElement.classList.add('contentItem2');

  // Create & add PROJECT TITLE to the item
  let newContentTitle = document.createElement("H3");
  newContentTitle.classList.add('contentTitle');
  newContentTitle.innerText = incomingJSON['title'];
  newContentElement.appendChild(newContentTitle);

  // Create & add PROJECT IMAGE or VIDEO to the item
  if ('picture_url' in incomingJSON && !('video_url' in incomingJSON)) {
    let newContentImage = document.createElement("IMG");
    newContentImage.classList.add("contentImage");
    newContentImage.src = incomingJSON['picture_url'];
    newContentElement.appendChild(newContentImage);
  } else if ('video_url' in incomingJSON) {
    let newContentVideo = document.createElement("VIDEO");
    newContentVideo.classList.add("contentVideo2");
    newContentVideo.src = incomingJSON['video_url'];
    newContentVideo.autoplay = true;
    newContentVideo.loop = true;
    newContentVideo.muted = true;
    newContentElement.appendChild(newContentVideo);
  }

  // Add the content item div to the content grid
  contentGridElement.appendChild(newContentElement);

}
