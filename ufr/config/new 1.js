//CAPTURA DATOS DESDE TABLA OBJETIVOS  GENERALES
// Y LAS ESCRIBE EN OBJETIVOS SERVICIO
cur_frm.add_fetch("id","objetivo","objetivo");
cur_frm.add_fetch("id","area","area");

//CAPTURA DATOS DESDE TABLA EMPLEADOS Y LAS ESCRIBE EN EJECUTANTES
cur_frm.add_fetch("id_ejec","employee_name","employee_name");
cur_frm.add_fetch("id_ejec","company_email","company_email");


//CAPTURA DATOS DESDE TABLA NO CONFORMIDADES Y LAS ESCRIBE EN HALLAZGOS
cur_frm.add_fetch("tipo_code","servicio","servicio");
cur_frm.add_fetch("tipo_code","tecnologia","tecnologia");
cur_frm.add_fetch("tipo_code","ex_recomenda","ex_recomenda");
cur_frm.add_fetch("tipo_code","descripcion","descripcion");
cur_frm.add_fetch("tipo_code","severidad","severidad");
cur_frm.add_fetch("tipo_code","complej1","complej1");
cur_frm.add_fetch("tipo_code","ex_conclusion","ex_conclusion");

//FILTRADO DE PLANTILLAS POR TIPO DE SERVICIO Y TECNOLOGIA
cur_frm.fields_dict["no_conformidades"].grid.get_field("tipo_code").get_query = function(doc){

       return {
               filters:{
                       "servicio": cur_frm.doc.filtrar_por_servicio,
                       "tecnologia": cur_frm.doc.filtrar_por_tecnologia
               }
       }
}



