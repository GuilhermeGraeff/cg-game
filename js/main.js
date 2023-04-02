var scene;
var camera; 
var render;

var taNoLobo = false;
var elements = [];

var day = true;
var aurora = true;
var parametrosGUI;

var relogio = new THREE.Clock();

/* animação */
var mixer;
var animacaoAtiva;
var loboCarregado = false;
var animacaoAnterior;
var animationArray = new Array();

var velociadadeChar = 2;

var locomoverEsqueleto = false;

var charGroup;

var elementToggled = 'casa';

var elementosCena = new Array();

var collidableMeshList = [];

var charBox;
var charHelper;

// audio
var listener; //padrão
var soundBack; 
var somCarregado = false;

var arveresPath = new Array();
arveresPath[0] = new Array();
arveresPath[1] = new Array();
arveresPath[2] = new Array();
arveresPath[3] = new Array();
arveresPath[4] = new Array();
arveresPath[5] = new Array();
arveresPath[6] = new Array();
arveresPath[7] = new Array();
arveresPath[8] = new Array();
arveresPath[9] = new Array();
arveresPath[10] = new Array();
// qawsd
arveresPath[0][0] = 'assets/floresta/Trees/FBX Files/Tree 1.1/Tree1.1.fbx'; 
arveresPath[0][1] = -14; 
arveresPath[1][0] = 'assets/floresta/Trees/FBX Files/Tree 1.2/Tree1.2.fbx';
arveresPath[1][1] = -14;
arveresPath[2][0] = 'assets/floresta/Trees/FBX Files/Tree 1.3/Tree1.3.fbx';
arveresPath[2][1] = -14;
arveresPath[3][0] = 'assets/floresta/Trees/FBX Files/Tree 2.1/Tree2.1.fbx';
arveresPath[3][1] = 26; 
arveresPath[4][0] = 'assets/floresta/Trees/FBX Files/Tree 2.2/Tree2.2.fbx';
arveresPath[4][1] = 26; 
arveresPath[5][0] = 'assets/floresta/Trees/FBX Files/Tree 2.3/Tree2.3.fbx';
arveresPath[5][1] = 11; 
arveresPath[6][0] = 'assets/floresta/Trees/FBX Files/Tree 3.1/Tree3.1.fbx';
arveresPath[6][1] = 15;
arveresPath[7][0] = 'assets/floresta/Trees/FBX Files/Tree 3.2/Tree3.2.fbx';
arveresPath[7][1] = 20;
arveresPath[8][0] = 'assets/floresta/Trees/FBX Files/Tree 3.3/Tree3.3.fbx';
arveresPath[8][1] = 8;
arveresPath[9][0] = 'assets/floresta/Trees/FBX Files/Tree 1.1/Tree1.1.fbx';
arveresPath[9][1] = -14; 
arveresPath[10][0] = 'assets/floresta/Trees/FBX Files/Tree 1.1/Tree1.1.fbx';
arveresPath[10][1] = -14; 


var flowersPath = new Array();
flowersPath[0] = new Array();
flowersPath[1] = new Array();
flowersPath[2] = new Array();
flowersPath[3] = new Array();
flowersPath[4] = new Array();
flowersPath[5] = new Array();
flowersPath[6] = new Array();
flowersPath[7] = new Array();
flowersPath[8] = new Array();
flowersPath[9] = new Array();
flowersPath[10] = new Array();

flowersPath[0][0] = 'assets/floresta/Flowers/FBX Files/Flower1.1/Flower1.1.fbx';
flowersPath[0][1] = -11.5; 
flowersPath[1][0] = 'assets/floresta/Flowers/FBX Files/Flower1.2/Flower1.2.fbx';
flowersPath[1][1] = -11.5;
flowersPath[2][0] = 'assets/floresta/Flowers/FBX Files/Flower1.3/Flower1.3.fbx';
flowersPath[2][1] = -11.5;
flowersPath[3][0] = 'assets/floresta/Flowers/FBX Files/Flower2.1/Flower2.1.fbx';
flowersPath[3][1] = -11.5; 
flowersPath[4][0] = 'assets/floresta/Flowers/FBX Files/Flower2.2/Flower2.2.fbx';
flowersPath[4][1] = -11.5; 
flowersPath[5][0] = 'assets/floresta/Flowers/FBX Files/Flower2.3/Flower2.3.fbx';
flowersPath[5][1] = -11.5; 
flowersPath[6][0] = 'assets/floresta/Flowers/FBX Files/Flower3.1/Flower3.1.fbx';
flowersPath[6][1] = -11.5;
flowersPath[7][0] = 'assets/floresta/Flowers/FBX Files/Flower3.2/Flower3.2.fbx';
flowersPath[7][1] = -11.5;
flowersPath[8][0] = 'assets/floresta/Flowers/FBX Files/Flower3.3/Flower3.3.fbx';
flowersPath[8][1] = -11.5;
flowersPath[9][0] = 'assets/floresta/Flowers/FBX Files/Flower1.1/Flower1.1.fbx';
flowersPath[9][1] = -11.5; 
flowersPath[10][0] = 'assets/floresta/Flowers/FBX Files/Flower1.1/Flower1.1.fbx';
flowersPath[10][1] = -11.5; 

var cogumelosPath = new Array();
cogumelosPath[0] = new Array();
cogumelosPath[1] = new Array();
cogumelosPath[2] = new Array();
cogumelosPath[3] = new Array();
cogumelosPath[4] = new Array();
cogumelosPath[5] = new Array();
cogumelosPath[6] = new Array();
cogumelosPath[7] = new Array();
cogumelosPath[8] = new Array();
cogumelosPath[9] = new Array();
cogumelosPath[10] = new Array();

