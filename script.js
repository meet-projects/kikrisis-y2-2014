function bodyLoad() {
	var btn=document.getElementById("btnSearch");
	btn.onclick = function() {
		var names = ['Winter hat','Fire extinguisher', 'Worldwide GPS', 'First aid kit', 'Flashlight', 'item 6'];
		var terms = document.getElementById("search").value;
		if (terms=="") return;
		var match = "The following items match your search : ";
		var found=false;
		for(var n in names) {
			if(names[n].toLowerCase().indexOf(terms.toLowerCase())>-1) { match+="<br>"+names[n]; found=true; }
		}
		if(!found) match= "No matches found";
		document.getElementById('mymodaltext').innerHTML=match;
		document.getElementById('myModalLabel').innerHTML='Search results for "'+terms+'"';
		$('#myModal').modal('show');
	};
}
