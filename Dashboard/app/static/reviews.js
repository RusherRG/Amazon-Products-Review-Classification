revs = document.getElementsByClassName('review_text');
for(i=0;i<revs.length;i++){
    revs[i].innerHTML = revs[i].innerHTML.replace(/\n/g,'<br/>');
}

ratings = document.getElementsByClassName('rating');
for(i=0;i<ratings.length;i++){
    star = parseInt(ratings[i].innerHTML);
    stars = "";
    for(j=0;j<star;j++){
        stars += "<i class='material-icons'>star</i>";
    }
    if(star!=parseFloat(ratings[i].innerHTML))
        stars += "<i class='material-icons'>half_star</i>";
    ratings[i].innerHTML = stars; 
}


var url = window.location.href;
url = new URL(url);
var type = url.searchParams.get('type');
var page = url.searchParams.get('page');
var classs = url.searchParams.get('class');

function change_page(dir){
    url = window.location.origin + window.location.pathname;
    url = url + '?type=' + type + '&page=' + String(parseInt(page) + dir);
    if(classs){
        url += '&class=' + classs;
    }
    window.open(url,'_self');
}