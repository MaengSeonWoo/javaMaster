package com.yedam.service;

import java.util.List;

import javax.sql.DataSource;

import org.apache.ibatis.session.SqlSession;

import com.yedam.common.Datasource;
import com.yedam.common.SearchVO;
import com.yedam.mapper.ReplyMapper;
import com.yedam.vo.BasketVO;
import com.yedam.vo.CartVO;
import com.yedam.vo.CenterVO;
import com.yedam.vo.ReplyVO;

public class ReplyServiceImpl implements ReplyService {

	SqlSession session = Datasource.getInstance().openSession(true);
	ReplyMapper mapper = session.getMapper(ReplyMapper.class);

	@Override
	public List<ReplyVO> replyList(SearchVO search) {
		return mapper.replyListPaging(search);
	}

	@Override
	public boolean removeReply(int replyNo) {
		return mapper.deleteReply(replyNo) == 1;
	}

	@Override
	public boolean addReply(ReplyVO rvo) {
		return mapper.insertReply(rvo) == 1;
	}

	@Override
	public int getReplyCnt(int boardNo) {
		return mapper.selectCount(boardNo);
	}

	@Override
	public List<CartVO> cartList() {
		// TODO Auto-generated method stub
		return mapper.selectList();
	}

	@Override
	public boolean modifyCart(CartVO cvo) {
		// TODO Auto-generated method stub
		return mapper.updateCart(cvo) == 1;
	}

	@Override
	public boolean removeCart(int no) {
		// TODO Auto-generated method stub
		return mapper.deleteCart(no) == 1;
	}

	@Override
	public int addCenter(CenterVO[] array) {
		// TODO Auto-generated method stub
		return mapper.insertCenter(array);
	}

	@Override
	public List<BasketVO> basketList() {
		// TODO Auto-generated method stub
		return mapper.basketselectList();
	}

	@Override
	public boolean modifyBasket(BasketVO bvo) {
		// TODO Auto-generated method stub
		return mapper.updateBasket(bvo) == 1;
	}

	@Override
	public boolean removeBasket(int basketno) {
		// TODO Auto-generated method stub
		return mapper.deleteBasket(basketno) == 1;
	}

}
