app.get('/') {
  AppController
}
app.get('/students/:major') {
	StudentsController
}
app.get('/students') {
  StudentsController
}
