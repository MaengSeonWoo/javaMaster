package com.yedam.dao;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.yedam.common.DAO;
import com.yedam.vo.EmpVO;

public class EmpDAO extends DAO {

	public List<Map<String, Object>> empList() {
		List<Map<String, Object>> list = //
				new ArrayList<Map<String, Object>>();
		conn();
		try {
			psmt = conn.prepareStatement("select * from emp order by emp_no");
			rs = psmt.executeQuery();
			while (rs.next()) {
				Map<String, Object> map = new HashMap<>();
				map.put("사원번호", rs.getString("emp_no"));
				map.put("사원명", rs.getString("emp_name"));
				map.put("연락처", rs.getString("emp_phone"));
				map.put("이메일", rs.getString("email"));

				list.add(map);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disCon();
		}

		return list;
	}

	// 목록 List<EmpVO> selectList();
	public List<EmpVO> selectList() {
		List<EmpVO> list = new ArrayList<>();
		conn();
		try {
			psmt = conn.prepareStatement("select * from emp order by emp_no");
			rs = psmt.executeQuery();
			while (rs.next()) {
				EmpVO evo = new EmpVO();
				evo.setEmail(rs.getString("email"));
				evo.setEmpName(rs.getString("emp_name"));
				evo.setEmpNo(rs.getInt("emp_no"));
				evo.setEmpPhone(rs.getString("emp_phone"));
				evo.setHireDate(rs.getString("hire_date"));
				evo.setSalary(rs.getInt("salary"));

				list.add(evo);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disCon();
		}
		return list;
	}// end of selectList.

	public EmpVO selectEmp(int empNo) {
		conn();
		try {
			psmt = conn.prepareStatement("select * from emp where emp_no = ?");
			psmt.setInt(1, empNo);
			rs = psmt.executeQuery();
			if (rs.next()) {
				EmpVO evo = new EmpVO();
				evo.setEmail(rs.getString("email"));
				evo.setEmpName(rs.getString("emp_name"));
				evo.setEmpNo(rs.getInt("emp_no"));
				evo.setEmpPhone(rs.getString("emp_phone"));
				evo.setHireDate(rs.getString("hire_date"));
				evo.setSalary(rs.getInt("salary"));
				return evo;
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disCon();
		}
		return null;
	}

	// 등록 boolean insertEmp(EmpVO evo);
	public boolean insertEmp(EmpVO evo) {
		conn();
		String sql = "insert into emp (emp_no, emp_name, emp_phone, email, salary, hire_date) "
				+ "values(?, ?, ?, ?, ?, ?)";
		String seqSql = "select emp_seq.nextval from dual ";
		int seq = 0;
		try {
			psmt = conn.prepareStatement(seqSql);
			rs = psmt.executeQuery();
			if (rs.next()) {
				seq = rs.getInt(1);
				evo.setEmpNo(seq); // 매개변수의 evo에 empNo 저장.
			}

			psmt = conn.prepareStatement(sql);
			psmt.setString(2, evo.getEmpName());
			psmt.setString(3, evo.getEmpPhone());
			psmt.setString(4, evo.getEmail());
			psmt.setInt(5, evo.getSalary());
			psmt.setString(6, evo.getHireDate());
			psmt.setInt(1, seq);

			int r = psmt.executeUpdate();
			if (r > 0)
				return true;
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disCon();
		}
		return false;
	}

	// 수정 boolean updateEmp(EmpVO evo); // 이메일, 급여 변경.
	public boolean updateEmp(EmpVO evo) {
		conn();
		String sql = "update emp";//
		sql += "      set email=?";//
		sql += "      ,salary=?";//
		sql += "      where emp_no=?";
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, evo.getEmail());
			psmt.setInt(2, evo.getSalary());
			psmt.setInt(3, evo.getEmpNo());
			int r = psmt.executeUpdate();
			if (r > 0)
				return true;
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disCon();
		}
		return false;
	}

	// 삭제 boolean deleteEmp(int empNo); //
	public boolean deleteEmp(int empNo) {
		conn();
		String sql = "delete from emp";//
		sql += "      where emp_no=?";
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setInt(1, empNo);
			int r = psmt.executeUpdate();
			if (r > 0)
				return true;
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disCon();
		}
		return false;
	}
	
	// 부서별 인원 현황. {부서 : 인원현황}.
	public Map<String, Integer> getCntPerDept(){
		conn();
		Map<String, Integer> map = new HashMap<>();
		String sql = "select d.department_name "
				+ ",count(1) as cnt \r\n"
				+ "from hr.employees e \r\n"
				+ "join hr.departments d \r\n"
				+ "on e.department_id = d.department_id \r\n"
				+ "group by d.department_name";
		try {
			psmt = conn.prepareStatement(sql);
			rs = psmt.executeQuery();
			while(rs.next()) {
				map.put(rs.getString("department_name"), rs.getInt("cnt"));
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		finally{
			disCon();
		}
		return map;
}		
		// datatable 생성예제.
		public List<List<String>> getDataTable(){
			List<List<String>> list = new ArrayList<List<String>>();
			conn();

			try {
				psmt = conn.prepareStatement("select e.* \r\n "
						+ "from hr.employees e");
				rs = psmt.executeQuery();
				while(rs.next()) {
					List<String> row = new ArrayList<>();
					row.add(rs.getString("employee_id"));
					row.add(rs.getString("first_name"));
					row.add(rs.getString("email"));
					row.add(rs.getString("phone_number"));
					row.add(rs.getString("salary"));
					
					list.add(row);
				}
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}finally{
				disCon();
			}
			return list;
	   }
		// jsp.employeess 테이블의 사원번호값을 찾아서 한건 삭제하는 기능 추가.
		public boolean deleteEmployee(int eno) {
			conn();
			String sql = "delete from employees ";//
			sql += "      where employee_id=?";
			try {
				psmt = conn.prepareStatement(sql);
				psmt.setInt(1, eno);
				int r = psmt.executeUpdate();
				if (r > 0)
					return true;
			} catch (SQLException e) {
				e.printStackTrace();
			} finally {
				disCon();
			}
			return false;
		}
}

