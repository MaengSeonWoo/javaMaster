package com.yedam.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.dao.EmpDAO;

@WebServlet("/deleteEmp.json")
public class EmpDeleteServlet extends HttpServlet {
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException{
		String eid = req.getParameter("eno");
		int eno = Integer.parseInt(eid);
		
		EmpDAO edao = new EmpDAO(); 
		if(edao.deleteEmp(eno)) {
			resp.getWriter().print("{\"retCode\": \"OK\"}");
		}else {
			resp.getWriter().print("{\"retCode\": \"NG\"}");
		}
		
	}
}
