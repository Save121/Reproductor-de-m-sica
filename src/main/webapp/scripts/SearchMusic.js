/**
* Permite crear un objeto toCredits y mediante el mismo poder mostrar y ocultar un div mediante el evento click
* @autor andy.avelar@unah.hn
* @autor cristian_giron@unah.hn
* @autor allam.argueta@unah.hn 
* @version 0.1.0
* @date 2021/12/03
*/


class SearchMusic {

	constructor() {
		this.method = "POST";
		this.action = "searchMusic.jsp";
	}
	//Funcion que se ejuta cuando se obtiene una respuesta del servidor
	responseSearchMusic() {

		if (this.readyState == 4) {
			if (this.status == 200) {
				let responseServer = this.responseText;
				//Se obtiene las lista donde se apilaran los resultados
				let listContainer = document.querySelector("ol#listSongs");
				//404 es una respuesta que manda el servidor lo cual fue programado para que sea enviado cuando no hay coincidencias
				if (responseServer != 404) {
					//Se parsea el JSON de respuesta del servidor
					let jsonMusics = JSON.parse(responseServer);
					//Siempre se limpiar el innerHTML de la lista
					listContainer.innerHTML = "";
					//Se recorren todos los objetos disponibles en el array de JSON, en cada interación se agrega un elemento a la lista que contiene nombre de la cancion, album y artista
					for (let json of jsonMusics) {
						//Los li se registran con una clase	
						listContainer.innerHTML += "<li class =\"elementsList\">" + json.artist + "-" + json.album + "-" + json.song + "</li>";
					}
					//Se obtienen todos los elementos de la clase registrada en el for anterior
					let elementsList = document.querySelectorAll("ol#listSongs li.elementsList");
					//Se crea instancia de PlayMusic.js
					let playMusic = new PlayMusic();
					//Se manda a la clase playMusic cada uno de los elementos, alla se le agrega un evento click a cada elemento
					for (let element of elementsList) {
						playMusic.clikEvent(element);
					}
				//Si el resultado de la respuesta del servidor es 404 significa que no hay coincidencia y simplemente limpia la lista
				} else {
					listContainer.innerHTML = "";
				}


			}
		}
	}
	//Se ejecuta al escribir en la barra de busqueda, cada vez que se presiona una tecla. Y en cada vez manda el innerHTML al servidor para que lo busque en los elementos disponibles

	search() {

		let xhr = new XMLHttpRequest();
		let searchName = document.querySelector("input#searchTab").value;



		let form = new FormData();
		form.append("searchName", searchName);
		xhr.onreadystatechange = this.responseSearchMusic;
		xhr.open(this.method, this.action);
		xhr.send(form);


	}
}
//Agregando eventos a elementos

let searchMusic = new SearchMusic();
let searchTab = document.querySelector("input#searchTab");

//Se utiliza el evento keyup debido a que se desea que cada vez que un usuario escriba, se hagan solicitudes al servidor hasta encontrar coincidencias
searchTab.addEventListener("keyup", searchMusic.search.bind(searchMusic));

