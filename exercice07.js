var http = require("http");
var fs = require("fs");//importation du module gestion de fichier
var tabProv = "";

fs.readFile('province.json', 'utf8', function (err, data) {
	    if (err) throw err;
	    var obj = JSON.parse(data);
	    


		function affiche_objet(monObjet){
			for (propriete in monObjet){

				tabProv += ("<td>"+ propriete + '-' + monObjet[propriete] + "</td>");
		
			}
			return tabProv;
		}

		affiche_objet(obj);

	});

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<h1>Quelques provinces</h1>");
  response.write("<table><tr>" + tabProv + "</tr></table>");
  response.end();
}).listen(3000);


console.log("Program Ended");

