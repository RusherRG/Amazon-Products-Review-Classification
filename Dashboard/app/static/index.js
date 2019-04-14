$(document).ready(function(){
    $('.materialboxed').materialbox();
});

index = 0;
images = eval(document.getElementById('images').innerHTML);
console.log(images);
function change_image(dir){    
  index += dir;
  console.log(images[index]);
  document.getElementById('product_image').src = eval(images[index]);
}