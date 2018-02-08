<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="utf-8">
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="description" content="">
<meta name="author" content="">

<title>Online Shopping - ${title}</title>
<script>
	window.menu = '${title}';
</script>

<!-- Bootstrap core CSS -->
<link rel="stylesheet" href="/resources/css/bootstrap.min.css">
<link rel="stylesheet" href="/resources/css/bootstrap-readable-theme.css">
<link rel="stylesheet" href="/resources/css/dataTables.bootstrap.css">
<!-- Custom styles for this template -->
<link rel="stylesheet" href="/resources/css/style.css">

</head>

<body>
	<div class="wrapper">
		<!-- Navigation -->
		<%@include file="./shared/navbar.jsp"%>

		<!-- Page Content -->
		<div class="content">
			<c:if test="${userClickHome == true}">
				<%@include file="home.jsp"%>
			</c:if>

			<c:if test="${userClickAbout == true}">
				<%@include file="about.jsp"%>
			</c:if>

			<c:if
				test="${userClickAllProducts == true or userClickCategoryProducts == true}">
				<%@include file="listProducts.jsp"%>
			</c:if>
			<c:if
				test="${userClickShowProduct == true}">
				<%@include file="singleProduct.jsp"%>
			</c:if>
			
				<c:if
				test="${userClickManageProduct == true}">
				<%@include file="manageProducts.jsp"%>
			</c:if>

		</div>
		<!-- Footer -->
		<%@include file="./shared/footer.jsp"%>

	</div>
	<!-- Bootstrap core JavaScript -->
			<script src="/resources/js/jquery.js"></script>

		<script src="/resources/js/jquery.validate.js"></script>

		<!-- Bootstrap Core JavaScript -->
		<script src="/resources/js/bootstrap.min.js"></script>
		
		<!-- DataTable Plugin -->
		<script src="/resources/js/jquery.dataTables.js"></script>
		
		<!-- DataTable Bootstrap Script -->
		<script src="/resources/js/dataTables.bootstrap.js"></script>
		
		<!-- DataTable Bootstrap Script -->
		<script src="/resources/js/bootbox.min.js"></script>
		
		<script src="/resources/js/app.js"></script>
	
	


</body>

</html>
