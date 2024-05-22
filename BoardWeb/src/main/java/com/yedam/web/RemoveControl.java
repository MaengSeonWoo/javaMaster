package com.yedam.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.service.BoardService;
import com.yedam.service.BoardServiceImpl;

public class RemoveControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String bno = req.getParameter("bno");

		BoardService svc = new BoardServiceImpl();
		if (svc.removeBoard(Integer.parseInt(bno))) { // 수정...
			resp.sendRedirect("main.do");
		} else {
			System.out.println("처리중 에러.");

		}
	}

}
