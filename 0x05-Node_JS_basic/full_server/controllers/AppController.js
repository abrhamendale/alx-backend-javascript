class AppController {
  getHomepage(request, response) {
    response.sendStatus(200).send("Hello Holberton School!");
  }
}