cogumelosPath[0][0] = 'assets/floresta/Mushrooms/FBX Files/Mushroom1.1/Mushroom1.1.fbx';
cogumelosPath[0][1] = -13.3; 
cogumelosPath[1][0] = 'assets/floresta/Mushrooms/FBX Files/Mushroom1.2/Mushroom1.2.fbx';
cogumelosPath[1][1] = -13.3;
cogumelosPath[2][0] = 'assets/floresta/Mushrooms/FBX Files/Mushroom1.1/Mushroom1.1.fbx';
cogumelosPath[2][1] = -13.3;
cogumelosPath[3][0] = 'assets/floresta/Mushrooms/FBX Files/Mushroom2.1/Mushroom2.1.fbx';
cogumelosPath[3][1] = -13.3; 
cogumelosPath[4][0] = 'assets/floresta/Mushrooms/FBX Files/Mushroom2.2/Mushroom2.2.fbx';
cogumelosPath[4][1] = -13.3; 
cogumelosPath[5][0] = 'assets/floresta/Mushrooms/FBX Files/Mushroom2.1/Mushroom2.1.fbx';
cogumelosPath[5][1] = -13.3; 
cogumelosPath[6][0] = 'assets/floresta/Mushrooms/FBX Files/Mushroom2.2/Mushroom2.2.fbx';
cogumelosPath[6][1] = -13.3;
cogumelosPath[7][0] = 'assets/floresta/Mushrooms/FBX Files/Mushroom2.1/Mushroom2.1.fbx';
cogumelosPath[7][1] = -13.3;
cogumelosPath[8][0] = 'assets/floresta/Mushrooms/FBX Files/Mushroom2.2/Mushroom2.2.fbx';
cogumelosPath[8][1] = -13.3;
cogumelosPath[9][0] = 'assets/floresta/Mushrooms/FBX Files/Mushroom1.1/Mushroom1.1.fbx';
cogumelosPath[9][1] = -13.3; 
cogumelosPath[10][0] = 'assets/floresta/Mushrooms/FBX Files/Mushroom1.2/Mushroom1.2.fbx';
cogumelosPath[10][1] = -13.3; 

var bushesPath = new Array();
bushesPath[0] = new Array();
bushesPath[1] = new Array();
bushesPath[2] = new Array();
bushesPath[3] = new Array();
bushesPath[4] = new Array();
bushesPath[5] = new Array();
bushesPath[6] = new Array();
bushesPath[7] = new Array();
bushesPath[8] = new Array();
bushesPath[9] = new Array();
bushesPath[10] = new Array();

bushesPath[0][0] = 'assets/floresta/Bush/FBX Files/Bush1.1/Bush1.1.fbx';
bushesPath[0][1] = -11.5; 
bushesPath[1][0] = 'assets/floresta/Bush/FBX Files/Bush1.2/Bush1.2.fbx';
bushesPath[1][1] = -11.5;
bushesPath[2][0] = 'assets/floresta/Bush/FBX Files/Bush1.3/Bush1.3.fbx';
bushesPath[2][1] = -11.5;
bushesPath[3][0] = 'assets/floresta/Bush/FBX Files/Bush2.1/Bush2.1.fbx';
bushesPath[3][1] = -11.5; 
bushesPath[4][0] = 'assets/floresta/Bush/FBX Files/Bush2.2/Bush2.2.fbx';
bushesPath[4][1] = -11.5; 
bushesPath[5][0] = 'assets/floresta/Bush/FBX Files/Bush2.3/Bush2.3.fbx';
bushesPath[5][1] = -11.5; 
bushesPath[6][0] = 'assets/floresta/Bush/FBX Files/Bush3.1/Bush3.1.fbx';
bushesPath[6][1] = -11.5;
bushesPath[7][0] = 'assets/floresta/Bush/FBX Files/Bush3.2/Bush3.2.fbx';
bushesPath[7][1] = -11.5;
bushesPath[8][0] = 'assets/floresta/Bush/FBX Files/Bush3.3/Bush3.3.fbx';
bushesPath[8][1] = -11.5;
bushesPath[9][0] = 'assets/floresta/Bush/FBX Files/Bush1.2/Bush1.2.fbx';
bushesPath[9][1] = -11.5; 
bushesPath[10][0] = 'assets/floresta/Bush/FBX Files/Bush1.3/Bush1.3.fbx';

var stonesPath = new Array();
stonesPath[0] = new Array();
stonesPath[1] = new Array();
stonesPath[2] = new Array();
stonesPath[3] = new Array();
stonesPath[4] = new Array();
stonesPath[5] = new Array();
stonesPath[6] = new Array();
stonesPath[7] = new Array();
stonesPath[8] = new Array();
stonesPath[9] = new Array();
stonesPath[10] = new Array();

stonesPath[0][0] = 'assets/floresta/Stone/FBX Files/Stone1.1/Stone1.1.fbx';
stonesPath[0][1] = -11.5; 
stonesPath[1][0] = 'assets/floresta/Stone/FBX Files/Stone1.2/Stone1.2.fbx';
stonesPath[1][1] = -11.5;
stonesPath[2][0] = 'assets/floresta/Stone/FBX Files/Stone1.3/Stone1.3.fbx';
stonesPath[2][1] = -11.5;
stonesPath[3][0] = 'assets/floresta/Stone/FBX Files/Stone2.1/Stone2.1.fbx';
stonesPath[3][1] = -11.5; 
stonesPath[4][0] = 'assets/floresta/Stone/FBX Files/Stone2.2/Stone2.2.fbx';
stonesPath[4][1] = -11.5; 
stonesPath[5][0] = 'assets/floresta/Stone/FBX Files/Stone2.3/Stone2.3.fbx';
stonesPath[5][1] = -11.5; 
stonesPath[6][0] = 'assets/floresta/Stone/FBX Files/Stone3.1/Stone3.1.fbx';
stonesPath[6][1] = -11.5;
stonesPath[7][0] = 'assets/floresta/Stone/FBX Files/Stone3.2/Stone3.2.fbx';
stonesPath[7][1] = -11.5;
stonesPath[8][0] = 'assets/floresta/Stone/FBX Files/Stone3.3/Stone3.3.fbx';
stonesPath[8][1] = -11.5;
stonesPath[9][0] = 'assets/floresta/Stone/FBX Files/Stone1.2/Stone1.2.fbx';
stonesPath[9][1] = -11.5; 
stonesPath[10][0] = 'assets/floresta/Stone/FBX Files/Stone1.3/Stone1.3.fbx';


