console.log("Trelloids started");
var c = document.getElementsByClassName("card-short-id");
for(var i=0; i<=c.length-1;i++)
{
    c[i].className = c[i].className.replace(/(?:^|\s)hide(?!\S)/g,'');
    c[i].innerHTML = '['+ c[i].innerHTML + '] ';
}