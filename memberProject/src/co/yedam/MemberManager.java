package co.yedam;

import java.util.List;
import java.util.Scanner;

public class MemberManager {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		boolean run = true;
		MemberDAO dao = new MemberDAO();
		
		while(run) {
			System.out.println("1.회원목록 2.회원등록 3.회원정보 수정 4.회원정보 삭제 5.종료");
			System.out.print("선택> ");
			int choice = Integer.parseInt(sc.nextLine());
			
			switch(choice) {
			case 1 :
				List<Member> members = dao.memberList();
				
				System.out.println("회원번호   회원명   회원연락처   회원생일  성별");
				System.out.println("----------------------------------------");
				for(Member member : members) {
					System.out.println(member.toString());
				}
				break;
			case 2 :
				System.out.print("회원명>> ");
				String name = sc.nextLine();
				System.out.print("연락처>> ");
				String phone = sc.nextLine();
				System.out.print("생일>> ");
				String birth = sc.nextLine();
				System.out.print("성별>> ");
				String gender = sc.nextLine();
				
				Member mem = new Member();
				mem.setName(name);
				mem.setPhone(phone);
				mem.setBirth(birth);
				mem.setGender(gender);
				
				if(dao.insertMember(mem)) {
					System.out.println("정상적으로 등록되었습니다");
				}else {
					System.out.println("정상적으로 등록되지 않았습니다");
				};
				break;
			case 3 :
				System.out.print("수정할 회원번호>> ");
				String mno = sc.nextLine();
				System.out.print("수정할 연락처>> ");
				phone = sc.nextLine();
				
				mem = new Member();
				mem.setMemNo(Integer.parseInt(mno));
				mem.setPhone(phone);
				
				if(dao.updateMember(mem)) {
					System.out.println("수정 완료");
				}else {
					System.out.println("수정 실패");
				}
				break;
			case 4 :
				System.out.print("삭제할 회원번호>> ");
				mno = sc.nextLine();
				
				if(dao.deleteMember(Integer.parseInt(mno))) {
					System.out.println("삭제 완료");
				}else
					System.out.println("삭제 실패");
				break;
			case 5 :
				run = false;
			}
		}
		System.out.println("프로그램 종료");
	}

}
