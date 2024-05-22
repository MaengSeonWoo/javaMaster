package com.yedam.vo;

import lombok.Data;

@Data
public class BasketVO {
	private int basketNo;
	private int productNo;
	private String productName;
	private String productImg;
	private String productSize;
	private String productColor;
	private int productPrice;
	private int productCnt;
	private int deliveryFee;
	private String userId;
}
