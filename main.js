var i=1;
function Extract()
{
  var settings =
  {
    "id": i,
    "title" : "title",
    "body" : "body",
    "url": "http://jsonplaceholder.typicode.com/posts/"+i,
    "method": "GET"
  };
  $.ajax(settings).done(function (response)
  {
    $("#listOfPeople").prepend('<li class="collection-item avatar"> <i class="material-icons circle green">insert_chart</i><span class="title"><b>' +
    response.title + '</b></span><p style="text-align:left;">' + response.body + ' </p></li>');
    console.log(response);
  });
 i++;
 if (i < 100)
 {
    Timer();
 }
}
function Timer ()
{
  var delay = 1000;   //in milli-seconds
   setTimeout(Extract, delay);
}