/**Interface gráfica */
var createGui = function(){
    const gui = new dat.GUI();
    parametrosGUI = {
        animal : 'Opcao 1',
		camera : 'Locomover Esqueleto',
		objectPositionX : 0,
		objectPositionZ : 0,
		objectRotationY : 0,
		animaca00 : function (){
			console.log("Entrou na animação 0");
			trocaAnimacao(animationArray[0]);
		},
		animaca01 : function (){
			console.log("Entrou na animação 1");
			trocaAnimacao(animationArray[1]);
		},
		animaca02 : function (){
			console.log("Entrou na animação 2");
			trocaAnimacao(animationArray[2]);			
		},
		animaca03 : function (){
			console.log("Entrou na animação 3");
			trocaAnimacao(animationArray[3]);
		},
		animaca04 : function (){
			console.log("Entrou na animação 4");
			trocaAnimacao(animationArray[4]);
		},
		animaca05 : function (){
			console.log(animationArray);
			console.log("Entrou na animação 5");
			trocaAnimacao(animationArray[5]);
		},
    }

	





	


    let navegarAnimais = gui.addFolder('Navegue pelos Animais');
    let opcoesAnimais = ['Casa','Bau','Corvo','Escudo','Esqueleto','Martelo','Personagem','Tenda','Opcao 10','Opcao 11','Opcao 12']
    let opcaoAnimal = navegarAnimais.add(parametrosGUI, 'animal').options(opcoesAnimais).name('Escolha o animal');
    opcaoAnimal.onChange(function(parametro){
        if( parametro == 'Casa'){
			locomoverEsqueleto = false;
			elementToggled = 'casa';
			parametrosGUI.objectPositionX = elements[elementToggled].position.x;
			parametrosGUI.objectPositionZ = elements[elementToggled].position.z;
			parametrosGUI.objectRotationY = elements[elementToggled].rotation.y;
        }
		if( parametro == 'Bau'){
			locomoverEsqueleto = false;
			elementToggled = 'bau'
			parametrosGUI.objectPositionX = elements[elementToggled].position.x;
			parametrosGUI.objectPositionZ = elements[elementToggled].position.z;
			parametrosGUI.objectRotationY = elements[elementToggled].rotation.y;
        }
        if( parametro == 'Corvo'){
			locomoverEsqueleto = false;
			elementToggled = 'corvo'
			parametrosGUI.objectPositionX = elements[elementToggled].position.x;
			parametrosGUI.objectPositionZ = elements[elementToggled].position.z;
			parametrosGUI.objectRotationY = elements[elementToggled].rotation.y;
        }
        if( parametro == 'Escudo'){
			locomoverEsqueleto = false;
			elementToggled = 'escudo'
			parametrosGUI.objectPositionX = elements[elementToggled].position.x;
			parametrosGUI.objectPositionZ = elements[elementToggled].position.z;
			parametrosGUI.objectRotationY = elements[elementToggled].rotation.y;
        }
        if( parametro == 'Esqueleto'){
			locomoverEsqueleto = false;
			elementToggled = 'esqueleto'
			parametrosGUI.objectPositionX = elements[elementToggled].position.x;
			parametrosGUI.objectPositionZ = elements[elementToggled].position.z;
			parametrosGUI.objectRotationY = elements[elementToggled].rotation.y;	
        }
        if( parametro == 'Martelo'){
			locomoverEsqueleto = false;
			elementToggled = 'martelo'
			parametrosGUI.objectPositionX = elements[elementToggled].position.x;
			parametrosGUI.objectPositionZ = elements[elementToggled].position.z;
			parametrosGUI.objectRotationY = elements[elementToggled].rotation.y;
        }
        if( parametro == 'Personagem'){
			locomoverEsqueleto = false;
			elementToggled = 'personagem'
			parametrosGUI.objectPositionX = elements[elementToggled].position.x;
			parametrosGUI.objectPositionZ = elements[elementToggled].position.z;
			parametrosGUI.objectRotationY = elements[elementToggled].rotation.y;
        }
        if( parametro == 'Tenda'){
			locomoverEsqueleto = false;
			elementToggled = 'tenda'
			parametrosGUI.objectPositionX = elements[elementToggled].position.x;
			parametrosGUI.objectPositionZ = elements[elementToggled].position.z;
			parametrosGUI.objectRotationY = elements[elementToggled].rotation.y;
        }	
		
		if( parametro == 'Opcao 10')
		{
			elementToggled = 'camera'
			parametrosGUI.objectRotationY = camera.rotation.x;
		}
		if( parametro == 'Opcao 11')
		{
			console.log('Opção: ' + parametro);
		}
		if( parametro == 'Opcao 12')
		{
			console.log('Opção: ' + parametro);
		}

    });
    navegarAnimais.open();

	let object = gui.addFolder('Object Position');
	let positionX = object.add(parametrosGUI,'objectPositionX', -200, 200);
	let positionZ = object.add(parametrosGUI,'objectPositionZ', -200, 200);
	let rotationY = object.add(parametrosGUI,'objectRotationY', -8, 8);
	positionX.onChange(function (param){
		elements[elementToggled].position.x = param;
	})
	positionZ.onChange(function (param){
		elements[elementToggled].position.z = param;
	})
	rotationY.onChange(function (param){
		if(elementToggled == 'camera'){
			camera.rotation.x = Math.PI * (1/param);
		} else {
			elements[elementToggled].rotation.y = Math.PI * (1/param);
		}
	})

	let animacoes = gui.addFolder("Animações");
	animacoes.add(parametrosGUI,'animaca00').name("Idle");
	animacoes.add(parametrosGUI,'animaca01').name("Atack");
	animacoes.add(parametrosGUI,'animaca02').name("Get atacked from the back");
	animacoes.add(parametrosGUI,'animaca03').name("Die");
	animacoes.add(parametrosGUI,'animaca04').name("Idle");
	animacoes.add(parametrosGUI,'animaca05').name("Jump");



    gui.open();
}
/**Fim da Interface gráfica */
var trocaAnimacao = function (novaAnimacao) {
	if (novaAnimacao != animacaoAtiva){
		animacaoAnterior = animacaoAtiva;
		animacaoAtiva = novaAnimacao;
		animacaoAtiva.reset();
		if (animacaoAtiva == animationArray[3] ){
			animacaoAtiva.clampWhenFinished = true;
			animacaoAtiva.loop = THREE.LoopOnce;

		}else{
			animacaoAtiva.clampWhenFinish = false;
			animacaoAtiva.loop = THREE.LoopRepeat;
		}
		animacaoAnterior.stop();
		animacaoAtiva.play();
	}

}

