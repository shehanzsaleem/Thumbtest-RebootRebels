let goodt, badt;
let authPromise;
let database;
let rgbDiv;

let bodyElement;
let buttons = [];
let ready = false;
let dataSave;

function pickColor() {
  r = floor(random(256));
  g = floor(random(256));
  b = floor(random(256));
  background(r, g, b);
  updateBodyBG();
}

function setup() {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDPekCKX4ee6h9NVR2lEITGAM0XIHn-c7c",
    authDomain: "color-classification.firebaseapp.com",
    databaseURL: "https://color-classification.firebaseio.com",
    projectId: "color-classification",
    storageBucket: "",
    messagingSenderId: "590040209608"
  };
  firebase.initializeApp(config);
  database = firebase.database();
  authPromise = firebase.auth().signInAnonymously();

  createCanvas(200, 200).parent('#root');
  rgbDiv = createDiv().parent('#root');
  bodyElement = document.body;

  pickColor();
  ready = true;
  rgbDiv.html(`R:${r} G:${g} B:${b}`);

  buttons.push(createButton('red-ish').parent('#root').class('red-ish'));
  buttons.push(createButton('green-ish').parent('#root').class('green-ish'));
  buttons.push(createButton('blue-ish').parent('#root').class('blue-ish'));
  buttons.push(createButton('orange-ish').parent('#root').class('orange-ish'));
  buttons.push(createButton('yellow-ish').parent('#root').class('yellow-ish'));
  buttons.push(createButton('pink-ish').parent('#root').class('pink-ish'));
  buttons.push(createButton('purple-ish').parent('#root').class('purple-ish'));
  buttons.push(createButton('brown-ish').parent('#root').class('brown-ish'));
  buttons.push(createButton('grey-ish').parent('#root').class('grey-ish'));


  for (let i = 0; i < buttons.length; i++) {
    buttons[i].mouseClicked(sendData);
  }

  // Commenting out the loading of data for the webpage running
  // console.log("Retreiving data... (this can take a minute or two)");
  // loadData().then(data => {
  //   dataSave = data;
  //   console.log("Recieved data. To analyze", data.length, "entries, run: ");
  //   console.log("showSample(dataSave, 'red-ish')");
  //   console.log("or analyzeData(dataSave, ['red-ish', 'blue-ish'])");
  //   console.log("To clean the data by label and hue use: ");
  //   console.log("let green_data = cleanData(dataSave, 'green-ish', 60, 180)");
  //   console.log("For any help, please see the documentation above each function in the code!");
  // });
}

async function sendData() {
   if(!ready) return;
  showLoading();
  // send this data to something?
  // send the data to firebase!
  let { user } = await authPromise;
  let colorDatabase = database.ref("colors");

  // Make an object with data in it
  var data = {
    uid: user.uid,
    r: r,
    g: g,
    b: b,
    label: this.html()
  };
  console.log("saving data");
  console.log(data);

  let color = colorDatabase.push(data, finished);
  console.log("Firebase generated key: " + color.key);

  //Pick new color
  pickColor();

  // Reload the data for the page
  function finished(err) {
    if (err) {
      console.error("ooops, something went wrong.");
      console.error(err);
    } else {
      console.log('Data saved successfully');
      setTimeout(hideLoading, 600);
    }
  }
}

 



function loadData() {
  return database
    .ref("/colors/")
    .once("value")
    .then(snapshot => Object.values(snapshot.val()));
}

function showLoading() {
  select('.loading').show();
  select('canvas').hide();
  for (button of buttons) button.addClass("disabled");
  ready = false;
}

function hideLoading() {
  select('.loading').hide();
  select('canvas').show();
  rgbDiv.html(`R:${r} G:${g} B:${b}`);
  for (button of buttons) button.removeClass("disabled");
  setTimeout(function(){ ready = true;}, 600);
}


function updateBodyBG(){
  bodyElement.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 1.0)`;
}

 
document.getElementById("myImg").style.backgroundImage = "images/1.jpg";


document.getElementById("leftimage").style.backgroundImage = "./images/1.jpg";
document.getElementById("rightimage").src = "/images/2.jpg";


// document.getElementById("myImg").src="/Applications/MAMP/htdocs/your_image.jpg";
