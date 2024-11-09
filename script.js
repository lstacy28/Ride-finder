// This is creating a function that recives an output string and a image.
// This is used to make the if statments easier to write and read.
function setResult(outputValue,imageValue){
    document.getElementById("output").innerHTML = outputValue;
    document.getElementById("image").setAttribute("src", imageValue);
    return "Happy Ride!";
}
// This is creating a function that can be called when we click the button.
function findRide(){
    // This saves html ids to variables.
     var age = document.getElementById("Age").value;
     var distance = document.getElementById("Distance").value;
     var traffic = document.getElementById("Traffic").value;
     var weather = document.getElementById("Weather").value;
    // This tests the variables we created
     console.log(distance);
    console.log(traffic);
    console.log(weather);
    console.log(age);
// These are if statments that give a scenario and a coordinating result.
// In these if statements we are making a new variable and assigning it to the set result function
// this allows us to call the function and print the return string.
if (age == 0){
    var functionResult = setResult("You're not alive","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI5tFp7jmDyhgH3DhnftQahEl24TIftTZLFQ&s");
    console.log("You're not alive")
    console.log(functionResult);
}
else if (1 <= age && age < 16 && distance >= 10){
    var functionResult = setResult("Take the bus","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzg60inNu5gV_-mdC7eNjr4tIhD5TiIJTnGw&s");
    console.log("Ride the bus");
    console.log(functionResult);
}
else if (1 <= age && age < 16 && distance >= 3 && weather == "Sunny"){
    var functionResult = setResult("Take a bikeride","https://www.statebicycle.com/cdn/shop/products/CityBike-TheBlack_Tan_single-speed_-1.jpg?v=1684444805");
    console.log("Bike");
    console.log(functionResult);
}
else if (1 <= age && age < 16 && distance >= 3 && weather == "Raining"){
    var functionResult = setResult("Take a bikeride with a raincoat","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ESaOIkszm3dXN4RDlxPnus0GS9j7UtSTYA&s");
    console.log("Bike with a raincoat");
    console.log(functionResult);
}
else if (1 <= age && age < 16 && distance >= 3 && weather == "Snowing"){
    var functionResult = setResult("Take a bikeride with a snow jacket","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpAdBk9duCFoKh-UlgbLUlu6RrpJHisQzgDw&s");
    console.log("Bike with a snow jacket");
    console.log(functionResult);
}
else if (
    weather == "Sunny" &&
    (
    (distance <= 3 && age < 16)
    ||
    (distance <= 3 && age >= 16 && traffic == "Heavy")
    ||
    (distance <= 2 && age >= 16 && traffic == "Moderate")
    || 
    (distance <= 1 && age >= 16 && traffice == "Light")
    )
){
    var functionResult = setResult("Take a walk","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpLJNO5cdhzrvJbKNHhON5mJBuqdQZwkxcuw&s");
    console.log("walk");
    console.log(functionResult);
}
else if (
    weather == "Raining" &&
    (
    (distance <= 3 && age < 16)
    ||
    (distance <= 3 && age >= 16 && traffic == "Heavy")
    ||
    (distance <= 2 && age >= 16 && traffic == "Moderate")
    || 
    (distance <= 1 && age >= 16 && traffice == "Light")
    )
){
    var functionResult = setResult("Take a walk with an umbrella","https://as1.ftcdn.net/v2/jpg/03/78/76/58/1000_F_378765846_Q4srp1aCGo9VWuxvVVQxFzKBvdf0M67d.jpg");
    console.log("walk with an umbrella");
    console.log(functionResult);
}
else if (
    weather == "Snowing" &&
    (
    (distance <= 3 && age < 16)
    ||
    (distance <= 3 && age >= 16 && traffic == "Heavy")
    ||
    (distance <= 2 && age >= 16 && traffic == "Moderate")
    || 
    (distance <= 1 && age >= 16 && traffic == "Light")
    )
){
    var functionResult = setResult("walk with a snow jacket","https://i1.pickpik.com/photos/141/645/146/city-urban-road-snow-preview.jpg");
    console.log("walk with a snow jacket");
    console.log(functionResult);
}
else{
    var functionResult = setResult("Take a car ride","https://tile.loc.gov/image-services/iiif/service:pnp:highsm:39800:39840/full/pct:3.125/0/default.jpg");
    console.log("Car");
    console.log(functionResult);
}
    
}