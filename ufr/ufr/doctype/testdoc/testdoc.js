frappe.ui.form.on("TestDoc", {
refresh: function(frm) {

$.getScript("https://cdn.jsdelivr.net/npm/frappe-charts@1.1.0/dist/frappe-charts.min.iife.js", function(){
let chart = new frappe.Chart( "#chart", {
data: {
labels: ["Qsa%","Qsm%","Qsb%"],

  datasets: [
    {
      name: "Severidad", chartType: 'pie',
      values: [25, 45, 30]
    }
  ],

  yMarkers: [{ label: "Marker", value: 70,
  options: { labelPos: 'left' }}],
  yRegions: [{ label: "Region", start: -10, end: 50,
  options: { labelPos: 'right' }}]
},

title: "Estadisticas",
type: 'pie',
height: 300,
colors: ['red', 'green', 'blue'],

tooltipOptions: {
formatTooltipX: d => (d + '').toUpperCase(),
formatTooltipY: d => d + ' pts',
}
});

});
}
});
