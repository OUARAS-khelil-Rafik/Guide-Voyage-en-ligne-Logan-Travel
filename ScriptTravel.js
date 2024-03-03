<script>
	/*Pour Ajouter (Music : Auto Play)*/
	var MaMusic = document.getElementById("MaMusic");
	var btnplay = document.getElementById("btnplay");
	
	btnplay.onclick = fonction(){
		MaMusic.play();
	}
	fonction slider(e){
		document.querySelector('.left').src = e;
	}
	/*Pour Modifier la position du menu */
    var toggle_menu = document.querySelector('.responsive-menu');
	var menu = document.querySelector('.menu');
	toggle_menu.onclick= function(){
		toggle_menu.classList.toggle('active');
		menu.classList.toggle('responsive')
	}
</script>
