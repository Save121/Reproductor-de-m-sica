
<%@page import="filemanger.FileManager"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%
//Se obtiene los datos enviados por el usuario y se limpia con con .trim()
String song = request.getParameter("song").trim();
String artist = request.getParameter("artist").trim();
String album = request.getParameter("album").trim();
String year = request.getParameter("year").trim();
String urlVideo = request.getParameter("urlVideo").trim();

//Los enlaces videos de YouTube no pueden reproducirse en otra pagina web solo copiando el enlace, para esto el elemento
//que forma parte del enlace watch?v= se debe cambiar por embed/ para que el navegador permita reproducir, sin embargo existen
//videos con derechos de autor que solo se pueden reproducir en YouTube
urlVideo = urlVideo.replace("watch?v=", "embed/");

StringBuilder json = new StringBuilder();
//Se crea el json
json.append("{");
json.append("\"song\":");
json.append(String.format("\"%s\",", song));
json.append("\"artist\":");
json.append(String.format("\"%s\",", artist));
json.append("\"album\":");
json.append(String.format("\"%s\",", album));
json.append("\"year\":");
json.append(String.format("\"%s\",", year));
json.append("\"urlVideo\":");
json.append(String.format("\"%s\"", urlVideo));
json.append("}");

FileManager filemanager = new FileManager();
//El String guarda la respuesta de la función writeFile, esta respuesta es en función de la creación del archivo
//Si todo va bien, retorna un string informando que es asi caso contrario retorna un string con el error. Ese string esa 
//enviado al javascript como respuesta del servidor
//El nombre que se la da  a los archivos es el nombre de la canción, artista y album concatenados con guión bajo ( _ )
String responseValue = filemanager.writeFile(String.format("%s_%s_%s", song, artist, album), json.toString());
%>
<%=responseValue%>


