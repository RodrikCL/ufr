// Copyright (c) 2020, RP and contributors
// For license information, please see license.txt

frappe.ui.form.on('TestDoc', {
	 refresh: function(frm) {

            var valor1=0;
            valor1=cur_frm.doc.num1;
            var valor2=cur_frm.doc.num2;
            var valor3=cur_frm.doc.num3;

            data = {
                    labels: ["12am-3am", "3am-6pm", "6am-9am", "9am-12am",
                              "12pm-3pm", "3pm-6pm", "6pm-9pm", "9am-12am"
                            ],
                    datasets: [
                              {
                              name: "Some Data", type: "bar",
                              values: [25, 40, 30, 35, 8, 52, 17, -4]
                              }
          ]
                        }
        chart = new frappe.Chart("#chart", {  // or a DOM element,
                                                  // new Chart() in case of ES6 module with above usage
          title: "My Awesome Chart",
          data: data,
        type: 'line', // or 'bar', 'line', 'scatter', 'pie', 'percentage'
      height: 250,
    colors: ['#7cd6fd', '#743ee2']
      })


	 }
});
