function getAttributes(){
    var attributes=document.querySelector(".techs img");
    attributes.forEach(element => {
       console.log(element.attributes["alt"]);
    });
}