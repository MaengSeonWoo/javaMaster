package co.yedam;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class EmpDAO {
	Connection conn;
	PreparedStatement psmt;
	ResultSet rs;
	
	// DB 접속 후 Connection
	private void getConn() {
		String url = "jdbc:oracle:thin:@localhost:1521:xe";
		try {
			Class.forName("oracle.jdbc.driver.OracleDriver");
			conn = DriverManager.getConnection(url, "jsp", "jsp");
		} catch (Exception e) {
			e.printStackTrace();
			return;
		}
		
	} // end of getConn()
	
	// 사원목록 기능
	// void
	List<Employee> empList() {
		getConn();
		List<Employee> list = new ArrayList<>();
		String sql = "select * from emp";
		try {
			psmt = conn.prepareStatement(sql);
			rs = psmt.executeQuery();
//			System.out.println("사원번호 사원명  연락처          급여");
//			System.out.println("-----------------------------------");
			while(rs.next()) {
				Employee emp = new Employee();
				emp.setEmpNo(rs.getInt("emp_no"));
				emp.setName(rs.getString("emp_name"));
				emp.setMail(rs.getString("email"));
				emp.setPhone(rs.getString("emp_phone"));
				emp.setSalary(rs.getInt("salary"));
				emp.setHiredate(rs.getString("hiredate"));
				list.add(emp);
//				System.out.println(rs.geㄱㄴtInt("emp_no") + "  " + rs.getString("emp_name") 
//				+ rs.getString("emp_phone") + " " + rs.getInt("salary"));				
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return list;
	}
	// 사원등록 기능
	boolean insertEmp(Employee emp) {
		getConn();
		String sql = "INSERT INTO emp(emp_no, emp_name, emp_phone, email, salary, hire_date)\r\n"
				+ "VALUES(emp_seq.NEXTVAL, ?, ?, ?, ?, ?)";
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, emp.getName());
			psmt.setString(2, emp.getPhone());
			psmt.setString(3, emp.getMail());
			psmt.setInt(4, emp.getSalary());
			psmt.setString(5, emp.getHiredate());
			
			int r = psmt.executeUpdate();
			if(r > 0) { // 처리된 건수 반환
				return true;
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return false; // 예외발생하거나 처리된 건수가 0일 경우
	}
	// 사원 정보를 수정하는 기능
	boolean updateEmp(Employee emp) {
		getConn();
		String sql = "update emp ";
		sql += "      set salary = ?";
		sql += "      ,email = ?";
		sql += "      where emp_no = ?";
		
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setInt(1, emp.getSalary());
			psmt.setString(2, emp.getMail());
			psmt.setInt(3, emp.getEmpNo());
			
			int r = psmt.executeUpdate();
			if( r > 0 ) {
				return true;
			}
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return false;
	}
	
	boolean deleteEmp(int eno) {
		getConn();
		String sql = "DELETE FROM emp ";
			   sql += "WHERE emp_no = ?";
			   
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setInt(1, eno);
			
			int r = psmt.executeUpdate();
			if( r > 0 ) {
				return true;
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return false;
	}
}
