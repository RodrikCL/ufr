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
					"name": "Crear Informe Certificacion",
				},
				{
					"type": "doctype",
					"name": "Crear Informe Actividades"
				}
								]
		},
		{
			"label": _("Registros de Tipos"),
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
				},
				{
					"type": "doctype",
					"name": "Tipo Anexo",
				},

			]
		},
		{
			"label": _("Matrices para Informar"),
			"items": [

				{
					"type": "doctype",
					"name": "Matrices Standard",
				},
				{
					"type": "doctype",
					"name": "Matrices Certificacion",
				},

			]
		},
		{
			"label": _("Test"),
			"items": [

				{
					"type": "doctype",
					"name": "TestDoc",
				},
				{
					"type": "doctype",
					"name": "Clientes",
				},
			]
		},
		{
			"label": _("Informes de Mantención"),
			"items": [
				{
					"type": "doctype",
					"name": "Clientes",
				},
				{
					"type": "doctype",
					"name": "",
				},
				{
					"type": "doctype",
					"name": "",
				},
			]
		},
	]
