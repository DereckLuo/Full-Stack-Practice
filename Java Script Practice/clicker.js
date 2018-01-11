var butt = document.querySelector("button");
var is_purple = false;
// var body = document.querrySelect("body");

// butt.addEventListener("click", function(){
//   if(is_purple){
//     document.body.style.background = "white";
//   }
//   else{
//     document.body.style.background = "purple";
//   }
//   is_purple = !is_purple;
// });
butt.addEventListener("click", function(){
  document.body.classList.toggle("purple");
});
