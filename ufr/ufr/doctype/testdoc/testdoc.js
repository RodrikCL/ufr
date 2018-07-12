frappe.ui.form.on("TestDoc", {
refresh: function(frm) {

$.getScript("https://cdn.jsdelivr.net/npm/frappe-charts@1.1.0/dist/frappe-charts.min.iife.js", function(){
	let chart = new frappe.Chart( "#chart", {
    data: {
      labels: ["uno", "dos", "tres", "cuatro",
      "cinco", "seis", "siete", "ocho"],

      datasets: [
        {
          name: "Estadistica 1", chartType: 'pie',
          values: [25, 40, 30, 35, 8, 52, 17, -4]
        },
        {
          name: "Estadistica 2", chartType: 'pie',
          values: [25, 50, -10, 15, 18, 32, 27, 14]
        },
        {
          name: "Estadistica 3", chartType: 'pie',
          values: [15, 20, -3, -15, 58, 12, -17, 37]
        }
      ],

      yMarkers: [{ label: "Marker", value: 70,
        options: { labelPos: 'left' }}],
      yRegions: [{ label: "Region", start: -10, end: 50,
        options: { labelPos: 'right' }}]
    },

    title: "My Awesome Chart",
    type: 'pie', // or 'bar', 'line', 'pie', 'percentage'
    height: 300,
    colors: ['purple', '#ffa3ef', 'light-blue'],

    tooltipOptions: {
      formatTooltipX: d => (d + '').toUpperCase(),
      formatTooltipY: d => d + ' pts',
    }
  });
	});
}});