//FILTRADO DE ORDENES DE CLIENTE
cur_frm.fields_dict.oc_cliente.get_query = function(doc) {
	return {
		filters: {
			customer: doc.customer
		}
	}
};
//DETERMINAR LAS ESTADÍSTICAS DEL SERVICIO
frappe.ui.form.on("INF_Crear Informe", "boton_e", function(frm)
		{

					var salta=0,smedia=0,sbaja=0,calta=0,cmedia=0,cbaja=0,num_reg=0;
					var psalta=0,psmedia=0,psbaja=0,pcalta=0,pcmedia=0,pcbaja=0;
//calcula la cantidad de no conformidades
					num_reg=cur_frm.doc.no_conformidades.length;
//cuenta las no conformidades 
					for (i = 0; i < num_reg; i++)
												{
													 if(cur_frm.doc.no_conformidades[i].severidad=="Alta"){salta=salta+1;}
												else if(cur_frm.doc.no_conformidades[i].severidad=="Media"){smedia=smedia+1;}
												else if(cur_frm.doc.no_conformidades[i].severidad=="Baja"){sbaja=sbaja+1;}
													 if(cur_frm.doc.no_conformidades[i].complej1=="Alta"){calta=calta+1;}
												else if(cur_frm.doc.no_conformidades[i].complej1=="Media"){cmedia=cmedia+1;}
												else if(cur_frm.doc.no_conformidades[i].complej1=="Baja"){cbaja=cbaja+1;}
													console.log(i);
												};
//CALCULA PORCENTAJES DE SERVERIDAD
					psalta=salta/num_reg*100;		 //% severidad alta
					psmedia=smedia/num_reg*100;      //% severidad media
					psbaja=sbaja/num_reg*100;		 //% severidad baja
//AJUSTA DECIMALES DE SEVERIDAD
					psalta=psalta.toFixed(4);
					psmedia=psmedia.toFixed(4);
					psbaja=psbaja.toFixed(4);

//ACTUALIZA CAMPOS DE SEVERIDAD EN FORMULARIO
//CALCULA PORCENTAJES DE COMPLEJIDAD
					pcalta=calta/num_reg*100;			//% complejidad alta
					pcmedia=cmedia/num_reg*100;			//% complejidad media
					pcbaja=cbaja/num_reg*100;			//% complejidad baja
//AJUSTA DECIMALES DE SEVERIDAD
					pcalta=pcalta.toFixed(4);
					pcmedia=pcmedia.toFixed(4);
					pcbaja=pcbaja.toFixed(4);

													 
//Total hallazgos
for (i=0;i<13;i++)
				{
					switch(i){
					case 0:
						var newstat = frappe.model.add_child(cur_frm.doc,"INF_Estadisticas","testadisticas");
						newstat.parámetro = "Total hallazgos"
						newstat.valor = num_reg
						newstat.unidad_de_medida="Unidades"
						newstat.observacion="Total de hallazgos encontrados"
						console.log("datos del boton")
						cur_frm.refresh();
					break;
					case 1:	
						var newstat = frappe.model.add_child(cur_frm.doc, "INF_Estadisticas","testadisticas");
						newstat.parámetro = "Qsa";
						newstat.valor = salta;
						newstat.unidad_de_medida="Unidades";
						newstat.observacion="Cantidad hallazgos con severidad alta "; 
						console.log("datos del boton");
						cur_frm.refresh();

					break;
					case 2://Cantidad severidad media
						var newstat = frappe.model.add_child(cur_frm.doc, "INF_Estadisticas", "testadisticas");
						newstat.parámetro = "Qsm";
						newstat.valor = smedia;
						newstat.unidad_de_medida="Unidades";
						newstat.observacion="Cantidad hallazgos con severidad media "; 
						console.log("datos del boton");
						cur_frm.refresh();

					break;
					case 3://Cantidad severidad baja
						var newstat = frappe.model.add_child(cur_frm.doc, "INF_Estadisticas", "testadisticas");
						newstat.parámetro = "Qsb";
						newstat.valor = sbaja;
						newstat.unidad_de_medida="Unidades";
						newstat.observacion="Cantidad hallazgos con severidad baja "; 
						console.log("datos del boton");
						cur_frm.refresh();

					break;
					case 4://Cantidad porcentual de hallazgos con severidad alta 
						var newstat = frappe.model.add_child(cur_frm.doc, "INF_Estadisticas", "testadisticas");
						newstat.parámetro = "Qsa%";
						newstat.valor = psalta;
						newstat.unidad_de_medida="%";
						newstat.observacion="Cantidad porcentual de hallazgos con severidad alta "; 
						console.log("datos del boton");
						cur_frm.refresh();

					break;
					case 5://Cantidad porcentual de hallazgos con severidad media 
						var newstat = frappe.model.add_child(cur_frm.doc, "INF_Estadisticas", "testadisticas");
						newstat.parámetro = "Qsm%";
						newstat.valor = psmedia;
						newstat.unidad_de_medida="%";
						newstat.observacion="Cantidad porcentual de hallazgos con severidad media "; 
						console.log("datos del boton");
						cur_frm.refresh();
					break;
					case 6://Cantidad porcentual de hallazgos con severidad baja 
						var newstat = frappe.model.add_child(cur_frm.doc, "INF_Estadisticas", "testadisticas");
						newstat.parámetro = "Qsb%";
						newstat.valor = psbaja;
						newstat.unidad_de_medida="%";
						newstat.observacion="Cantidad porcentual de hallazgos con severidad baja "; 
						console.log("datos del boton");
						cur_frm.refresh();
					break;
					case 7://Cantidad de hallazgos con complejidad de solucion alta 
						var newstat = frappe.model.add_child(cur_frm.doc, "INF_Estadisticas", "testadisticas");
						newstat.parámetro = "Qca";
						newstat.valor = calta;
						newstat.unidad_de_medida="Unidades";
						newstat.observacion="Cantidad de hallazgos con complejidad de solucion alta "; 
						console.log("datos del boton");
						cur_frm.refresh();
					break;
					case 8://Cantidad de hallazgos con complejidad de solucion media 
						var newstat = frappe.model.add_child(cur_frm.doc, "INF_Estadisticas", "testadisticas");
						newstat.parámetro = "Qcm";
						newstat.valor = cmedia;
						newstat.unidad_de_medida="Unidades";
						newstat.observacion="Cantidad de hallazgos con complejidad de solucion media "; 
						console.log("datos del boton");
						cur_frm.refresh();
					break;
					case 9://Cantidad de hallazgos con complejidad de solucion baja 
						var newstat = frappe.model.add_child(cur_frm.doc, "INF_Estadisticas", "testadisticas");
						newstat.parámetro = "Qcb";
						newstat.valor = cbaja;
						newstat.unidad_de_medida="Unidades";
						newstat.observacion="Cantidad de hallazgos con complejidad de solucion baja "; 
						console.log("datos del boton");
						cur_frm.refresh();
					break;
					case 10://Cantidad porcentual de hallazgos con complejidad de solucion alta
						var newstat = frappe.model.add_child(cur_frm.doc, "INF_Estadisticas", "testadisticas");
						newstat.parámetro = "Qca%";
						newstat.valor = pcalta;
						newstat.unidad_de_medida="%";
						newstat.observacion="Cantidad porcentual de hallazgos con complejidad de solucion alta "; 
						console.log("datos del boton");
						cur_frm.refresh();
					break;
					case 11://Cantidad porcentual de hallazgos con complejidad de solucion media
						var newstat = frappe.model.add_child(cur_frm.doc, "INF_Estadisticas", "testadisticas");
						newstat.parámetro = "Qcm%";
						newstat.valor = pcmedia;
						newstat.unidad_de_medida="%";
						newstat.observacion="Cantidad porcentual de hallazgos con complejidad de solucion media "; 
						console.log("datos del boton");
						cur_frm.refresh();
					break;
					case 12://Cantidad porcentual de hallazgos con complejidad de solucion baja
						var newstat = frappe.model.add_child(cur_frm.doc, "INF_Estadisticas", "testadisticas");
						newstat.parámetro = "Qcb%";
						newstat.valor = pcbaja;
						newstat.unidad_de_medida="%";
						newstat.observacion="Cantidad porcentual de hallazgos con complejidad de solucion baja "; 
						console.log("datos del boton");
						cur_frm.refresh();
					break;								 
					}					
				}
															
//POBLAR TABLAS 80 20		

num_reg=cur_frm.doc.no_conformidades.length;
														
for (i = 0; i < num_reg; i++)
{
							if(cur_frm.doc.no_conformidades[i].complej1=="Alta")
								{
									var newstat = frappe.model.add_child(cur_frm.doc, "INF_20", "pareto20");
									newstat.id_hallazgo = i+1;
									newstat.equipo = cur_frm.doc.no_conformidades[i].equipo;
									newstat.lugar = cur_frm.doc.no_conformidades[i].lugar;
									newstat.descripcion=cur_frm.doc.no_conformidades[i].descripcion;
									newstat.complejidad=cur_frm.doc.no_conformidades[i].complej1; 
									newstat.severidad=cur_frm.doc.no_conformidades[i].severidad;
									cur_frm.refresh();
								}

							else if(cur_frm.doc.no_conformidades[i].complej1=="Media")
								{
									var newstat = frappe.model.add_child(cur_frm.doc, "INF_80", "pareto80");
									newstat.id_hallazgo = i+1;
									newstat.equipo = cur_frm.doc.no_conformidades[i].equipo;
									newstat.lugar = cur_frm.doc.no_conformidades[i].lugar;
									newstat.descripcion=cur_frm.doc.no_conformidades[i].descripcion;
									newstat.complejidad=cur_frm.doc.no_conformidades[i].complej1; 
									newstat.severidad=cur_frm.doc.no_conformidades[i].severidad;
									cur_frm.refresh();
								}
							else if(cur_frm.doc.no_conformidades[i].complej1=="Baja")
								{
									var newstat = frappe.model.add_child(cur_frm.doc, "INF_80", "pareto80");
									newstat.id_hallazgo = i+1;
									newstat.equipo = cur_frm.doc.no_conformidades[i].equipo;
									newstat.lugar = cur_frm.doc.no_conformidades[i].lugar;
									newstat.descripcion=cur_frm.doc.no_conformidades[i].descripcion;
									newstat.complejidad=cur_frm.doc.no_conformidades[i].complej1; 
									newstat.severidad=cur_frm.doc.no_conformidades[i].severidad;
									cur_frm.refresh();
	
	
	
								}
};


		
		});

		