var loadObjects = function(){

	// var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    // var material = new THREE.MeshBasicMaterial( { color: "red" } );
    // cube = new THREE.Mesh( geometry, material );
    // scene.add( cube );

	// cubeNorte = new THREE.Mesh( geometry, material );
	// cubeNorte.position.z = -200;
    // scene.add( cubeNorte );
	// cubeSul = new THREE.Mesh( geometry, material );
	// cubeSul.position.z = 200;
    // scene.add( cubeSul );
	// cubeLeste = new THREE.Mesh( geometry, material );
	// cubeLeste.position.x = 200;
    // scene.add( cubeLeste );
	// cubeOeste = new THREE.Mesh( geometry, material );
	// cubeOeste.position.x = -200;
	// scene.add( cubeOeste );

	
	
    let fbxLoader = new THREE.FBXLoader();
	let textLoader = new THREE.TextureLoader();

	fbxLoader.load(
		'assets/bau/chest_low.FBX',//o que carregar
		function(obj){ //função executada após o loading
			obj.traverse(
				function (child){
					if (child instanceof THREE.Mesh){
						let texture = textLoader.load('assets/bau/Texture/default_albedo.jpg');
						child.material = new THREE.MeshStandardMaterial({map: texture});
						child.castShadow = true;
						child.receiveShadow = true;
					}
				}
			);
			obj.scale.x = 5;
			obj.scale.y = 5;
			obj.scale.z = 5;

			obj.position.x = -53;
			obj.position.y = -14;
            obj.position.z = -97;

			obj.rotation.y = Math.PI * (1/4);

			scene.add(obj);
			elements['bau'] = obj;

			
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
			elementosCena.push(objBox);
			collidableMeshList.push(obj.children[0]);
		},
		function (andamento){ //função executada durante o loading
			console.log(andamento.loaded/andamento.total*100 + "%");
		},
		function(error){//função executada se deu problema
			console.log("Deu erro: "+error);
		}
	);
	
	fbxLoader.load(
		'assets/casa/Fantasy_House.FBX',//o que carregar
		function(obj){ //função executada após o loading
			obj.traverse(
				function (child){
					if (child instanceof THREE.Mesh){
						let texture = textLoader.load('assets/casa/Texture/House2_low_03 - Default_AlbedoTransparency.png');
						child.material = new THREE.MeshStandardMaterial({map: texture});
						child.castShadow = true;
						child.receiveShadow = true;
					}
				}
			);
			obj.scale.x = 10;
			obj.scale.y = 10;
			obj.scale.z = 10;

			obj.position.x = -35;
			obj.position.y = -14;
            obj.position.z = -163;
			
			obj.rotation.x = -Math.PI/2;
			obj.rotation.z = -Math.PI * (3/4);
			
			
			scene.add(obj);
			elements['casa'] = obj;

			
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
			elementosCena.push(objBox);
			collidableMeshList.push(obj.children[0]);
		},
		function (andamento){ //função executada durante o loading
			console.log(andamento.loaded/andamento.total*100 + "%");
		},
		function(error){//função executada se deu problema
			console.log("Deu erro: "+error);
		}
	);
	fbxLoader.load(
		'assets/cavaleiro/KnightCharacter.fbx',//o que carregar
		function(obj){ //função executada após o loading
			obj.traverse(
				function (child){
					if (child instanceof THREE.Mesh){
						//let texture = textLoader.load('assets/casa/Texture/House2_low_03 - Default_AlbedoTransparency.png');
						//child.material = new THREE.MeshStandardMaterial({map: texture});
						child.castShadow = true;
						child.receiveShadow = true;
					}
				}
			);
			obj.scale.x = 0.03;
			obj.scale.y = 0.03;
			obj.scale.z = 0.03;

			obj.position.x = -66;
			obj.position.y = -14;
            obj.position.z = -75;
			
			obj.rotation.y = Math.PI/4;

			
			scene.add(obj);
			elements['personagem'] = obj;

			
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
			elementosCena.push(objBox);
			collidableMeshList.push(obj.children[0]);
		},
		function (andamento){ //função executada durante o loading
			console.log(andamento.loaded/andamento.total*100 + "%");
		},
		function(error){//função executada se deu problema
			console.log("Deu erro: "+error);
		}
	);
	fbxLoader.load(
		'assets/corvo/Raven.fbx',//o que carregar
		function(obj){ //função executada após o loading
			obj.traverse(
				function (child){
					if (child instanceof THREE.Mesh){
						let texture = textLoader.load('assets/corvo/UVRaven.png');
						child.material = new THREE.MeshStandardMaterial({map: texture});
						child.castShadow = true;
						child.receiveShadow = true;
					}
				}
			);
			obj.scale.x = 0.01;
			obj.scale.y = 0.01;
			obj.scale.z = 0.01;

			obj.position.x = 44;
			obj.position.y = -14;
            obj.position.z = -70;

			obj.rotation.y = -Math.PI/4;
			
			// obj.rotation.x = -Math.PI/2;
			
			scene.add(obj);
			elements['corvo'] = obj;

			
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
			elementosCena.push(objBox);
			collidableMeshList.push(obj.children[0]);
		},
		function (andamento){ //função executada durante o loading
			console.log(andamento.loaded/andamento.total*100 + "%");
		},
		function(error){//função executada se deu problema
			console.log("Deu erro: "+error);
		}
	);
	fbxLoader.load(
		'assets/escudos/Shield1.FBX',//o que carregar
		function(obj){ //função executada após o loading
			obj.traverse(
				function (child){
					if (child instanceof THREE.Mesh){
						let texture = textLoader.load('assets/escudos/Texture/Shield1_AlbedoTransparency.png');
						child.material = new THREE.MeshStandardMaterial({map: texture});
						child.castShadow = true;
						child.receiveShadow = true;
					}
				}
			);
			obj.scale.x = 0.1;
			obj.scale.y = 0.1;
			obj.scale.z = 0.1;

			obj.position.x = -61;
			obj.position.y = -14;
            obj.position.z = -64;
			
			obj.rotation.y = -Math.PI/2;
			
			scene.add(obj);
			elements['escudo'] = obj;


			
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
			elementosCena.push(objBox);
			collidableMeshList.push(obj.children[0]);
		},
		function (andamento){ //função executada durante o loading
			console.log(andamento.loaded/andamento.total*100 + "%");
		},
		function(error){//função executada se deu problema
			console.log("Deu erro: "+error);
		}
	);
	
	fbxLoader.load(
		'assets/martelo/Sledgehammer.FBX',//o que carregar
		function(obj){ //função executada após o loading
			obj.traverse(
				function (child){
					if (child instanceof THREE.Mesh){
						let texture = textLoader.load('assets/martelo/Clear/Sledgehammer_low_02 - Default_AlbedoTransparency.png');
						child.material = new THREE.MeshStandardMaterial({map: texture});
						child.castShadow = true;
						child.receiveShadow = true;
					}
				}
			);
			obj.scale.x = 0.05;
			obj.scale.y = 0.05;
			obj.scale.z = 0.05;

			obj.position.x = 80;
		    //obj.position.y = -14;
            obj.position.z = 80;
			
			// obj.rotation.x = -Math.PI/2;
			
			scene.add(obj);
			elements['martelo'] = obj;

			
			
			
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
			elementosCena.push(objBox);
			collidableMeshList.push(obj.children[0]);
		},
		function (andamento){ //função executada durante o loading
			console.log(andamento.loaded/andamento.total*100 + "%");
		},
		function(error){//função executada se deu problema
			console.log("Deu erro: "+error);
		}
	);
	fbxLoader.load(
		'assets/tenda/Stylized_Fantasy_House2.FBX',//o que carregar
		function(obj){ //função executada após o loading
			obj.traverse(
				function (child){
					if (child instanceof THREE.Mesh){
						let texture = textLoader.load('assets/tenda/Texture/Stylized_Fantasy_House2_AlbedoTransparency.png');
						child.material = new THREE.MeshStandardMaterial({map: texture});
						child.castShadow = true;
						child.receiveShadow = true;
					}
				}
			);
			obj.scale.x = 10;
			obj.scale.y = 10;
			obj.scale.z = 10;

			obj.position.x = -57;
		    obj.position.y = -14;
            obj.position.z = -198;
			
			obj.rotation.x = -Math.PI/2;
			obj.rotation.z = -Math.PI * (1/4);
			
			
			scene.add(obj);
			elements['tenda'] = obj;

			
			obj.children[0].geometry.computeBoundingBox();
			let objBox = new THREE.Box3().setFromObject(obj);
			elementosCena.push(objBox);
			collidableMeshList.push(obj.children[0]);
		},
		function (andamento){ //função executada durante o loading
			console.log(andamento.loaded/andamento.total*100 + "%");
		},
		function(error){//função executada se deu problema
			console.log("Deu erro: "+error);
		}
	);
	

	let trees = 0;
	while (trees < 300){
		let arvX = Math.floor(Math.random() * 1000)-500;
		let arvZ = Math.floor(Math.random() * 1000)-500;
		let raio = 200;
		let tryAgain = true;
		while(tryAgain == true){
			if(Math.sqrt(Math.pow(-arvX, 2) + Math.pow(-arvZ, 2)) < raio){
				arvX = Math.floor(Math.random() * 1000)-500;
				arvZ = Math.floor(Math.random() * 1000)-500;
			} else {
				tryAgain = false;
			}
		}
		trees = trees + 1;
		let random = Math.floor(Math.random() * 10);
		fbxLoader.load(
			arveresPath[random][0],
			function(obj){ //função executada após o loading
				obj.traverse(
					function (child){
						if (child instanceof THREE.Mesh){
							child.castShadow = true;
							child.receiveShadow = true;
						}
					}
				);
				obj.scale.x = 0.1;
				obj.scale.y = 0.1;
				obj.scale.z = 0.1;

				obj.position.x = arvX;
				obj.position.y = arveresPath[random][1];
				obj.position.z = arvZ;

				obj.rotation.y = -Math.PI/Math.floor(Math.random() * 10);

				scene.add(obj);
				elements['arvores'][trees] = obj;


				obj.children[0].geometry.computeBoundingBox();
				let objBox = new THREE.Box3().setFromObject(obj);
				elementosCena.push(objBox);
				collidableMeshList.push(obj.children[0]);
			},
			function (andamento){ //função executada durante o loading
				console.log(andamento.loaded/andamento.total*100 + "%");
			},
			function(error){//função executada se deu problema
				console.log("Deu erro: "+error);
			}
		);
		
	}
	let grasses = 0;
	while (grasses < 500){
		let grssX = Math.floor(Math.random() * 1000)-500;
		let grssZ = Math.floor(Math.random() * 1000)-500;
		let raio = 200;
		let tryAgain = true;
		let tryTimes = 0;
		while(tryAgain == true){
			if( tryTimes < 2 && Math.sqrt(Math.pow(-grssX, 2) + Math.pow(-grssZ, 2)) > raio){
				grssX = Math.floor(Math.random() * 1000)-500;
				grssZ = Math.floor(Math.random() * 1000)-500;
				tryTimes = tryTimes + 1;
			} else {
				tryAgain = false;
			}
		}
		grasses = grasses + 1;
		fbxLoader.load(
			'assets/floresta/Grass/FBX Files/Grass.fbx',
			function(obj){ //função executada após o loading
				obj.traverse(
					function (child){
						if (child instanceof THREE.Mesh){
							child.castShadow = true;
							child.receiveShadow = true;
						}
					}
				);
				obj.scale.x = 0.1;
				obj.scale.y = 0.1;
				obj.scale.z = 0.1;

				obj.position.x = grssX;
				obj.position.y = -13.5;
				obj.position.z = grssZ;

				obj.rotation.y = -Math.PI/Math.floor(Math.random() * 10);

				scene.add(obj);
				elements['gramas'][grasses] = obj;

			},
			function (andamento){ //função executada durante o loading
				console.log(andamento.loaded/andamento.total*100 + "%");
			},
			function(error){//função executada se deu problema
				console.log("Deu erro: "+error);
			}
		);
		
	}

	let flowers = 0;
	while (flowers < 500){
		let flrX = Math.floor(Math.random() * 1000)-500;
		let flrZ = Math.floor(Math.random() * 1000)-500;
		let raio = 200;
		let tryAgain = true;
		let tryTimes = 0;
		while(tryAgain == true){
			if( tryTimes < 3 && Math.sqrt(Math.pow(-flrX, 2) + Math.pow(-flrZ, 2)) > raio){
				flrX = Math.floor(Math.random() * 1000)-500;
				flrZ = Math.floor(Math.random() * 1000)-500;
				tryTimes = tryTimes +1;
			} else {
				tryAgain = false;
			}
		}
		flowers = flowers + 1;
		let random = Math.floor(Math.random() * 10);
		fbxLoader.load(
			flowersPath[random][0],
			function(obj){ //função executada após o loading
				obj.traverse(
					function (child){
						if (child instanceof THREE.Mesh){
							child.castShadow = true;
							child.receiveShadow = true;
						}
					}
				);
				obj.scale.x = 0.1;
				obj.scale.y = 0.1;
				obj.scale.z = 0.1;

				obj.position.x = flrX;
				obj.position.y = flowersPath[random][1];
				obj.position.z = flrZ;

				obj.rotation.y = -Math.PI/Math.floor(Math.random() * 10);

				scene.add(obj);
				elements['flowers'][flowers] = obj;

			},
			function (andamento){ //função executada durante o loading
				console.log(andamento.loaded/andamento.total*100 + "%");
			},
			function(error){//função executada se deu problema
				console.log("Deu erro: "+error);
			}
		);
		
	}
	let cogumelos = 0;
	while (cogumelos < 150){
		let cgmX = Math.floor(Math.random() * 1000)-500;
		let cgmZ = Math.floor(Math.random() * 1000)-500;
		let raio = 200;
		let tryAgain = true;
		let tryTimes = 0;
		while(tryAgain == true){
			if( tryTimes < 3 && Math.sqrt(Math.pow(-cgmX, 2) + Math.pow(-cgmZ, 2)) > raio){
				cgmX = Math.floor(Math.random() * 1000)-500;
				cgmZ = Math.floor(Math.random() * 1000)-500;
				tryTimes = tryTimes +1;
			} else {
				tryAgain = false;
			}
		}
		cogumelos = cogumelos + 1;
		let random = Math.floor(Math.random() * 10);
		fbxLoader.load(
			cogumelosPath[random][0],
			function(obj){ //função executada após o loading
				obj.traverse(
					function (child){
						if (child instanceof THREE.Mesh){
							child.castShadow = true;
							child.receiveShadow = true;
						}
					}
				);
				obj.scale.x = 0.1;
				obj.scale.y = 0.1;
				obj.scale.z = 0.1;

				obj.position.x = cgmX;
				obj.position.y = cogumelosPath[random][1];
				obj.position.z = cgmZ;

				obj.rotation.y = -Math.PI/Math.floor(Math.random() * 10);

				scene.add(obj);
				elements['cogumelos'][cogumelos] = obj;

			},
			function (andamento){ //função executada durante o loading
				console.log(andamento.loaded/andamento.total*100 + "%");
			},
			function(error){//função executada se deu problema
				console.log("Deu erro: "+error);
			}
		);
		
	}
	let bushes = 0;
	while (bushes < 50){
		let bshX = Math.floor(Math.random() * 1000)-500;
		let bshZ = Math.floor(Math.random() * 1000)-500;
		let raio = 200;
		let tryAgain = true;
		let tryTimes = 0;
		while(tryAgain == true){
			if( tryTimes < 3 && Math.sqrt(Math.pow(-bshX, 2) + Math.pow(-bshZ, 2)) > raio){
				bshX = Math.floor(Math.random() * 1000)-500;
				bshZ = Math.floor(Math.random() * 1000)-500;
				tryTimes = tryTimes +1;
			} else {
				tryAgain = false;
			}
		}
		bushes = bushes + 1;
		let random = Math.floor(Math.random() * 10);
		fbxLoader.load(
			bushesPath[random][0],
			function(obj){ //função executada após o loading
				obj.traverse(
					function (child){
						if (child instanceof THREE.Mesh){
							child.castShadow = true;
							child.receiveShadow = true;
						}
					}
				);
				obj.scale.x = 0.1;
				obj.scale.y = 0.1;
				obj.scale.z = 0.1;

				obj.position.x = bshX;
				obj.position.y = bushesPath[random][1];
				obj.position.z = bshZ;

				obj.rotation.y = -Math.PI/Math.floor(Math.random() * 10);

				scene.add(obj);
				elements['bushes'][bushes] = obj;

			},
			function (andamento){ //função executada durante o loading
				console.log(andamento.loaded/andamento.total*100 + "%");
			},
			function(error){//função executada se deu problema
				console.log("Deu erro: "+error);
			}
		);
		
	}
	let stones = 0;
	while (stones < 50){
		let stnX = Math.floor(Math.random() * 1000)-500;
		let stnZ = Math.floor(Math.random() * 1000)-500;
		let raio = 200;
		let tryAgain = true;
		let tryTimes = 0;
		while(tryAgain == true){
			if( tryTimes < 3 && Math.sqrt(Math.pow(-stnX, 2) + Math.pow(-stnZ, 2)) > raio){
				stnX = Math.floor(Math.random() * 1000)-500;
				stnZ = Math.floor(Math.random() * 1000)-500;
				tryTimes = tryTimes +1;
			} else {
				tryAgain = false;
			}
		}
		stones = stones + 1;
		let random = Math.floor(Math.random() * 10);
		fbxLoader.load(
			stonesPath[random][0],
			function(obj){ //função executada após o loading
				obj.traverse(
					function (child){
						if (child instanceof THREE.Mesh){
							child.castShadow = true;
							child.receiveShadow = true;
						}
					}
				);
				obj.scale.x = 0.1;
				obj.scale.y = 0.1;
				obj.scale.z = 0.1;

				obj.position.x = stnX;
				obj.position.y = stonesPath[random][1];
				obj.position.z = stnZ;

				obj.rotation.y = -Math.PI/Math.floor(Math.random() * 10);

				scene.add(obj);
				elements['stones'][stones] = obj;

				obj.children[0].geometry.computeBoundingBox();
				let objBox = new THREE.Box3().setFromObject(obj);
				elementosCena.push(objBox);
				collidableMeshList.push(obj.children[0]);
			},
			function (andamento){ //função executada durante o loading
				console.log(andamento.loaded/andamento.total*100 + "%");
			},
			function(error){//função executada se deu problema
				console.log("Deu erro: "+error);
			}
		);
		
	}

	fbxLoader.load(
		'assets/esqueleto/skeleton.fbx',//o que carregar
		function(obj){ //função executada após o loading
			console.log("Lobinho");
			obj.traverse(
				function (child){
					if (child instanceof THREE.Mesh){
						let texture = textLoader.load('assets/esqueleto/Textures/LPolyPallete.png');
						child.material = new THREE.MeshStandardMaterial({map: texture});
						child.castShadow = true;
						child.receiveShadow = true;
						// console.log(child);
					}
				}
			);

			obj.castShadow = true;
			obj.scale.x = 0.13;
			obj.scale.y = 0.13;
			obj.scale.z = 0.13;

			
			
			
			
			mixer = new THREE.AnimationMixer(obj);
			let animacao;

			animacao = mixer.clipAction(obj.animations[0]);
			animationArray.push(animacao);
			animacaoAtiva = animacao;

			animacao = mixer.clipAction(obj.animations[1]);
			animationArray.push(animacao);

			animacao = mixer.clipAction(obj.animations[2]);
			animationArray.push(animacao);

			animacao = mixer.clipAction(obj.animations[3]);
			animationArray.push(animacao);

			animacao = mixer.clipAction(obj.animations[4]);
			animationArray.push(animacao);
			
			animacao = mixer.clipAction(obj.animations[5]);
			animationArray.push(animacao);

			trocaAnimacao[animationArray[4]];

			console.log(obj.animations);

			charGroup = new THREE.Group();
			charGroup.add(obj);
			charGroup.add(camera);

			obj.position.z = camera.position. z -40;
			obj.position.y = -14;

			obj.rotation.y = Math.PI; 

			scene.add(charGroup);

	
			loboCarregado = true;
			charBox = new THREE.Box3().setFromObject(obj);
			elements['esqueleto'] = obj;
			console.log("Carregou esqueleto!");
			scene.add(charBox);
			
			

			elementosCena.push(objBox);
		},
		function (andamento){ //função executada durante o loading
			console.log(andamento.loaded/andamento.total*100 + "%");
		},
		function(error){//função executada se deu problema
			console.log("Deu erro: "+error);
		}
	);

}

