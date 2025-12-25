function volume_sphere() {
     event.preventDefault();
	let r = parseFloat(document.getElementById("radius").value) ;

	 if(r < 0)
	 {
		 document.getElementById("volume").value = "NaN" ;
		 return ;
}
	let volume = (4/3) * Math.PI * (r**3) ;

	document.getElementById("volume").value =  volume.toFixed(4) ;
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
