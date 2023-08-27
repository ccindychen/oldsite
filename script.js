var rellax = new Rellax('.rellax');

let contentGridElement = document.getElementById('contentGrid');
let jsonDatabase = [
  {
    "title" : "Teddy Bear",
    "picture_url" : "bear.png",
    "description" : "Character model inspired by MAR's model from YouTube",

  },
  {
    "title" : "Froggy",
    "picture_url" : "froggyfinal.png",
    "description" : "Character model inspired by MAR's model from YouTube",

  },
  {
    "title" : "Room",
    "picture_url" : "room.webp",
    "description" : "Model of a small comfy living room",
    
  },
  {
    "title" : "Venus Pill",
    "video_url" : "venuspillvid.mp4",
    "description" : "A fictional pill model for the Venus app",

  },
  {
    "title" : "The Watch",
    "video_url" : "watch vid0001-0300.mp4",
    "description" : "A futuristic watch with a hologram display",

  },
  {
    "title" : "The Hat",
    "video_url" : "hatvid.mp4",
    "description" : "A model of a futuristic hat that reads people's minds",
 
  }

];


for (var i = 0; i < jsonDatabase.length; i++) {
  createElementProper(jsonDatabase[i]);
}



function createElementProper(incomingJSON) {

  // Create whole content item div and set class
  let newContentElement = document.createElement("DIV");
  // newContentElement.style.backgroundColor = incomingJSON['favorite_color'];
  newContentElement.classList.add('contentItem');

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
    newContentVideo.classList.add("contentVideo");
    newContentVideo.src = incomingJSON['video_url'];
    newContentVideo.autoplay = true;
    newContentVideo.loop = true;
    newContentVideo.muted = true;
    newContentElement.appendChild(newContentVideo);
  }

  // Create & add PROJECT DESCRIPTION to the item
  let newContentDescription = document.createElement("P");
  newContentDescription.classList.add('contentDescription');
  newContentDescription.innerText = incomingJSON['description'];
  newContentElement.appendChild(newContentDescription);

  // Add the content item div to the content grid
  contentGridElement.appendChild(newContentElement);

}

function createElementProper2(incomingJSON) {

  // Create whole content item div and set class
  let newContentElement = document.createElement("DIV");
  // newContentElement.style.backgroundColor = incomingJSON['favorite_color'];
  newContentElement.classList.add('contentItem');

  // Create & add PROJECT TITLE to the item
  let newContentTitle = document.createElement("H3");
  newContentTitle.classList.add('contentTitle');
  newContentTitle.innerText = incomingJSON['title'];
  newContentElement.appendChild(newContentTitle);

    let newContentVideo = document.createElement("VIDEO");
    newContentVideo.classList.add("contentVideo");
    newContentVideo.src = incomingJSON['video_url'];
    newContentVideo.autoplay = true;
    newContentVideo.loop = true;
    newContentVideo.muted = true;
    newContentElement.appendChild(newContentVideo);
  

  // Create & add PROJECT DESCRIPTION to the item
  let newContentDescription = document.createElement("P");
  newContentDescription.classList.add('contentDescription');
  newContentDescription.innerText = incomingJSON['description'];
  newContentElement.appendChild(newContentDescription);

  // Add the content item div to the content grid
  contentGridElement2.appendChild(newContentElement);
  
}



