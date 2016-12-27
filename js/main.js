var i=0;
function XYZ(){
  var settings = {
  "id": i,
  "title" : "title",
  "body" : "body",
  "url": "http://jsonplaceholder.typicode.com/posts/",
  "method": "GET"
  };
  $.ajax(settings).done(function (response) {
  $("#metaInfo").append("ID: " + settings.id);
  $("#listOfPeople").append(settings.title + settings.body);
  console.log(response);
 });
}
function Test(){
    var delay=100000;
  for( ; i<=100 ; i++){
  setTimeout(XYZ(), delay);
  }
}
