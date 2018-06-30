from __future__ import unicode_literals
from frappe import _

def get_data():
	return [
		{
			"label": _("Informes"),
			"items": [
				{
					"type": "doctype",
					"name": "Informe de Servicio",
				}
			]
		},
		{
			"label": _("Maestro de Datos"),
			"items": [
				{
					"type": "doctype",
					"name": "Objetivos Servicio",
				},
				{
					"type": "doctype",
					"name": "Matrices",
				},
				{
					"type": "doctype",
					"name": "Tipo Servicio",
				},
				{
					"type": "doctype",
					"name": "Tipo Tecnologia",
				}
				
				
				
			]
		}
	]