var locomocao = function(){
	if(locomoverEsqueleto){
		if (camera){
			direcao = camera.getWorldDirection(new THREE.Vector3(0,0,0));
		
			if (keyPressed['W']){
				charGroup.position.z+=velociadadeChar*direcao.z;
				charGroup.position.x+=velociadadeChar*direcao.x;
			}else if (keyPressed['S']){
				charGroup.position.z-=velociadadeChar*direcao.z;
				charGroup.position.x-=velociadadeChar*direcao.x;
			}

		}
	}
}

var colisoes = function(tempo){
	let loboMordeu = false;
	elementosCena.forEach(function(box){
		console.log(isPointInsideAABB(elements['esqueleto'].position, box));
	});
	if (loboMordeu == true){
		console.log('ai ai um lobo me mordeu');
	} else {
		console.log('ai ai um lobo não me mordeu');
	}
}

function isPointInsideAABB(point, box) {
	return (point.x >= box.min.x && point.x <= box.max.x) &&
		   (point.z >= box.min.z && point.z <= box.max.z);
}

var animation = function (){

	requestAnimationFrame(animation); 
	
	let tempo = relogio.getDelta();
	locomocao();
	// if (locomoverEsqueleto){
	// 	camera.position.x = elements['esqueleto'].x;
	// 	camera.position.y = elements['esqueleto'].y;
	// 	camera.position.z = elements['esqueleto'].z;
	// }
	if (elements['sol'].position.x >= 400){
		if (day == true){
			elements['sol'].intensity = 0.1;
		} 
		day = !day;
		aurora = true;
		elements['sol'].position.x = -400;
	}
	if (day == true){
		if (aurora == true){
			if(elements['sol'].intensity > 1 ){
				aurora = !aurora;
			}
			elements['sol'].intensity += 0.0025;
		} else {
			elements['sol'].intensity -= 0.0025;
		}
	}
	//console.log(elements['sol'].position.x);
	elements['sol'].position.x += 1;
		
	if (loboCarregado && somCarregado){
		mixer.update(tempo);
		colisoes(tempo);
	}

	render.render(scene,camera); 
}

