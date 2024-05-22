<%@page import="com.yedam.vo.BoardVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<h3>수정화면</h3>
<%
  BoardVO vo = (BoardVO) request.getAttribute("bno");
  String logId = (String) session.getAttribute("logId");
%>
<form action="updateBoard.do" method = "post">
	<table class="table">
		<tr>
			<th>글번호</th>
			<td><%=vo.getBoardNo()%></td>
		</tr>
		<tr>
			<th>제목</th>
			<td><input type="text" name="title" value="<%=vo.getTitle()%>"></td>
		</tr>
		<tr>
			<th>내용</th>
			<td><textarea name="content" cols="30" rows="4"><%=vo.getContent()%></textarea></td>
		</tr>
		<tr>
			<th>작성자</th>
			<td><%=vo.getWriter()%></td>
		</tr>
		<tr align="center">
			<td colspan="2">
				<%if(vo.getWriter().equals(logId)) {%>
				<input class="btn btn-primary"  type="submit">
				<%} else { %>
				<input class="btn btn-primary" disabled type="submit">
				<%} %>
			</td>
		</tr>
	</table>
	<input type="hidden" name="bno" value="<%=vo.getBoardNo()%>">
	<input type="hidden" name="page" value="${page }">
	<input type = "hidden" name = "searchCondition" value ="${searchCondition }">
	<input type = "hidden" name = "keyword" value ="${keyword }">
</form>

