package co.yedam;

import java.sql.Date;

public class Employee {
	private String name;
	private String phone;
	private String mail;
	private int salary;
	private String hiredate;
	private int empNo;
	
	
	
	public int getEmpNo() {
		return empNo;
	}
	public void setEmpNo(int empNo) {
		this.empNo = empNo;
	}
	public void setName(String name) {
		this.name = name;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public void setMail(String mail) {
		this.mail = mail;
	}
	public void setSalary(int salary) {
		this.salary = salary;
	}
	public void setHiredate(String hiredate) {
		this.hiredate = hiredate;
	}
	public String getName() {
		return name;
	}
	public String getPhone() {
		return phone;
	}
	public String getMail() {
		return mail;
	}
	public int getSalary() {
		return salary;
	}
	public String getHiredate() {
		return hiredate;
	}
	@Override
	public String toString() {
		// 사번   이름       이메일         급여
		return String.format("%3d %4s %-12s %5d\n",empNo, name, mail, salary);
//		return "Employee [name=" + name + ", phone=" + phone + ", mail=" + mail + ", salary=" + salary + ", hiredate="
//				+ hiredate + "]";
	}
	
	public String showInfo() {
		// 사번   이름       연락처         급여
		return String.format("%3d %4s %-12s %5d\n",empNo, name, phone, salary);
	}
	
	
	
}
