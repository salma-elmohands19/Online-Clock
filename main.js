function showtime(){
var date= new Date();
var hours= date.getHours();
var minut= date.getMinutes();
var second= date.getSeconds();


hours=(hours<10) ? "0"+hours :hours;
minut=(minut<10) ? "0"+minut :minut;
second=(second<10) ? "0"+second :second;

  if(hours===0){
    hours=12;
 }
if(hours>12){
    hours-= 12;
}
var time=hours+ ":"+minut +":"+second;

document.getElementById("clock").innerHTML=time;
setTimeout( showtime ,1000);
}
showtime();
