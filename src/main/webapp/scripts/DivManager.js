/**
* Permite crear un objeto toCredits y mediante el mismo poder mostrar y ocultar un div mediante el evento click
* @autor andy.avelar@unah.hn
* @autor cristian_giron@unah.hn
* @autor allam.argueta@unah.hn 
* @version 0.1.0
* @date 2021/12/03
*/
class DivManager {

	constructor() {

	}
	//Permite abrir el contenedor de creditos
	openCredits() {
		let divCredits = document.querySelector("div#credits");
		divCredits.style.display = "block";
	}
	//Permite abrir el contenedor para agregar canciones
	openAddMusic() {
		let divAddMusic = document.querySelector("div#formAdd");
		divAddMusic.style.display = "block";
	}
	//Permite cerrar un div padre, este cierra al elemento padre del elemento que haya llamado la función
	close(event) {
		let button = event.target;
		let div = button.parentNode;
		div.style.display = "none";

	}
	//Permite abrir el contenedor donde se muestran los resultados de busqueda
	openSearchResult() {
		let resultSongs = document.querySelector("section.resultSongs");
		resultSongs.style.display = "block";
	}
	//Verifica si al menos se manda una letra como nombre de canción, si no se cumple la condición cambia el borde a rojo para indicar que esta erroneo, caso contrario
	// lo pone en verde
	verificSong() {
		let inputSong = document.querySelector("input#song");

		if (inputSong.value.trim().length == 0) {
			inputSong.style.border = "2px solid red";
		} else {
			inputSong.style.border = "2px solid green";
		}
	}
	//Verifica si al menos se manda una letra como nombre de artista, aplicando las mismas condiciones que la funcion anterior
	verificArtist() {
		let inputArtist = document.querySelector("input#artist");

		if (inputArtist.value.trim().length == 0) {
			inputArtist.style.border = "2px solid red";
		} else {
			inputArtist.style.border = "2px solid green";
		}
	}
	//Verifica si al menos se manda una letra como nombre de album, aplicando las mismas condiciones que la funcion anterior
	verificAlbum() {
		let inputAlbum = document.querySelector("input#album");

		if (inputAlbum.value.trim().length == 0) {
			inputAlbum.style.border = "2px solid red";
		} else {
			inputAlbum.style.border = "2px solid green";
		}
	}

	//Verifica si el usuario esta registrando un año, no puede registrar letras u otros caracteres 
	verificYear() {
		let yearInput = document.querySelector("input#year");
		if (/\d{4}$/.test(yearInput.value.trim())) {

			yearInput.style.border = "2px solid green";
		} else {
			yearInput.style.border = "2px solid red";
		}

	}
	//Verifica si se ingresa estrictamente un link de youtube
	verificUrlVideo() {
		let urlVideo = document.querySelector("input#urlVideo");
		if (/https:\/\/www.youtube.com\/watch\?v=\w+/.test(urlVideo.value)) {

			urlVideo.style.border = "2px solid green";
			return true;
		} else {
			urlVideo.style.border = "2px solid red";
			return false;
		}

	}

}
//Agregado de eventos a los elementos

let openCredits = document.querySelector("i#toCredits");
let divManager = new DivManager();
openCredits.addEventListener("click", divManager.openCredits);
let openAddMusic = document.querySelector("i#toAddMusic")
openAddMusic.addEventListener("click", divManager.openAddMusic);
//Utilizando una clase, es posible agregar un evento a varios elementos a al vez
let divClose = document.querySelectorAll("input.divClose");

for (let div of divClose) {
	div.addEventListener("click", divManager.close);
}

let searchResult = document.querySelector("input#searchTab");
searchResult.addEventListener("click", divManager.openSearchResult);


let song = document.querySelector("input#song");
let artist = document.querySelector("input#artist");
let album = document.querySelector("input#album");
let year = document.querySelector("input#year");
let urlVideo = document.querySelector("input#urlVideo");

song.addEventListener("keyup", divManager.verificSong);
artist.addEventListener("keyup", divManager.verificArtist);
album.addEventListener("keyup", divManager.verificAlbum);
year.addEventListener("keyup", divManager.verificYear);
urlVideo.addEventListener("keyup", divManager.verificUrlVideo);

song.addEventListener("click", divManager.verificSong);
artist.addEventListener("click", divManager.verificArtist);
album.addEventListener("click", divManager.verificAlbum);
year.addEventListener("click", divManager.verificYear);
urlVideo.addEventListener("click", divManager.verificUrlVideo);


