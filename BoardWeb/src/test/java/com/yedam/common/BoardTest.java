package com.yedam.common;

import org.apache.ibatis.session.SqlSession;

import com.yedam.mapper.ReplyMapper;
import com.yedam.vo.CartVO;

public class BoardTest {

	public static void main(String[] args) {
		SqlSession session = Datasource.getInstance().openSession(true);
		ReplyMapper mapper = session.getMapper(ReplyMapper.class);
				
		mapper.selectList().forEach(cart -> System.out.println(cart));
	}
}