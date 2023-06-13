class AppController {
  @static method
  function getHomepage(request, response) {
    response.setheader(200);
    response.end("Hello Holberton School!");


  }