var lightPoint = function(){
	let point = new THREE.PointLight(0xfb37e1, 3, 200);

	//point.castShadow = true;

	point.position.set(0,0,0);

	scene.add(point);
}

var criaIluminacao = function (){
	scene.add(new THREE.AmbientLight(0xffffff, 1));
	//lightPoint();

	//sol:
	let sol = new THREE.DirectionalLight(0xffffff, 1, 1000);
	sol.castShadow = true;
	sol.shadow.mapSize.width = 4096;
	sol.shadow.mapSize.height = 4096;
	sol.shadow.camera.left = 1000;
	sol.shadow.camera.bottom = 1000;
	sol.shadow.camera.right = -1000
	sol.shadow.camera.top = -1000;
	sol.shadow.camera.far = 1000;
	scene.add(new THREE.DirectionalLightHelper(sol));
	sol.position.y = 900;
	sol.position.x = -400;
	sol.target.position.x = 0;
	sol.target.position.y = 0;
	sol.target.position.z = 0;
	sol.intensity = 0.1;
	elements['sol'] = sol;
	scene.add(sol);
	//fim sol

}

var carregaSomFundo = function(){
	const audioLoader = new THREE.AudioLoader();
	audioLoader.load( 'assets/SFX/022815townbgm.wav', 
	function( buffer ) {
		soundBack.setBuffer( buffer ); //carrega a musica que vai ser tocada
		soundBack.setLoop( true ); //diz que a musica vai ficar em loop
		soundBack.setVolume( 0.1 ); // seta o volume
		soundBack.play(); //começa a dar play
		somCarregado = true;
		console.log("parece que foi!");
	});
}


