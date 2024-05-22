package com.yedam.web;

import java.io.IOException;
import java.util.List;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.yedam.dao.EmpDAO;

@WebServlet("/empDatatable.json")
public class empDatatable extends HttpServlet{
	
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException{
		EmpDAO edao = new EmpDAO();
		List<List<String>> list = edao.getDataTable();
		
		Gson gson = new GsonBuilder().setPrettyPrinting().create();
		Map<String, Object> map = new HashMap<>();
		map.put("data", list);
		
		String json = gson.toJson(map);
		
		System.out.println(json);
		resp.getWriter().print(json);	
		}
}