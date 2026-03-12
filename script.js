function toggle(element){

let info = element.querySelector(".details");

if(info.style.display === "block"){
    info.style.display = "none";
}
else{
    info.style.display = "block";
}

}