var init = function (){
	scene = new THREE.Scene();
    scene.background = new THREE.Color(0x00b0ff);
	camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight, 0.1, 5000);
    
	render = new THREE.WebGLRenderer();
    render.shadowMap.enabled = true;
	
	// render.gammaInput = true;
    // render.gammaOutput = true;

	render.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(render.domElement);

	camera.position.z = 70;
	camera.position.y = 10;
	camera.position.x = 0;

	camera.rotation.x = Math.PI * (-1/16);

	
    createGui();

    loadObjects();
    
    criaIluminacao();

	animation();	
	locomoverEsqueleto = true;

	// Inicializa o som.
	listener = new THREE.AudioListener();
	camera.add( listener );
	soundBack = new THREE.Audio( listener );

	let textLoader = new THREE.TextureLoader();
	let textureGround = textLoader.load('assets/grasslight-big.jpg');
	textureGround.wrapS = textureGround.wrapT = THREE.RepeatWrapping;
	textureGround.repeat.set(250,250);
	textureGround.anisotropy = 16;
	textureGround.encoding = THREE.sRGBEncoding;
	let materialGround = new THREE.MeshLambertMaterial({map: textureGround});
	let ground = new THREE.Mesh(new THREE.PlaneBufferGeometry(1000,1000),
	materialGround);
	
	elements['ground'] = ground;
	ground.rotation.x = -Math.PI/2;
    ground.position.y-=14;
	ground.receiveShadow = true;
	scene.add(ground);

	document.addEventListener('keydown', onKeyDown); 
	document.addEventListener('keyup', onKeyUp); 
    
    document.addEventListener('mousemove', movimentaMouse);
    document.addEventListener('mouseup', soltaClick);
    document.addEventListener('mousedown', click);
}

