package filemanger;

import java.io.BufferedReader;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

import musicmanager.DTOMusic;

public class FileManager {
	/*
	 * Atributo que contiene la ubicación en disco donde se almacenan los archivos,
	 * en esta clase se utiliza File.separator retorna el caracter de separación de
	 * archivos dependiendo el sistema opearivo que ejecute el programa. Se utliza
	 * para mayor compatibilidad
	 */
	private String pathFiles = String.format("eclipse%sWebFiles", File.separator);

	/*
	 * Función para obtener el contenido de un archivo en disco
	 * 
	 * @params recibe el nombre del archivo que se desea leer: String
	 * 
	 * @return retorna el dato encontrado en el archivo: String
	 */
	public String readFile(String nameFile) {
		StringBuilder content = new StringBuilder("");
		try {

			FileInputStream fis = new FileInputStream(pathFiles + File.separator + nameFile);
			InputStreamReader isr = new InputStreamReader(fis);
			BufferedReader br = new BufferedReader(isr);
			String line;

			while ((line = br.readLine()) != null) {
				content.append(line);

			}
			br.close();
			return content.toString();
		} catch (IOException e) {

		}
		return null;
	}

	/*
	 * Permite escribir en un archivo existente en el disco
	 * 
	 * @params Recibe el nombre del archivo y el texto a escribir en dicho archivo:
	 * String, String
	 * 
	 * @return Retorna un valor String sobre el estado de la escritura, si se logró
	 * escribir el archivo o no, o si hubo errores: String
	 * 
	 */
	public String writeFile(String nameFile, String textFile) {
		// Manda a llamar a la función createFile se crea el archivo, si hay retorno
		// false por parte de la función significa que el archivo existe
		if (createFile(nameFile)) {
			try {
				FileWriter fw = new FileWriter(pathFiles + File.separator + nameFile + ".music");
				BufferedWriter bw = new BufferedWriter(fw);
				bw.write(textFile);
				bw.close();
				return "Cancion agregada con éxito";

			} catch (IOException e) {
				return "Error al agregar la canción";
			}
		} else {
			return "La canción ya existe en la biblioteca";
		}

	}

	/*
	 * Permite crear un archivo en disco
	 * 
	 * @params recibe el nombre del archivo que se desea crear: String
	 * 
	 * @return retorna un valor booleano dependiendo si el archivo ya existe, o si
	 * se logro crear: Booolean
	 */

	protected boolean createFile(String nameFile) {
		File file = new File(pathFiles, nameFile + ".music");
		if (!(file.exists())) {
			try {
				return file.createNewFile();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}

		}
		return false;
	}

	/*
	 * Permite obtener un elemento de tipo List<String> con todos los nombres de los
	 * archivos disponibles en la carpeta
	 * 
	 * @return rotar todos los nombres de los archivos disponibles en la carpeta
	 * donde se han guardado, se le elimina la extension del archivo: List<String>
	 * 
	 * 
	 */
	public List<String> getFilesNames() {
		File musicCarpet = new File("eclipse/WebFiles");
		// El metodo list() de la clase File permite obtener todos los nombres de
		// archivos o carpetas en una ruta, si es archivo ese nombre tiene incluido el
		// tipo de
		// archivo
		String[] listFiles = musicCarpet.list();
		List<String> finalList = new ArrayList<>();
		for (String file : listFiles) {

			// Se elimina la extensión de archivo del nombre de archivo
			file = file.replaceAll(".music", "");
			finalList.add(file);

		}

		return finalList;
	}

	/*
	 * Ya que los archivos se guardan con el nombre de la canción, artista y album
	 * concatenados con guión bajo ( _ ), con esta función se obtienen una
	 * list<DTOMusic> donde se guardan el nombre de la canción, artista y album en
	 * sus atributos. Se crea un DTOMusic por cada archivo que existe permitiendo
	 * asi, tener todas las canciones disponibles en una lista.
	 * 
	 * @params Necesita todos los nombres de los archivos en una List<String>:
	 * List<String>
	 * 
	 * @return retorna una List<DTOMusic> con toda la musica disponible en la
	 * biblioteca
	 * 
	 */
	public List<DTOMusic> getDTOsMusic(List<String> listFiles) {
		List<DTOMusic> songs = new ArrayList<>();
		for (String file : listFiles) {
			String[] fileParts = file.split("_");
			DTOMusic musicDTO = new DTOMusic();
			musicDTO.setName(fileParts[0]);
			musicDTO.setArtist(fileParts[1]);
			musicDTO.setAlbum(fileParts[2]);
			songs.add(musicDTO);

		}

		return songs;
	}

}
