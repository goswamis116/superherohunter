
var resultId = localStorage.getItem('id');

fetch();

function fetch(){
    var Request = new XMLHttpRequest();
    
    var url = `https://gateway.marvel.com/v1/public/characters/${resultId}?apikey=c2595c6e10b8e75e6bd3b3c61b14547c&hash=77964d9b5c2bef6213992685d7c2dfd4&ts=1`;
    Request.open('get',url,true);
    Request.send();
    Request.onload = function(){
        var response = JSON.parse(Request.response);
        
        console.log(response);
            document.getElementById("name").innerHTML = '<b>Name: </b> ' + response.data.results[0].name;
            document.getElementById("id").innerHTML = '<b>Hero ID: </b> ' + response.data.results[0].id ;
            document.getElementById("desc").innerHTML = '<b>Description: </b> ' + response.data.results[0].description ;
            document.getElementById("comic").innerHTML = '<b>Comic Available: </b>'+ response.data.results[0].comics.available ;
            document.getElementById("series").innerHTML = '<b>Series Available: </b>'+ response.data.results[0].series.available ;
            document.getElementById("stories").innerHTML = '<b>Stories Available: </b>'+ response.data.results[0].stories.available ;
            document.getElementById("count").innerHTML = '<b>Count: </b>'+ response.data.count ;
            document.getElementById("modified").innerHTML = '<b>Modified: </b>'+ response.data.results[0].modified;
            document.getElementById("status").innerHTML = '<b>Status: </b>'+ response.status;
            document.getElementById("total").innerHTML = '<b>Total: </b>'+ response.data.total;
            document.getElementById("limit").innerHTML = '<b>Limit: </b>'+ response.data.limit;
            document.getElementById("offset").innerHTML = '<b>Offset: </b>'+ response.data.offset;
            document.getElementById("code").innerHTML = '<b>Code: </b>'+ response.code;
            
    }
}