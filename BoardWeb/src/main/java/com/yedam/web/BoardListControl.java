package com.yedam.web;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.service.BoardService;
import com.yedam.service.BoardServiceImpl;
import com.yedam.vo.BoardVO;

public class BoardListControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		BoardService svc = new BoardServiceImpl();
		List<BoardVO> list = svc.boardList(null);

		req.setAttribute("list", list);

		String path = "WEB-INF/datatable/boardList.jsp";
		req.getRequestDispatcher(path).forward(req, resp);
	}

}
