<%@page import="java.util.List"%>
<%@page import="musicmanager.DAOMusic"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<% 

DAOMusic DAOMusic = new DAOMusic();

// Se envía el valor que el usuario desea buscar, y se obtiene como retorno un de tipo list<String>
// si existe concidencia retorna uno o más json como elementos de la lista, si no encuentra coincidencia
// retorna una lista vacía.
List<String>  listElements = DAOMusic.searchFile(request.getParameter("searchName").trim());
StringBuilder jsonResult = new StringBuilder();

// Se verifica que el elemento retornado no es vacío, si es así se envía la javascript 404 haciendo referencia a que no existe el elemento buscado.


if (listElements.isEmpty()){
	jsonResult.append(404);
	
} else{
	int counter = 1;
	jsonResult.append("[");
	for (String list: listElements){
		jsonResult.append(list);
		if (counter < listElements.size() ){
			jsonResult.append(",");
		}
		counter++;
	}
	jsonResult.append("]");
}

%>
<%=jsonResult.toString()%>