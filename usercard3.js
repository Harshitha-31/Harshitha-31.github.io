let dhonioldinfo={
    imgurl: "https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg",
    name: "M.S.Dhoni",
    Description: "Cricket Player"
}
let displayobject={
    name:"",
    imgurl:"",
    description:""
};
let getRandomUser =function(){
    fetch("https://randomuser.me/api")
    .then(response => response.json())
    .then(data=>{
        displayobject.name = data.results[0].name.first + " " + data.results[0].name.last
        //displayobject.name = "User Name"
        displayobject.imgurl = data.results[0].picture.large
        displayobject.description = data.results[0].gender
        document.getElementById("dhoni-img").src=displayobject.imgurl;
        document.getElementById("dhoni-name").innerHTML= displayobject.name;
        document.getElementById("dhoni-description").innerHTML=displayobject.description;
    })
    
}