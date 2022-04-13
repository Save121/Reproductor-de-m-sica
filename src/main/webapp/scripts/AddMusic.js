class AddMusic {
	constructor() {

		this.method = "POST";
		this.action = "addMusic.jsp";
	}
	//Metodo que actua en respuesta al servidor
	responseAddMusic() {

		if (this.readyState == 4) {
			if (this.status == 200) {
				let response = this.responseText;
				//Se manda en una alerta la respuesta del servidor, para este caso será un texto diciendo el estado de la canción si fue agregada o si ya existe
				alert(response);
			}
		}


	}
	//Metodo que se acciona al presionar el botón de registra canción
	sendMusic() {
		//Se obtienen los input donde el usuario ingresa los datos
		let song = document.querySelector("input[name=song]");
		let artist = document.querySelector("input[name=artist]");
		let album = document.querySelector("input[name=album]");
		let year = document.querySelector("input[name=year]");
		let urlVideo = document.querySelector("input[name=urlVideo]");
		//Antes de enviar solicitudes al servidor, el programa verifica que no hayan campos vacios o erroneos. Verifica el borde del input debido a que en DivManager
		// hay una funcion que verifica el tipo de dato, si no se cumplen las condiciones su borde cambia
		if (song.value.trim().length === 0 || artist.value.trim().length === 0 || album.value.trim().length === 0 || year.value.trim().length === 0 || urlVideo.value.trim().length === 0
			|| song.style.borderColor == "red" || artist.style.borderColor === "red" || album.style.borderColor === "red" || year.style.borderColor === "red" || album.style.borderColor === "red"
		) {
			//Informa al usuario de campos erroneos o vacios
			alert("Parametros vacíos o erróneos")
		} else {

			let xhr = new XMLHttpRequest();


			//Se obtienen los datos registrados
			let form = new FormData();
			form.append("song", song.value.trim());
			form.append("artist", artist.value.trim());
			form.append("album", album.value.trim());
			form.append("year", year.value.trim());
			form.append("urlVideo", urlVideo.value.trim());
			//Se limpian las cajas (AL PARECER NO FUNCIONA)
			artist.value = "";
			album.value = "";
			year.value = "";
			urlVideo.value = "";
			//Se cierra el div de registro
			let sendDiv = document.querySelector("div#formAdd");
			sendDiv.style.display = "none";
			xhr.onreadystatechange = this.responseAddMusic;
			xhr.open(this.method, this.action);

			xhr.send(form);

		}


	}
}
//Se agregan eventos a los elementos
let addMusic = new AddMusic();
let sendMusic = document.querySelector("input#sendMusic");
sendMusic.addEventListener("click", addMusic.sendMusic.bind(addMusic));


