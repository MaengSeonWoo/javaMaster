<%@page import="com.yedam.vo.BoardVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%
BoardVO vo = (BoardVO) request.getAttribute("bno");
String logId = (String) session.getAttribute("logId");
%>
<form name = "myFrm" action="deleteBoard.do">
	<table class="table">
		<tr>
			<th>글번호</th>
			<td><%=vo.getBoardNo()%></td>
		</tr>
		<tr>
			<th>제목</th>
			<td><%=vo.getTitle()%></td>
		</tr>
		<tr>
			<th>내용</th>
			<td><%=vo.getContent()%></td>
		</tr>
		<tr>
			<th>작성자</th>
			<td><%=vo.getWriter()%></td>
		</tr>
		<tr align="center">
			<td colspan="2"><button class="btn btn-danger" type="submit">삭제</button></td>
		</tr>
	</table>
	<input type="hidden" name="bno" value="<%=vo.getBoardNo()%>">
</form>
<script>
	const logid = "<%=logId %>";
	const writer = "<%=vo.getWriter()%>";
	
	document.forms.myFrm.addEventListener('submit', function(e) {
		e.preventDefault();
		if(logid != writer) {
			alert("권한이 없습니다람쥐");
			return;
		}
		this.submit();
	});
</script>