var estaClicando = false;
var click = function(){
	estaClicando = true;
}
var soltaClick = function(){
	estaClicando = false;
	if (!somCarregado) carregaSomFundo();
}
var MouseAnterior = {
	x:0,
	y:0
};
var movimentaMouse = function(e){
	let difMouse = {
		x: e.offsetX - MouseAnterior.x,
		y: e.offsetY - MouseAnterior.y
	}
	if (estaClicando){
		let rotacaoElemento = new THREE.Quaternion().setFromEuler( new THREE.Euler(0, paraRadianos(difMouse.x)*0.1, 0, 'XYZ'));
		let rotacaoCamera = new THREE.Quaternion().setFromEuler( new THREE.Euler(paraRadianos(difMouse.y)*0.1, 0, 0, 'XYZ'));
		if (locomoverEsqueleto){
			camera.quaternion.multiplyQuaternions(rotacaoCamera, camera.quaternion);
			charGroup.quaternion.multiplyQuaternions(rotacaoElemento, charGroup.quaternion);
		} else {
			camera.quaternion.multiplyQuaternions(rotacaoElemento, camera.quaternion);
		}
	}
	MouseAnterior = {
		x:e.offsetX,
		y:e.offsetY
	};
}
var paraRadianos = function (valor){
	return valor *(Math.PI/180);
}

var keyPressed = []; 

keyPressed['R'] = false;
keyPressed['S'] = false;
keyPressed['W'] = false;
keyPressed['A'] = false;
keyPressed['D'] = false;



var onKeyUp = function (e){
	console.log("Soltei: " + e.keyCode);

	//Solução elegante -> keyPressed[e.keyCode] = false;

	if (e.keyCode == 82){ //tecla R
		keyPressed['R'] = false;
		console.log(elementosCena);
	}

	if (e.keyCode == 87){ //tecla w
		keyPressed['W'] = false;
		trocaAnimacao(animationArray[4]);
	}

	if (e.keyCode == 83){ //tecla s
		keyPressed['S'] = false;
		trocaAnimacao(animationArray[4]);
	}

}


var onKeyDown = function (e){
	//console.log(e.keyCode);
	if (loboCarregado){

		if (e.keyCode == 32){ //tecla espaço
			trocaAnimacao(animationArray[1]);
		}
		
		/* TECLAS DE MOVIMENTAÇÃO */
		if (e.keyCode == 87){ //tecla w
			keyPressed['W'] = true;
			trocaAnimacao(animationArray[5]);
		}

		if (e.keyCode == 83){ //tecla s
			keyPressed['S'] = true;
			trocaAnimacao(animationArray[5]);
			animacaoAtiva.timeScale=-1;
		}

		if (e.keyCode == 82){ // R
			keyPressed["R"] = true;
			
		}
	}
}

window.onload = this.init;
