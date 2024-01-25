
	
	var base_url = $('html').attr('baseUrl');
	
	
	var	icon_packages = [
							['regular-mix', 		false], 		//1000 icons
							['web-application', 	true],			//399 icons
							['business', 			true],			//32 icons
							['chart', 				true],			//13 icons
							['construction', 		true],			//64 icons
							['currency', 			true],			//100 icons
							['device', 				true],			//50 icons
							['directional', 		true],			//113 icons
							['education', 			true],			//40 icons
							['file-type', 			true],			//41 icons
							['payment', 			true],			//46 icons
							['person', 				true],			//38 icons
							['search', 				true],			//11 icons
							['text-editor', 		true],			//45 icons
							['social', 				true],			//113 icons
							['multimedia', 			true],			//35 icons
							['abstract', 			false],			//41 icons
							['animal', 				false],			//109 icons
							['brand', 				false],			//203 icons
							['emoticon', 			false],			//23 icons
							['fitness', 			false],			//10 icons
							['food', 				false],			//99 icons
							['kids', 				false],			//19 icons
							['law', 				false],			//39 icons
							['mathmetical', 		false],			//47 icons
							['medical', 			false],			//56 icons
							['mobile-ui', 			false],			//91 icons
							['sport', 				false],			//82 icons
							['transport', 			false],			//53 icons
							['travel', 				false],			//14 icons
							['weather', 			false]			//81 icons
						];
	
		for (i = 0; i < icon_packages.length; i++){
			if(icon_packages[i][1] == true){
				$('html head').append('<link rel="stylesheet" type="text/css" href="'+base_url+'/assets/twh-icon-packages/'+icon_packages[i][0]+'/twh-icon.css">')
			}
		}
