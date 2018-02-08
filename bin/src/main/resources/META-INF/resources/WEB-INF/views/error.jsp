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
			<div class="jumbotron">

				<h1>${errorTitle}</h1>
				<hr />

				<blockquote style="word-wrap: break-word">

					${errorDescription}
				</blockquote>
			</div>
			<!-- Footer -->
			<%@include file="./shared/footer.jsp"%>

		</div>
		<!-- Bootstrap core JavaScript -->

		
</body>

</html>
