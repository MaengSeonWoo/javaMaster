package com.yedam.mapper;

import java.util.List;

import com.yedam.common.SearchVO;
import com.yedam.vo.BasketVO;
import com.yedam.vo.CartVO;
import com.yedam.vo.CenterVO;
import com.yedam.vo.ReplyVO;

public interface ReplyMapper {
	// 댓글목록.
	List<ReplyVO> replyList(int boardNo);
	List<ReplyVO> replyListPaging(SearchVO search);
	// 댓글삭제.
	int deleteReply(int replyNo);
	// 댓글등록.
	int insertReply(ReplyVO rvo);
	// 댓글갯수.
	int selectCount(int boardNo);
	
	// cart 목록, 수정, 삭제
	List<CartVO> selectList();
	int updateCart(CartVO cvo);
	int deleteCart(int no);
	
	int insertCenter(CenterVO[] array);
	
	// 중간프로젝트
	List<BasketVO> basketselectList();
	int updateBasket(BasketVO bvo);
	int deleteBasket(int basketno);
}
