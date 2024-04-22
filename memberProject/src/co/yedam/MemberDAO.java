package co.yedam;

import java.sql.*;
import java.util.*;

public class MemberDAO {
	Connection conn;
	PreparedStatement psmt;
	ResultSet rs;
	
	private void getConn() {
		String url = "jdbc:oracle:thin:@localhost:1521:xe";
		try {
			Class.forName("oracle.jdbc.driver.OracleDriver");
			conn = DriverManager.getConnection(url, "jsp", "jsp");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return;
		}
	}
	
	List<Member> memberList(){
		getConn();
		List<Member> list = new ArrayList<>();
		String sql = "select * from member";
		try {
			psmt = conn.prepareStatement(sql);
			rs = psmt.executeQuery();
			
			while(rs.next()) {
				Member mem = new Member();
				mem.setMemNo(rs.getInt("member_no"));
				mem.setName(rs.getString("member_name"));
				mem.setPhone(rs.getString("member_phone"));
				mem.setBirth(rs.getString("member_birth"));
				mem.setGender(rs.getString("member_gender"));
				list.add(mem);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return list;
	}
	
	// 회원등록 기능
	boolean insertMember(Member member) {
		getConn();
		String sql = "INSERT INTO member(member_no, member_name, member_phone, member_birth, member_gender)\r\n"
				+ "VALUES(member_seq.NEXTVAL, ?, ?, ?, ?)";
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, member.getName());
			psmt.setString(2, member.getPhone());
			psmt.setString(3, member.getBirth());
			psmt.setString(4, member.getGender());
			
			int r = psmt.executeUpdate();
			if(r > 0) {
				return true;
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return false;
	}
	// 회원정보 수정
	boolean updateMember(Member member) {
		getConn();
		String sql = "UPDATE member ";
		sql += "      set member_phone = ?";
		sql += "      where member_no = ?";
		
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, member.getPhone());
			psmt.setInt(2, member.getMemNo());
			
			int r = psmt.executeUpdate();
			if(r > 0) {
				return true;
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return false;
	}
	boolean deleteMember(int mno) {
		getConn();
		String sql = "DELETE FROM member ";
		 sql += "WHERE member_no = ?";
		 
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setInt(1, mno);
			
			int r = psmt.executeUpdate();
			if(r > 0) {
				return true;
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return false;
	}
}
