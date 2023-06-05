let dhonioldinfo={
    imgurl: "https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg",
    name: "M.S.Dhoni",
    Description: "Cricket Player"
}
let dhoniyounginfo={
    imgurl: "https://img.mensxp.com/media/content/2021/Jun/5b990658b0abcb6de15be4b61d42d8c3_60d182271438b.jpeg",
    name: "Mahendra Singh Dhoni",
    Description:"Addressed as Captain Cool"
}
let isdhoniold=true;
let displayobject;
let flipdata=function(){
    if (isdhoniold ==true){
        displayobject=dhoniyounginfo;
        isdhoniold=false;
    }
    else{
        displayobject=dhonioldinfo;
        isdhoniold=true;
    }
    document.getElementById("dhoni-img").src=displayobject.imgurl;
    document.getElementById("dhoni-name").innerHTML= displayobject.name;
    document.getElementById("dhoni-description").innerHTML=displayobject.Description;
}