frappe.pages['test'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Test Charts',
		single_column: true
	});
}