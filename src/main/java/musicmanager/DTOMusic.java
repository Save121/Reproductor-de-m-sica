package musicmanager;

public class DTOMusic {

	// Atributos de la clase
	private String name;
	private String artist;
	private String album;

	// Metodos get y set de todos los atributos
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getArtist() {
		return artist;
	}

	public void setArtist(String artist) {
		this.artist = artist;
	}

	public String getAlbum() {
		return album;
	}

	public void setAlbum(String album) {
		this.album = album;
	}

	/*
	 * Permite obtener el nombre del archivo incluido su extensión de archivo de
	 * este objeto, concatenando los atrributos con guión bajo ( _ )
	 * 
	 * @return nombre del archivo: String
	 * 
	 */
	public String getFileName() {
		return this.name + "_" + this.artist + "_" + this.album + ".music";
	}

	/*
	 * Permite verificar un valor con cualquiera de los atributos de la clase
	 * 
	 * @params recibe el valor string que se desea comparar: String
	 * 
	 * @return retorna un valor booleano si el dato enviado es igual con alguno de
	 * los tres atributos: Boolean
	 * 
	 * 
	 */
	public boolean verificSong(String searchName) {
		searchName = searchName.trim().toLowerCase();

		if ((searchName.trim().toLowerCase().equals(this.name.toLowerCase()))
				|| (searchName.trim().toLowerCase().equals(this.artist.toLowerCase()))
				|| (searchName.trim().toLowerCase().equals(this.album.toLowerCase()))) {
			return true;
		}
		return false;
	}

	/*
	 * Permite verificar un tres valores con los tres atributos de la clase
	 * 
	 * @params recibe los valores string que se desea comparar: String, String,
	 * String
	 * 
	 * @return retorna un valor booleano si los datos enviados son iguales a los
	 * atributos del objto: boolean
	 * 
	 * 
	 */
	public boolean verificSong(String nameSong, String nameArtist, String nameAlbum) {
		nameSong = nameSong.trim().toLowerCase();
		nameArtist = nameArtist.trim().toLowerCase();
		nameAlbum = nameAlbum.trim().toLowerCase();

		if ((nameSong.trim().toLowerCase().equals(this.name.toLowerCase()))
				&& (nameArtist.trim().toLowerCase().equals(this.artist.toLowerCase()))
				&& (nameAlbum.trim().toLowerCase().equals(this.album.toLowerCase()))) {
			return true;
		}
		return false;
	}
}
