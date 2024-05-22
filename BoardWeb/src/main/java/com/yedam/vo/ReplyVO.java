package com.yedam.vo;

import java.util.Date;

import lombok.Data;

@Data
public class ReplyVO {
	private int replyNo;
	private String reply;// 댓글.
	private String replyer;// 댓글작성자.
	private Date replyDate; // 작성일시.
	private int boardNo; // 원본글번호.
}
