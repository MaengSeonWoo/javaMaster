package com.yedam.web;

import java.io.IOException;
import java.net.URLEncoder;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.service.BoardService;
import com.yedam.service.BoardServiceImpl;
import com.yedam.vo.BoardVO;

public class ModifyControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		// bno, title, content 3개 파라미터. 목록으로 이동.
		req.setCharacterEncoding("utf-8");
		String bno = req.getParameter("bno");
		String title = req.getParameter("title");
		String content = req.getParameter("content");
		String page = req.getParameter("page");
		String sc = req.getParameter("searchCondition");
		String kw = req.getParameter("keyword");

		BoardVO board = new BoardVO();
		board.setBoardNo(Integer.parseInt(bno));
		board.setTitle(title);
		board.setContent(content);

		BoardService svc = new BoardServiceImpl();
		String encodeKW = URLEncoder.encode(kw, "UTF-8"); // 한글encoding처리.
		if (svc.modifyBoard(board)) { // 수정...
			resp.sendRedirect("main.do?page="+page+"&searchCondition="+sc+"&keyword="+encodeKW); // 질의문자열(query
																											// string)
		} else {
			System.out.println("처리중 에러.");

		}

	}

}
