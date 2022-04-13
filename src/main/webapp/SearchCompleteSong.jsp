<%@page import="musicmanager.DAOMusic"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%
// Al momento de el usuario dar clic en un elemento li de la busqueda, se envia el innerHTML
// de ese mismo elemento li el cual tendrá este formato [nombre de la cancion-album-artista], es debido a eso
// que se utiliza String.split para separarlos por guión ( - ) y obtener los atributos
String completeName = request.getParameter("completeName").trim();
String[] valueName = completeName.split("-");
String searchName = valueName[2].trim();
String searchArtist = valueName[0].trim();
String searchAlbum = valueName[1].trim();

DAOMusic musicDAO = new DAOMusic();
// No se hace verificación del retorno debido a que los nombres que se envían son tomados de la lista
// de archivos disponibles, por lo que es completamente seguro que el archivo exista
String result = musicDAO.searchFile(searchName, searchArtist, searchAlbum);

%>
<%=result%>