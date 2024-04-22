package co.yedam;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class MemberTest {

	public static void main(String[] args) {
		try {
			Class.forName("oracle.jdbc.driver.OracleDriver");
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return;
		}
		
		String url = "jdbc:oracle:thin:@localhost:1521:xe";
		try {
			Connection conn = DriverManager.getConnection(url, "jsp", "jsp");
			
			String sql1 = "select * from member";
			String sql2 = "insert into member(member_no, member_name, member_phone, member_birth, member_gender)";
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

}
