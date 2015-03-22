$( document ).ready(function() {
	var myCSV = "data/cyberbullying_data.csv";

    picture.load();
   

   //Reference: http://techslides.com/convert-csv-to-json-in-javascript
	function csvJSON(csv){
		 
		var lines=csv.split("\n");
		 
		var result = [];
		 
		var headers=lines[0].split(",");
		 
		for(var i=1;i<lines.length;i++){
		 
		var obj = {};
		var currentline=lines[i].split(",");
		 
		for(var j=0;j<headers.length;j++){
		obj[headers[j]] = currentline[j];
		}
		 
		result.push(obj);
		 
		}
		//return result; //JavaScript object
		//return JSON.stringify(result); //JSON
		console.log(JSON.stringify(result));
	} 

});