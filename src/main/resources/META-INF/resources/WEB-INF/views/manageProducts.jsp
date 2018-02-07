<%@taglib prefix="sf" uri="http://www.springframework.org/tags/form"%>


<div class="container">

	<div class="row">
		<c:if test="${not empty message}">

			<div class="col-xs-12">
				<div class="alert alert-sucess alert-dismissible">

					<button type="button" class="close" data-dismiss="alert">&times;</button>
					${message}
				</div>
			</div>

		</c:if>


		<div class="col-md-offset-2 col-md-8">
			<div class="panel panel-primary">

				<div class="panel-heading">

					<h4>Product Management</h4>

				</div>

				<div class="panel-body">
					<!-- FORM ELEMENT -->

					<sf:form class="form-horizontal" modelAttribute="product"
						action="/manage/products" method="POST">
						<div class="form-group">
							<label class="control-label col-md-4" for="name">Enter
								Product Name</label>
							<div class="col-md-8">
								<sf:input type="text" path="name" id="name" class="form-control"
									placeholder="Product Name" />
								<sf:errors path="name" cssClass="help-block" element="em"/> 
								
							</div>
						</div>
						<div class="form-group">
							<label class="control-label col-md-4" for="brand">Enter
								Product brand</label>
							<div class="col-md-8">
								<sf:input type="text" path="brand" id="brand"
									class="form-control" placeholder="Product Name" />
								<sf:errors path="brand" cssClass="help-block" element="em"/> 
							</div>
						</div>


						<div class="form-group">
							<label class="control-label col-md-4" for="description">Enter
								Description:</label>
							<div class="col-md-8">
								<sf:textarea type="text" path="description" id="description"
									class="form-control" placeholder="Product Name" />
								<sf:errors path="description" cssClass="help-block" element="em"/> 
							</div>
						</div>

						<div class="form-group">
							<label class="control-label col-md-4" for="unitPrice">Enter
								Unit Price</label>
							<div class="col-md-8">
								<sf:input type="text" path="unitPrice" id="unitPrice"
									class="form-control" placeholder="Product price" />
									<sf:errors path="unitPrice" cssClass="help-block" element="em"/>
							</div>
						</div>
						<div class="form-group">
							<label class="control-label col-md-4" for="quantity">Enter
								Unit quantity</label>
							<div class="col-md-8">
								<sf:input type="text" path="quantity" id="quantity"
									class="form-control" placeholder="Product quantity" />
							
									
							</div>
						</div>

						<div class="form-group">
							<label class="control-label col-md-4" for="categoryId">select
								catgeory </label>
							<div class="col-md-8">
								<sf:select path="categoryId" items="${categories}"
									itemLabel="name" itemValue="id" class="form-control" />


							</div>
						</div>

						<div class="form-group">

							<div class="co-md-offset-4 col-md-8">
								<input type="submit" name="submit" id="submit" value="submit"
									class="btn btn-primary" />
								<!-- Hidden field -->
								<sf:hidden path="id" />
								<sf:hidden path="code" />
								<sf:hidden path="supplierId" />
								<sf:hidden path="active" />
								<sf:hidden path="purchases" />
								<sf:hidden path="views" />

							</div>
						</div>


					</sf:form>

				</div>

			</div>

		</div>
	</div>
</div>