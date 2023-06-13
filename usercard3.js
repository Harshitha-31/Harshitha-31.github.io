let dhonioldinfo={
    imgurl: "https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg",
    name: "M.S.Dhoni",
    Description: "Cricket Player"
}
let displayobject;
let getRandomUser =function(){
    fetch("https://randomuser.me/api")
    .then(response => response.json())
    .then(data=>console.log(data))
    document.getElementById("dhoni-img").src=displayobject.imgurl;
    document.getElementById("dhoni-name").innerHTML= displayobject.name;
    document.getElementById("dhoni-description").innerHTML=displayobject.Description;
}