<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

<head>
<meta charset="UTF-8">
<meta name="date" description="2021/11/19" />
<meta name="version" description="0.1.0" />
<meta name="autor"
	description="andy.avelar@unah.hn, cristian_giron@unah.hn , allam.argueta@unah.hn " />
<link rel="stylesheet" type="text/css" href="scripts/styles.css">
<link rel="shortcut icon" href="./img/icon.png" type="image/x-icon">
<script src="https://kit.fontawesome.com/795a2e76ab.js"
	crossorigin="anonymous"></script>
<title>My Playlist</title>
</head>


<body>
	<header class="header">
		<table>
			<tr>
				<th scope="col"><input id="searchTab"
					placeholder="Ingrese una cancion,album o artista..." type="search"
					class="searchTab" /></th>
				<th><i class="fas fa-laptop-house iconColor separacionIconos"></i></th>
				<th><i id="toAddMusic"
					class="fas fa-plus-circle iconColor separacionIconos"></i></th>
				<th><i class="fas fa-file-audio iconColor separacionIconos"></i></th>
				<th><i id="toCredits"
					class="fas fa-scroll iconColor separacionIconos"></i></th>
			</tr>
		</table>
	</header>
	<section class="videoLyrics">
		<div class="contentVideo">
			<h3 id="nameSong"></h3>
			<iframe id="youtubeVideo" src=""></iframe>
		</div>
		<div class="contentLyrics"></div>
	</section>
	<div id="searchResult"></div>
	<!--  <p>
		<img src="img/oopmp.jpg" class="imagenPrincipal">
	</p>  -->
	<div class="divFloat form" id="credits">
		<input type="button" class="divClose" id="closeCredits" value="x" />
		<h3>Creditos</h3>

		<table class="fondoCreditos">
			<tr class="columCredit	">
				<th>Nombre</th>
				<th>Numero de cuenta</th>
				<th>Catedrático</th>
				<th>Clase</th>
				<th>Sección</th>
				<th>Periodo Académico</th>
				<th>Año</th>
			</tr>
			<tr>

				<td>Cristian Ariel Giron Alvarado</td>

				<td>20111004430</td>
				<td></td>

				<td>IS-410</td>

				<td>1000</td>

				<td>III-PAC</td>

				<td>2021</td>

			</tr>

			<tr>

				<td>Andy Yankarlo Avelar Rodezno</td>

				<td>20191033226</td>

				<td>José Manuel Inestroza Murillo</td>

				<td>IS-410</td>

				<td>1000</td>

				<td>III-PAC</td>

				<td>2021</td>

			</tr>

			<tr>

				<td>Allam Daniel Argueta Servellon</td>

				<td>20151001260</td>
				<td></td>

				<td>IS-410</td>

				<td>1000</td>

				<td>III-PAC</td>

				<td>2021</td>

			</tr>
		</table>


	</div>


	<div class="divFloat form" id="formAdd">
		<input type="button" class="divClose" id="divClose" value="X">
		<div id="formRegister">
			<h3>Registrar una cancion:</h3>
			<input type="text" name="song" id="song"
				placeholder="Nombre de canción"> <input type="text"
				name="artist" id="artist" placeholder="Artista"> <input
				type="text" name="album" id="album" placeholder="Album"> <input
				type="text" name="year" id="year"
				placeholder="Año de la canción, debe ser numero de cuatro dígitos">
			<input type="text" name="urlVideo" id="urlVideo"
				placeholder="URL, debe ser un URL de un video de YouTube"> <input
				type="button" id="sendMusic" value="Registrar">
		</div>
	</div>

	<section class="resultSongs">
		<ol id="listSongs">
		</ol>
	</section>

	<script src="scripts/DivManager.js"></script>
	<script src="scripts/AddMusic.js"></script>
	<script src="scripts/SearchMusic.js"></script>
	<script src="scripts/PlayMusic.js"></script>
</body>

</html>