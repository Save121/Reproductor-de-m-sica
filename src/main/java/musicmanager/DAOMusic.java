package musicmanager;

import java.util.ArrayList;
import java.util.List;

import filemanger.FileManager;

public class DAOMusic extends FileManager {

	/*
	 * Permite buscar un elemento en todos las canciones registradas, este puede ser
	 * una cancion, artista o album.
	 * 
	 * @params recibe el nombre del dato a buscar: String
	 * 
	 * @return retorna una List<String> con todas las concidencias que contienen
	 * archivos json, si no hay coincidencia esta lista estaría vacía, por ejemplo
	 * en el caso de un artista la lista tendrá todos los objetos json registrados
	 * de ese artista: List<String>
	 * 
	 * 
	 */
	public List<String> searchFile(String searchName) {
		List<String> filesNames = super.getFilesNames();
		List<DTOMusic> songs = super.getDTOsMusic(filesNames);
		List<String> jsonResult = new ArrayList<>();

		for (DTOMusic song : songs) {

			if (song.verificSong(searchName)) {

				String jsonSong = super.readFile(song.getFileName());
				jsonSong = jsonSong.replaceAll("\n", "");
				jsonResult.add(jsonSong);

			}
		}
		return jsonResult;
	}

	/*
	 * Permite buscar, de la misma manera que el metodo anterior pero en este caso,
	 * es necesario enviar los tres atributos por lo que solo habra una coincidencia
	 * 
	 * @params nombre de la cancion, artista y album de lo que se desea buscar:
	 * String, String, String
	 * 
	 * @return returna un String que contiene un json con la informacion solicitada,
	 * caso contrario retorna un string vacio: String
	 * 
	 */
	public String searchFile(String nameSong, String nameArtist, String nameAlbum) {
		List<String> filesNames = super.getFilesNames();
		List<DTOMusic> songs = super.getDTOsMusic(filesNames);
		String jsonResult = "";
		for (DTOMusic song : songs) {

			if (song.verificSong(nameSong, nameArtist, nameAlbum)) {
				String jsonSong = super.readFile(song.getFileName());
				jsonSong = jsonSong.replaceAll("\n", "");
				jsonResult = jsonSong;

			}
		}
		return jsonResult;

	}
}
