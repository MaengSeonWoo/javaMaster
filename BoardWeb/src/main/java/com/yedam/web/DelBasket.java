package com.yedam.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.service.ReplyService;
import com.yedam.service.ReplyServiceImpl;
import com.yedam.vo.BasketVO;

public class DelBasket implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String no = req.getParameter("basketno");
		
		BasketVO bvo = new BasketVO();
		bvo.setBasketNo(Integer.parseInt(no));
		
		ReplyService svc = new ReplyServiceImpl();
		if(svc.removeBasket(Integer.parseInt(no))) {
			// {"retCode":"OK"}
			resp.getWriter().print("{\"retCode\":\"OK\"}");
		} else {
			resp.getWriter().print("{\"retCode\":\"NG\"}");
		}
	}

}
