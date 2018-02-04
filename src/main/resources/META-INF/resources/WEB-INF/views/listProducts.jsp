<div class="container">

	<div class="row">


		<!-- Would be to display sidebar -->
		<div class="col-md-3">

			<%@include file="./shared/sidebar.jsp"%>

		</div>

		<!-- to display the actual products -->
		<div class="col-md-9">

			<!-- Added breadcrumb component -->
			<div class="row">

				<div class="col-lg-12">

				
					<c:if test="${userClickAllProducts == true}">

						<script>
							window.categoryId = '';
						</script>

						<nav aria-label="breadcrumb">
							<ol class="breadcrumb">
								<li class="breadcrumb-item"><a href="/home">Home</a></li>
								<li class="breadcrumb-item active" aria-current="page">All Products</li>
							</ol>
						</nav>

					</c:if>
					
					
					<c:if test="${userClickCategoryProducts == true}">

						<script>
						window.categoryId = '${category.id}';
						</script>

						<nav aria-label="breadcrumb">
							<ol class="breadcrumb">
								<li class="breadcrumb-item"><a href="/home">Home</a></li>
								<li class="breadcrumb-item"><a href="/home">Category</a></li>
								<li class="breadcrumb-item active" aria-current="page">${category.name}</li>
							</ol>
						</nav>

					</c:if>

					


				</div>


			</div>

					<div class="row">
			
				<div class="col-xs-12">
				
					
					<table id="productListTable" class="table table-striped table-borderd">
					
					
						<thead>
						
							<tr>
								<th>Id</th>
								<th>Name</th>
								
							
							</tr>
						
						</thead>
					

<!-- 						<tfoot> -->
						
<!-- 							<tr> -->
<!-- 								<th></th> -->
<!-- 								<th>Name</th> -->
<!-- 								<th>Brand</th> -->
<!-- 								<th>Price</th> -->
<!-- 								<th>Qty. Available</th> -->
<!-- 								<th></th> -->
							
<!-- 							</tr> -->
						
<!-- 						</tfoot> -->
					</table>
				
				</div>
			
			</div>



		</div>



	</div>






</div>