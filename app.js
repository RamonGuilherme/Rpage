function share(){
			if (navigator.share !== undefined) {
				navigator.share({
					title: 'Ramon Guilherme',
					text: 'Landing Page',
					url: 'https://seusite.com/sua_url',
				})
				.then(() => console.log('Successful share'))
				.catch((error) => console.log('Error sharing', error));
			}
		}


let tela =document.querySelector(".mais_detalhes");

        function abre(){
            
        }


		// Essa funcao vai chamar os detalhes --------------------------------------------

		let mais = document.querySelector('.max_detalhe')

		function abre(){
			mais.style.display = 'block'
		}



		// essa funcao vai chamar mais detalhes da página

		let mInfo = document.querySelector('.mais_detalhes')

		function rj(){
			mInfo.style.display = 'block'
		}

		//troca tema

		let tema = document.querySelector('.tudo')
		let tema2 = document.querySelector('.painel_sup')
		let tema3 = document.getElementById('perfil')
		let tema4 = document.getElementById('skills')
		let tema5 = document.getElementById('projetos')
		let tema6 = document.getElementById('redes')
		let tema7 = document.getElementById('tela_info')
		let tema8 = document.querySelector('.menu')

		

		function trocatema(){

			tema.style.background = '#282828'
			

			tema2.style.background = '#303030'
			tema3.style.background = '#505050'
			tema4.style.background = '#505050'
			tema4.style.color = 'white'
			tema5.style.background = '#505050'
			tema6.style.background = '#505050'
			tema7.style.background = '#505050'
			tema7.style.color = 'white'
			tema8.style.background = '#303030'
			
			
			

		}
		
		// Painel de configuração //

		let configure = document.querySelector('.confi')

		function confi_painel(){

			configure.style.display = 'block'

		}
		
		// Data e Hora

		let dh = document.querySelector('.dh')

		dh.innerHTML=(Date())


		// Mostrar painel temperatura

		let chuva = document.querySelector('.clima')

		function kabum(){
			chuva.style.display = 'block'
		}


		let hora = document.querySelector('.dh')

		function hd(){
			hora.style.display = 'block'
		}
