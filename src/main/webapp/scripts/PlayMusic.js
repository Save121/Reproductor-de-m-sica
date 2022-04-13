/**
* Permite crear un objeto toCredits y mediante el mismo poder mostrar y ocultar un div mediante el evento click
* @autor andy.avelar@unah.hn
* @autor cristian_giron@unah.hn
* @autor allam.argueta@unah.hn 
* @version 0.1.0
* @date 2021/12/03
*/

class PlayMusic {
	constructor() {
		this.method = "POST";
		this.action = "SearchCompleteSong.jsp";
	}


	//Funcion que se ejecuta cuando hay una respuesta del servidor y permite mandar a reproducir la cancion
	responseSearchMusic() {
		if (this.readyState == 4) {
			if (this.status == 200) {
				//En esta sección se mandan a cerrar todas los contenedores que puedan estar abiertos
				let searchName = document.querySelector("input#searchTab");
				console.log(searchName);
				searchName.value = "";
				let jsonResponse = this.responseText;
				let jsonMusic = JSON.parse(jsonResponse);
				let resultSongs = document.querySelector("section.resultSongs");
				resultSongs.style.display = "none";

				let formAdd = document.querySelector("div#formAdd");
				formAdd.style.display = "none";

				let credits = document.querySelector("div#credits");
				credits.style.display = "none";
				let videoLyrics = document.querySelector("section.videoLyrics");
				videoLyrics.style.display = "flex";
				let youtubeVideo = document.querySelector("iframe#youtubeVideo");
				let contentLyrics = document.querySelector("div.contentLyrics");
				contentLyrics.style.display = "block";

				//Al elemento HTML que contendra el video de youTube, se le manda la url que reproducira
				youtubeVideo.src = jsonMusic.urlVideo;
				let name = document.querySelector("h3#nameSong");
				name.innerHTML = jsonMusic.artist + "-" + jsonMusic.album + "-" + jsonMusic.song;


			}
		}
	}
	//Funcion que agrega eventos click a varios elementos HTML
	clikEvent(element) {

		element.addEventListener("click", this.play.bind(this));
		element.addEventListener("click", this.getLyrics);
	}
	//Permite obtener la letra de la canción de la API LYRICS.OVH que retorna un json, y luego lo manda a imprimir en el innerHTML de un contenedor
	async getLyrics(event) {
		let element = event.target.innerHTML;

		let elementParts = element.split("-");
		const response = await fetch(`${"https://api.lyrics.ovh"}/v1/${elementParts[0]}/${elementParts[2]}`);
		const data = await response.json();
		let result = document.querySelector("div.contentLyrics");
		try {

			let lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, '<br>');

			result.innerHTML = `<h2>${element}</h2>
    	<p>${lyrics}</p>`;
		} catch (error) {
			console.error(error);
			result.innerHTML = `<h2>${element}</h2>
    <p>Canción no encontrada</p>`;
		}



	}

	//Funcion que solicita al servidor un json
	play(event) {

		let xhr = new XMLHttpRequest();
		let completeName = event.target.innerHTML;
		let form = new FormData();
		form.append("completeName", completeName);
		xhr.onreadystatechange = this.responseSearchMusic;
		xhr.open(this.method, this.action);

		xhr.send(form);
	}


}




