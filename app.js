
let article=['The','A',]
let adjective=['Quiet','Happy','Crappy']
let name=['Man', 'Cat', 'Town', 'Dude']
let extension= ['.com', '.net', '.cat']
function domainNameGenerator () {
    let randomArticle = article[Math.floor(Math.random() * article.length)];
  let randomAdjective = adjective[Math.floor(Math.random() * adjective.length)];
  let randomName = name[Math.floor(Math.random() * name.length)];
  let randomExtension= extension[Math.floor(Math.random() * extension.length)];
  return randomArticle + randomAdjective + randomName + randomExtension;
}
window.onload=function(){
  var s= document.getElementById("domainNameGenerator").innerHTML;
  console.log(domainNameGenerator); 
}
var domainNameGenerator=fuction domainNameGenerator 
 
  


