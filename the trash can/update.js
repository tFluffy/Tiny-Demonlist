//console.log("hello");
var body = document.getElementsByTagName("body")[0];
body.setAttribute("style", "display:none;");
console.log("hello");
//console.log("successful");
//const fs = require('fs');

var levelName, playerName, link;
function myfunction(){
  levelName = document.getElementById("levelname").value;
  playerName = document.getElementById("playername").value;
  link = document.getElementById("link").value;
  updateLevel();
  console.log("successful");
  //document.getElementById("levelForm").submit();
}
function updateLevel() {
  fetch("levels.json")
  //console.log("fetch successful");
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log("access granted");
    updateLevelJson(data);
  })
  .catch(function (err) {
    console.log(err);
  });
}

function updateLevelJson(data) {
  console.log("test");
  //levelName = document.getElementById("levelname").value;
  //playerName = document.getElementById("playername").value;
  //link = document.getElementById("link").value;
  let allLevelsObject = data;
  
  let newLevel = {
    name: levelName,
		list:[
			{
				name: playerName,
				link: link
			}
		]
  }
allLevelsObject[levelName] = newLevel;
allLevelsObject = JSON.stringify(allLevelsObject);
fs.writeFile('levels.json', allLevelsObject, (err) => {
    if (err) {
        throw err;
    }
    console.log("JSON data is saved.");
});
//data = JSON.stringify(data); 
}
while (true) {
  let password = prompt("Please enter password here");
  if (password === "geodash") {
     body.setAttribute("style", "display:block;");
     break;
  }
  //console.log("successful");
  alert("Incorrect Password, please try again")
}
/*
JSONobject json_out;

String outfile = "levels.json";

void setup() {
  json_out = loadJSONObject(infile);
  //println("use:\n [s] to save data to file");
}*/




