/**
 * 				obter os dados
 */

	function obterCursosInteresseUserPerfil (tipo, habilidadeNome, append) {

		rest_obterUserPerfilItens(tipo, carregaCursosInteresseUserPerfil, semAcao, tipo, null, append);
	
	};
		
	function carregaCursosInteresseUserPerfil (objJson, tipo, habilidadeNome, append) {	
//		
//		carrega cursos
//
		$( "." + append ).remove();

		var curso_user_perfil_table_header =
				'<table id="curso_user_perfil_list' + append + '" class="' + append + '">' +
					'<thead>' +
						'<tr>' +
							'<th data-toggle="true"></th>' +
							'<th data-toggle="true"></th>' +
							'<th data-hide="all" ></th>' +
							'<th data-hide="all" ></th>' +
							'<th data-hide="all" ></th>' +
							'<th data-hide="all" ></th>' +
							'<th data-hide="all" ></th>' +
						'</tr>' +
					'</thead>' +
					'<tbody id="curso_user_perfil_tbody' + append + '">' +
					'</tbody>' +
					'<tfoot>' +
						'<tr>' +
							'<td colspan="5">' +
								'<div class="text-right">' +
									'<ul class="pagination"></ul>' +
								'</div>' +
							'</td>' +
						'</tr>' +
					'</tfoot>' +
				'</table>';
    	$( "#" + append).append(curso_user_perfil_table_header);

    	$( ".itemCursoUserPerfil" + append ).remove();
        $.each(objJson, function (i, curso) {
        	curso_user_perfil_table_row = 
				'<tr id="itemCursoUserPerfil_' + i + '" class="itemCursoUserPerfil' + append + '">' +
		   			'<td>' + 
						'<span class="user-panel-curso-habilidade-nome cursoHabilidade_' + i + ' ">- <a  href="' + curso.documento.wiki + '"  target="_blank">  ' + curso.documento.descricao + '</a>' +
					'</td>' +
					'<td class="user-panel-td"><a id="excluiInteresseCurso_' + i + '" data-tooltip="exclui interesse"><i class="fa fa-trash-o icon-trash"></i></a></td>' +
					'<td><span id="tempo' + i + '" class="user-panel-detalhes-curso">duração: ' + curso.documento.tempo + '</span></td>' +
					'<td><span id="custo' + i + '" class="user-panel-detalhes-curso">custo: ' + curso.documento.custo + '</span></td>' +
					'<td><span id="escola' + i + '" class="user-panel-detalhes-curso">escola: ' + curso.documento.escola + '</span></td>' +
					'<td><span id="preRequisito' + i + '" class="user-panel-detalhes-curso">pré-requisito: ' + curso.documento.preRequisito + '</td>' +
				'</tr>';
        	$( "#curso_user_perfil_tbody" + append).append(curso_user_perfil_table_row);
        	$("#excluiInteresseCurso_" + i).off('click');
    		$("#excluiInteresseCurso_" + i).on('click',function(){
    	    	var objJson = JSON.parse(localStorage.getItem("meuPerfil"));
    	    	atualizaUserPerfilElemento (objJson, "cursoInteresseOff", curso.documento.idCurso);
	        	$("#itemCursoUserPerfil_" + i).addClass('hide');
    	    });
        });

        var curso_user_perfil_table = $('#curso_user_perfil_list' + append);
		curso_user_perfil_table.footable().trigger('footable_collapse_all');

	};
