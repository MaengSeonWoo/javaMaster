package com.yedam.web;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.common.HttpUtils;
import com.yedam.common.PageDTO;
import com.yedam.common.SearchVO;
import com.yedam.service.BoardService;
import com.yedam.service.BoardServiceImpl;
import com.yedam.vo.BoardVO;

public class MainControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO main.do => WEB-INF/board/boardList.jsp
		String path = "WEB-INF/board/boardList.jsp";
		path = "board/boardList.tiles";

		SearchVO search = new SearchVO();
		String page = req.getParameter("page");
		String sc = req.getParameter("searchCondition");
		String kw = req.getParameter("keyword");

		page = page == null ? "1" : page; // page 파라미터가 없을 경우에는 1페이지 출력.
		search.setPage(Integer.parseInt(page));
		search.setKeyword(kw);
		search.setSearchCondition(sc);

		BoardService svc = new BoardServiceImpl();

		List<BoardVO> list = svc.boardList(search); // 목록.
		PageDTO pageDTO = new PageDTO(Integer.parseInt(page), svc.getTotal(search)); // 건수.

		// jsp 페이지에 정보 전달.
		req.setAttribute("boardList", list);
		req.setAttribute("paging", pageDTO);
		req.setAttribute("searchCondition", sc);
		req.setAttribute("keyword", kw);

		// req.getRequestDispatcher(path).forward(req, resp);
		HttpUtils.forward(req, resp, path);
	}

}
