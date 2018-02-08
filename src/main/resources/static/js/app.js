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
	$('.switch input[type="checkbox"]').on('change',function()){
		var checkbox = $(this);
		var checked = checkbox.prop('checked');
		var gMgg = (checked)? 'You want to activate the product?':
								'You want to deactivate the product?';
		var value = checkbox.prop('value');
		bootbox.confirm({
			size:'medium';
			title:'Product Activation & Deactivation';
			message:'dMsg';
			callback: function(confirmed){
				if(confirmed){
					console.log(value);
					bootbox.alert({
						size:'medium';
						title:'Product Activation & Deactivation';
						message:'perform operation' + value
					})
				}
				else{
					checkbox.prop('checked',!checked);
				}
			}
		
	});
	
});