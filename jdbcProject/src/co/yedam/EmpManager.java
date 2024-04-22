package co.yedam;

import java.sql.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.Scanner;

public class EmpManager {

	public static void main(String[] args) {
		// Scanner
		Scanner sc = new Scanner(System.in);
		boolean run = true;
		EmpDAO dao = new EmpDAO();
		
		while(run) {
			System.out.println("1.사원목록 2.사원등록 3.정보수정 4.사원삭제 5.종료");
			System.out.print("선택> ");
			int menu = Integer.parseInt(sc.nextLine());
			
			switch(menu) {
			case 1 :
				List<Employee> emps = dao.empList();
				// 타이틀
				System.out.println("사번   이름       연락처         급여");
				System.out.println("----------------------------------");
				for(Employee emp : emps) {
					System.out.println(emp.showInfo());
				}
				break;
			case 2 :
				System.out.print("사원명>> ");
				String name = sc.nextLine();
				System.out.print("연락처>> ");
				String phone = sc.nextLine();
				System.out.print("이메일>> ");
				String mail = sc.nextLine();
				System.out.print("급여>> ");
				String salary = sc.nextLine();
				System.out.print("입사일자>> ");
				String hiredate = sc.nextLine(); // 2024-05-02
//				SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
				
				Employee emp = new Employee();
				emp.setName(name);
				emp.setMail(mail);
				emp.setPhone(phone);
				emp.setSalary(Integer.parseInt(salary));
				emp.setHiredate(hiredate);
				
				if(dao.insertEmp(emp)) {
					System.out.println("정상 등록");
				}else{
					System.out.println("예외 발생");
				};
				break;
			case 3 :
				System.out.print("사원번호>> ");
				String eno = sc.nextLine();
				System.out.print("이메일>> ");
				mail = sc.nextLine();
				System.out.print("급여>> ");
				salary = sc.nextLine();
				
				emp = new Employee();
				emp.setEmpNo(Integer.parseInt(eno));
				emp.setMail(mail);
				emp.setSalary(Integer.parseInt(salary));
				
				if(dao.updateEmp(emp)) {
					System.out.println("수정 완료");
				}else {
					System.out.println("처리 실패");
				}
				
				break;
			case 4 :
				System.out.print("삭제할 사원번호 : ");
				eno = sc.nextLine();
				
				if(dao.deleteEmp(Integer.parseInt(eno))) {
					System.out.println("삭제 완료");
				}else {
					System.out.println("삭제 실패");
				}
				break;
			case 5 :
				System.out.println("종료....");
				run = false;
			}
		}

		System.out.println("프로그램 종료");
	} // end main

}
