function bodyLoad() {
	var btn=document.getElementById("btnSearch");
	btn.onclick = function() {
		var names = ['Winter hat','Fire extinguisher', 'Worldwide GPS', 'First aid kit', 'Flashlight', 'Breathing gas'];
		var srcs = ['img1.jpg','img2.jpg','img3.png','img4.jpg','img5.jpg','img6.jpg'];
		var terms = document.getElementById("search").value;
		if (terms=="") return;
		var match = "The following items match your search : ";
		var found=false;
		for(var n in names) {
			if(names[n].toLowerCase().indexOf(terms.toLowerCase())>-1) { match+="<br><a href='#' onclick='showimg(this)' id='show"+n+"'>"+names[n]+"</a>"; found=true; }
		}
		if(!found) match= "No matches found";
		document.getElementById('mymodaltext').innerHTML=match;
		document.getElementById('myModalLabel').innerHTML='Search results for "'+terms+'"';
		$('#myModal').modal('show');
	};
	$(".image").on('click',function() {
		document.getElementById('mymodaltext').innerHTML="<center><img src='"+this.src+"' style='width:400px;height:200px;'></center>";
		document.getElementById('myModalLabel').innerHTML='Show Image';
		$('#myModal').modal('show');
	});
	$("#search").on('keyup',function(e) {
		if(e.keyCode==13) {
			var names = ['Winter hat','Fire extinguisher', 'Worldwide GPS', 'First aid kit', 'Flashlight', 'Breathing gas'];
			var srcs = ['img1.jpg','img2.jpg','img3.png','img4.jpg','img5.jpg','img6.jpg'];
			var terms = document.getElementById("search").value;
			if (terms=="") return;	
			var match = "The following items match your search : ";
			var found=false;
			for(var n in names) {
				if(names[n].toLowerCase().indexOf(terms.toLowerCase())>-1) { match+="<br><a href='#' onclick='showimg()'>"+names[n]+"</a>"; found=true; }
			}
			if(!found) match= "No matches found";
			document.getElementById('mymodaltext').innerHTML=match;
			document.getElementById('myModalLabel').innerHTML='Search results for "'+terms+'"';
			$('#myModal').modal('show');
		}
	})
}
function showimg(t) {
		var names = ['Winter hat','Fire extinguisher', 'Worldwide GPS', 'First aid kit', 'Flashlight', 'Breathing gas'];
		var srcs = ['img1.jpg','img2.jpg','img3.png','img4.jpg','img5.jpg','img6.jpg'];
		var src=srcs[parseInt(t.id.substring('show'.length))];
		document.getElementById('mymodaltext').innerHTML="<center><img src='images/"+src+"' style='width:400px;height:200px;'></center>";
		document.getElementById('myModalLabel').innerHTML='Show Image';
		$('#myModal').modal('show');

}
