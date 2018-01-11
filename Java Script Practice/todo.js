var lis = document.querySelectorAll("li");

for(var i = 0; i < lis.length; i++){
  li = lis[i];
  li.addEventListener("mouseover", function(){
    this.classList.add("selected");
  });
  li.addEventListener("mouseout", function(){
    this.classList.remove("selected");
  });
  li.addEventListener("click", function(){
    this.classList.toggle("done");
  });
}
