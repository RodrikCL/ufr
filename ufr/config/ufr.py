from __future__ import unicode_literals
from frappe import _

def get_data():
	return [
		{
			"label": _("Asistente para Informes"),
			"items": [
				{
					"type": "doctype",
					"name": "Crear Informe Standard",
				},
				{
					"type": "doctype",
					"name": "Crear Informe Certificacion"
				},
				{
					"type": "doctype",
					"name": "Crear Informe Actividades"
				}
			]
		},
		{
			"label": _("Registros Auxiliares"),
			"items": [
				{
					"type": "doctype",
					"name": "Objetivos Servicio",
				},
				{
					"type": "doctype",
					"name": "Tipo Servicio",
				},
				{
					"type": "doctype",
					"name": "Tipo Tecnologia",
				},
				{
					"type": "doctype",
					"name": "Tipo Certificacion",
				}
							
				
			]
		},
		{
			"label": _("Matrices"),
			"items": [
				{
					"type": "doctype",
					"name": "Matriz Objetivos",
				},
				{
					"type": "doctype",
					"name": "Matrices Standard",
				},
				{
					"type": "doctype",
					"name": "Matrices Certificacion",
				},
				
				
				
				
			]
		}
	]