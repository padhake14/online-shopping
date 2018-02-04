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

	// code for jquery data table

	var products = [

	[ '1', 'ABC' ], [ '2', 'DEF' ], [ '3', 'ABf' ], [ '4', 'ABD' ],
			[ '5', 'ABR' ], [ '6', 'ABE' ], [ '7', 'ABG' ], [ '8', 'ABN' ]

	];

	var $table = $('#productListTable');

	// execute the below code only

	if ($table.length) {
		// console.log('inside the table');

		$table.DataTable({
			lengthMenu : [ [ 3, 5, 10, -1 ],
					[ '3 Records', '5 Records', '10 Records', 'ALL' ] ],
			pageLength : 5,
			data : products
		});
	}

});