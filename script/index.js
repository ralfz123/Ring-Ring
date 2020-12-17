// Fetching data - API/gist
fetch('https://gist.githubusercontent.com/joordy/a143d68573aa3dcaadcb34defb2745a4/raw/43267958a9135359da69478b089e0c360b441af3/ringring.json')
	.then(response => response.json())
    .then((data) => console.log(data));