frappe.ui.form.on("INF_Crear Informe", "boton_c", function(frm)
		{		
//PROCESA LAS CONCLUSIONESIONES DEL INFORME
	var texto_conclusion="Finalizado el servicio podemos concluir: \r"; //Bloque de texto de las conclusiones
	var _equipo=""; //Variable para capturar el nombre del equipo de tabla
	var _lugar="";  //Variable para capturar el lugar del equipo de tabla
	var extracto=""; //Variable para capturar el extracto de la conclusion de tabla
	var num_reg=0;   //Número de lineas de la tabla
	var tipo_servicio=""; //Tipo de servicio asociado al registro
	
			console.log("crear variables");
//Determina el tipo de servicio seleccionado
	//tipo_servicio=cur_frm.doc.t_accion;
	
//PREPARAR CONCLUSIONES DESDE LAS NO CONFORMIDADES
// Las no conformidades de severidad Alta o Media requieren realizar acciones urgente
// Las no conformidades de severidad baja requieren realizar acciones no urgentes
// Lee las estadisticas desde la tabla de resumen 
Total_NC=cur_frm.doc.testadisticas[0].valor;
Qsa=cur_frm.doc.testadisticas[1].valor;
Qsm=cur_frm.doc.testadisticas[2].valor;
Qsb=cur_frm.doc.testadisticas[3].valor;
Qsa%=cur_frm.doc.testadisticas[4].valor;
Qsm%=cur_frm.doc.testadisticas[5].valor;
Qsb%=cur_frm.doc.testadisticas[6].valor;
Qca=cur_frm.doc.testadisticas[7].valor;
Qcm=cur_frm.doc.testadisticas[8].valor;
Qcb=cur_frm.doc.testadisticas[9].valor;
Qca%=cur_frm.doc.testadisticas[10].valor;
Qcm%=cur_frm.doc.testadisticas[11].valor;
Qcb%=cur_frm.doc.testadisticas[12].valor;

if (Qsa>0){
	//texto para severidad alta
	texto_conclusion=texto_conclusion+"Se encontraron "+Qsa+" hallazgos de Severidad Alta que requieren urgente atención \r";
	console.log("alta");
}
if(Qsm>0){
	//texto para severidad media
	texto_conclusion=texto_conclusion+"Se encontraron "+Qsm+" hallazgos de Severidad Media que requieren urgente atención \r";
	console.log("media");
}
if(Qsb>0){
		//texto para severidad baja

	texto_conclusion=texto_conclusion+"Se encontraron "+sbaja+" hallazgos de Severidad Baja que requieren atención \r";
	console.log("baja");
}
	texto_conclusion=texto_conclusion+"\r";

// Sumar extractos	
num_reg=cur_frm.doc.no_conformidades.length;
	
		for (i = 0; i < num_reg; i++)
												{
													 var str= cur_frm.doc.no_conformidades[i].ex_conclusion;
													 equipo=cur_frm.doc.no_conformidades[i].equipo;
													 lugar=cur_frm.doc.no_conformidades[i].lugar;
													 ex_equipo=str.replace("#equipo#", equipo);
													 extracto=ex_equipo.replace("#lugar#",lugar);
													 texto_conclusion=texto_conclusion+extracto+"\r"+"\r";
													console.log(i);
												};




cur_frm.set_value("conclusiones", texto_conclusion);






	}	)