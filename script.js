// Write your JavaScript code here!



window.addEventListener("load", function() {
   let form = document.querySelector("form");

         fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
         // Access the JSON in the response
         response.json().then( function(json) {
            let marsPlanet = json[3];
            console.log(marsPlanet);

            
              
             this.document.getElementById("missionTarget").innerHTML += 
             
             `<h2> Mission Destination </h2>
             <ul>
               <li> Name: ${marsPlanet.name} </li>
               <li> Diameter: ${marsPlanet.diameter} </li>
               <li> Star: ${marsPlanet.star} </li>
               <li> Distance from Earth: ${marsPlanet.distance} </li>
               <li> Number of Moons: ${marsPlanet.moons} </li>
               <li> Image of ${marsPlanet.name}: </li>
               <img  src= "https://mars.nasa.gov/system/resources/detail_files/7808_global-color-views-mars-PIA00407-full2.jpg"  alt =Mars ></ul>`
               
            // this.document.createElement("IMG");
   
            
            

            
           
         });
      });



   form.addEventListener("submit", function(event) {
      event.preventDefault();
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
     
      // complete form validation, no blank fields, stops form submission
      if (pilotNameInput.value === "" || copilotNameInput.value === "" 
      || fuelLevelInput.value === "" || cargoMassInput.value ==="") {
         alert("All fields are required!");
      }
      //isNaN is accepting strings as input
      let letterCheck = false;
      for (let i=0; i <pilotNameInput.value.length; i++) {
         if(!("ABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(pilotNameInput.value[i])) 
         && !("abcdefghijklmnopqrstuvwxyz".includes(pilotNameInput.value[i]))){
            letterCheck = true;   
            break;
         } 
      }
      for (let i=0; i <copilotNameInput.value.length; i++) {
         if(!("ABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(copilotNameInput.value[i])) 
         && !("abcdefghijklmnopqrstuvwxyz".includes(copilotNameInput.value[i]))){
            letterCheck = true;   
            break;
         } 
      }


      if (letterCheck || isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value)){
         alert("Not a valid input type");
      }

      else if (fuelLevelInput.value < 10000 ||cargoMassInput.value > 10000){
         document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
            document.getElementById("launchStatus").style.color = "red";            
            document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotNameInput.value} ready`
            document.getElementById("copilotStatus").innerHTML = `Pilot ${copilotNameInput.value} ready`
            document.getElementById("faultyItems").style.visibility = "visible";
         
            if (fuelLevelInput.value < 10000 && cargoMassInput.value > 10000){
            document.getElementById("fuelStatus").innerHTML = "Not enough fuel to launch";
            document.getElementById("cargoStatus").innerHTML = "Too much cargo to launch";
         }     
         else if (fuelLevelInput.value < 10000){
            document.getElementById("fuelStatus").innerHTML = "Not enough fuel to launch";
         }     
               
         else {
            document.getElementById("cargoStatus").innerHTML = "Too much cargo to launch";
         }
      }     
      
      else{
         document.getElementById("launchStatus").innerHTML = "Shuttle ready for launch";
         document.getElementById("launchStatus").style.color = "green";
         document.getElementById("faultyItems").style.visibility = "hidden";
      }
   });
});


      



/* This block of code shows how to format the HTML once you fetch some planetary JSON!

*/
