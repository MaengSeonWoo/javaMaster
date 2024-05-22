package com.yedam.common;

import java.util.List;
import java.util.Map;
import java.util.Set;

import com.yedam.dao.EmpDAO;
import com.yedam.vo.EmpVO;

public class AppTest {
	public static void main(String[] args) {

		EmpVO evo = new EmpVO();
		evo.setEmpName("testname");
		evo.setEmpPhone("02-1010-2020");
		evo.setHireDate("2020-01-05");
		
		evo.setEmail("test44@email.com");
		evo.setSalary(4600);
		evo.setEmpNo(43);

		EmpDAO edao = new EmpDAO();
		Map<String, Integer> resultMap = edao.getCntPerDept();
		Set<String> keyset = resultMap.keySet();
		for(String key : keyset) {
			System.out.println("key : " + key + ", val : " + resultMap.get(key));
		}
	}
}
