package com.yedam.vo;

import lombok.Data;

// lombok: 이클립스에 설치, 라이브러리 필요.
@Data
public class EmpVO {
	private int empNo; // 오라클(emp_no) : 자바(empNo)
	private String empName;
	private String empPhone;
	private String email;
	private String hireDate; // 2020-05-01
	private int salary;
}
