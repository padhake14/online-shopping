$(function() {
	// solving the active menu problem
	switch (menu) {

	case 'About Us':
		$('#about').addClass('active');
		break;
	case 'Contact Us':
		$('#contact').addClass('active');
		break;
	case 'All Products':
		$('#listProducts').addClass('active');
		break;
	case 'Product Management':
		$('#manageProduct').addClass('active');
		break;
	case 'Shopping Cart':
		$('#userModel').addClass('active');
		break;
	default:
		if (menu == "Home")
			break;
		$('#listProducts').addClass('active');
		$('#a_' + menu).addClass('active');
		break;
	}

	
//data table
	
	
	var $table = $('#productListTable');

	// execute the below code only

	if ($table.length) {
		// console.log('inside the table');
		var jsonUrl = '';
		if (window.categoryId == '') {
			jsonUrl = '/json/data/all/products';
		} else {
			jsonUrl = '/json/data/category/'+ window.categoryId + '/products';
		}


		$table.DataTable({
			lengthMenu : [ [ 3, 5, 10, -1 ],
					[ '3 Records', '5 Records', '10 Records', 'ALL' ] ],
			pageLength : 5,
			ajax : {
				url : jsonUrl,
				dataSrc : ''
			},
			columns : [		
							{
								data : 'code',
								bSortable : false,
								mRender : function(data, type, row) {
			
									return '<img src="'+'/resources/images/'+data+ '.jpg" class="dataTableImg"/>';
			
								}
							},
							
							{
								data : 'name'
							},
							{
								data : 'brand'
							},
							{
								data : 'unitPrice',
								mRender : function(data, type, row) {
									return '&#8377; ' + data
								}
							},
							{
								data : 'quantity',
								mRender : function(data, type, row) {

									if (data < 1) {
										return '<span style="color:red">Out of Stock!</span>';
									}

									return data;

								}
							},
							{
								data : 'id',
								bSortable : false,
								mRender : function(data, type, row) {

									var str = '';
									str += '<a href="'
										+ '/show/'
										+ data
										+ '/product" class="btn btn-primary"><span class="glyphicon glyphicon-eye-open"></span></a> &#160;';
									if (row.quantity < 1) {
										str += '<a href="javascript:void(0)" class="btn btn-success disabled"><span class="glyphicon glyphicon-shopping-cart"></span></a>';
									} else {

										str += '<a href="'
												+ window.contextRoot
												+ '/cart/add/'
												+ data
												+ '/product" class="btn btn-success"><span class="glyphicon glyphicon-shopping-cart"></span></a>';
									}
									
								return str;
								}
							}
						]
			
		});
	}
	
	
	/*------*/
	/* for fading out the alert message after 3 seconds */
	$alert = $('.alert');
	if($alert.length) {
		setTimeout(function() {
	    	$alert.fadeOut('slow');
		   }, 3000
		);		
	}
	
	/*
	 * alert
	 */
	$('.switch input[type="checkbox"]').on('change',function(){
		var checkbox = $(this);
		var checked = checkbox.prop('checked');
		var dMsg = (checked)? 'You want to activate the product?':
								'You want to deactivate the product?';
		var value = checkbox.prop('value');
		bootbox.confirm({
			size:'medium',
			title:'Product Activation & Deactivation',
			message: dMsg,
			callback: function(confirmed){
				if(confirmed){
					console.log(value);
					bootbox.alert({
						size:'medium',
						title:'Product Activation & Deactivation',
						message:'do you perform operation product 4' + value
					});
				}
				else{
					checkbox.prop('checked',!checked);
				}
			}
		});
	});
	
	/*
	 * data table for admin
	 */
	
	var $adminProductsTable = $('#adminproductsTable');

	// execute the below code only

	if ($adminProductsTable.length) {
		// console.log('inside the table');
		var jsonUrl = '/json/data/admin/all/products';
		

		$adminProductsTable.DataTable({
			lengthMenu : [ [ 10, 30, 50, -1 ],
					[ '10 Records', '30 Records', '50 Records', 'ALL' ] ],
			pageLength : 30,
			ajax : {
				url : jsonUrl,
				dataSrc : ''
			},
			columns : [		
							{
								data : 'id'
							},
							{
								data : 'code',
								bSortable : false,
								mRender : function(data, type, row) {
			
									return '<img src="'+'/resources/images/'+data+ '.jpg" class="dataTableImg"/>';
			
								}
							},
							
							{
								data : 'name'
							},
							{
								data : 'brand'
							},
							
							{
								data : 'quantity',
								mRender : function(data, type, row) {

									if (data < 1) {
										return '<span style="color:red">Out of Stock!</span>';
									}

									return data;

								}
							},
							{
								data : 'unitPrice',
								mRender : function(data, type, row) {
									return '&#8377; ' + data
								}
							},
							{
								data : 'active',
								bSortable : false,
								mRender : function(data, type, row) {
									var str = '';
									if(data) {											
										str += '<label class="switch"> <input type="checkbox" value="'+row.id+'" checked="checked">  <div class="slider round"> </div></label>';
										
									}else {
										str += '<label class="switch"> <input type="checkbox" value="'+row.id+'">  <div class="slider round"> </div></label>';
									}
									
									return str;
								}
							},
							{
								data : 'id',
								bSortable : false,
								mRender : function(data, type, row) {

									var str = '';
									str += '<a href="'+ '/manage/'+ data + '/product" class="btn btn-primary"><span class="glyphicon glyphicon-pencil"></span></a> &#160;';

									return str;
								}
							}		
						],
						initComplete: function () {
							var api = this.api();
							api.$('.switch input[type="checkbox"]').on('change',function(){
								var checkbox = $(this);
								var checked = checkbox.prop('checked');
								var dMsg = (checked)? 'You want to activate the product?':
														'You want to deactivate the product?';
								var value = checkbox.prop('value');
								bootbox.confirm({
									size:'medium',
									title:'Product Activation & Deactivation',
									message: dMsg,
									callback: function(confirmed){
										if(confirmed){
											var activationUrl= '/manage/product/'+ value +'/activation';
											$.post(activationUrl,function(data){
												bootbox.alert({
													size:'medium',
													title:'Product Activation & Deactivation',
													message:data
												});
											});
											
										}
										else{
											checkbox.prop('checked',!checked);
										}
									}
								});
							});
							
						}
			
		});
	}
	
	
	///*****************************************
	// validating the product form element	
	// fetch the form element
	$categoryForm = $('#categoryForm');
	
	if($categoryForm.length) {
		
		$categoryForm.validate({			
				rules: {
					name: {
						required: true,
						minlength: 3
					},
					description: {
						required: true,
						minlength: 3					
					}				
				},
				messages: {					
					name: {
						required: 'Please enter product name!',
						minlength: 'Please enter atleast five characters'
					},
					description: {
						required: 'Please enter product name!',
						minlength: 'Please enter atleast five characters'
					}					
				},
				errorElement : "em",
				errorPlacement : function(error, element) {
					error.addClass('help-block');
					error.insertAfter(element);
				}				
			}
		
		);
		
	}
		
});