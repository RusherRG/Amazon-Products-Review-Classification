revs = document.getElementsByClassName('review_text');
for(i=0;i<revs.length;i++){
    revs[i].innerHTML = revs[i].innerHTML.replace(/\n/g,'<br/>');
}