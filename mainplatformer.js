fetch("/JS/mainplatformer.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log(err);
  });
// this is where each level is created
//console.log("a");
function appendData(data) {
  let allLevels = document.getElementById("levels-container");
  let counter = 1;
  for (const key in data) {
    // link up the object

    let level = data[key];
    // Creates an new element

    let column = document.createElement("div");
    column.setAttribute("class", "column");
    let div = document.createElement("div");
    const aspectRatio = window.innerWidth / window.innerHeight;
    div.setAttribute("class", "card")
    if(aspectRatio < 1 && (level.name == "ClubstepDentalCare"))
    {
          div.innerHTML = `
            <button type="button" class = "collapsible">
            <section class = "LevelCard flex">
            <div class="thumb ratio-16-9 js-delay-css" 
            style="position: relative;  
            background-image: url(&quot;https://i.ytimg.com/vi/${level.ytcode}/mqdefault.jpg&quot;);" 
            data-property="background-image" 
            data-property-value="url('https://i.ytimg.com/vi/${level.ytcode}/mqdefault.jpg')" onclick="window.open('https://www.youtube.com/watch?v=${level.ytcode}','_blank')"
            title="Clicking on the image will take you to the verification video.">
            </div>
            <div class = "title">
            <h2>${counter}.<span style="font-size: 0.4em;"> ${level.name}<br><i>by ${level.publisher}</span></i></h2>
            <h3>Score: ${Math.round(100*(50.0 / (Math.pow(Math.E, 0.01 * counter)) * Math.log((1 / (0.008 * counter)))))/100}</h3>
            </div>
            </section>
            </button>
          `;
    }
      else{
          div.innerHTML = `
            <button type="button" class = "collapsible">
            <section class = "LevelCard flex">
            <div class="thumb ratio-16-9 js-delay-css" 
            style="position: relative;  
            background-image: url(&quot;https://i.ytimg.com/vi/${level.ytcode}/mqdefault.jpg&quot;);" 
            data-property="background-image" 
            data-property-value="url('https://i.ytimg.com/vi/${level.ytcode}/mqdefault.jpg')" onclick="window.open('https://www.youtube.com/watch?v=${level.ytcode}','_blank')"
            title="Clicking on the image will take you to the verification video.">
            </div>
            <div class = "title">
            <h2>${counter}. ${level.name}<br><i><span style="font-size: 0.6em;"> by ${level.publisher}</span></i></h2>
            <h3>Score: ${Math.round(100*(50.0 / (Math.pow(Math.E, 0.01 * counter)) * Math.log((1 / (0.008 * counter)))))/100}</h3>
            </div>
            </section>
            </button>
          `;
        }
    // List of records
    let listOfRecords = document.createElement("div");
    listOfRecords.setAttribute("class", "content")
    for (let i = 0; i < level.list.length; i++) {
      let victor = document.createElement("div")
      if(level.victors == "0"){
        if(level.publisher == level.uploader)
        {
        victor.innerHTML = `
        <h5>Verified by ${level.verifier} in ${level.verifierTime}s<br>Creator Points: ${level.creatorpoints}<br>ID: ${level.id}<hr>Completions:<br></h5>
          <h6>None yet! You could be the first victor of this level!</h6>
        `;
        }
       else{
          victor.innerHTML = `
          <h5>Verified by ${level.verifier} in ${level.verifierTime}s; uploaded by ${level.uploader}<br>Creator Points: ${level.creatorpoints}<br>ID: ${level.id}<hr>Completions:<br></h5>
            <h6>None yet! You could be the first victor of this level!</h6>
          `;
          }
      }else{
      if(i == 0){
        if(level.publisher == level.uploader)
        {
        victor.innerHTML = `
          <h5>Verified by ${level.verifier} in ${level.verifierTime}s<br>Creator Points: ${level.creatorpoints}<br>ID: ${level.id}<hr>Completions:<br></h5>
          <h6>(${level.list[i].time}) ${level.list[i].name} - <a href = "${level.list[i].link}" target = "_blank">${level.list[i].link}</h6>
        `;
        }
        else{
          victor.innerHTML = `
            <h5>Verified by ${level.verifier} in ${level.verifierTime}s; uploaded by ${level.uploader}<br>Creator Points: ${level.creatorpoints}<br>ID: ${level.id}<hr>Completions:<br></h5>
            <h6>(${level.list[i].time}) ${level.list[i].name} - <a href = "${level.list[i].link}" target = "_blank">${level.list[i].link}</h6>
          `;
          }
      }else{
        victor.innerHTML = `
          <h6>(${level.list[i].time}) ${level.list[i].name} - <a href = "${level.list[i].link}" target = "_blank">${level.list[i].link}</h6>
        `;
      }
      }
      listOfRecords.appendChild(victor);
    }
    div.appendChild(listOfRecords);
    column.appendChild(div);
    allLevels.appendChild(column);
    counter++;

  }
  let thing = document.createElement("p")
  thing.innerHTML = `<p class = "toTop" onclick = "topFunction()">To the top</p>`
  ;
  allLevels.appendChild(thing);
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}