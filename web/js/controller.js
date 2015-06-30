
app.controller('tipos', ['$scope', function($scope){

	$scope.tipos = [

		{ imagen: 'img/tipos/gouda.jpg',
		  espef: 'Gouda', 
		  titulo: 'De leche de vaca', 
		  texto: 'Es la más usada en la fabricación de quesos y los ejemplos más conocidos son el Gouda y el Emmental, con texturas, sabores y colores parecidos. La leche de vaca le da al queso un sabor más suave, aunque depende de muchos otros factores y hay quesos de vaca de sabor muy fuerte como el Gorgonzola. Entera es muy rica en grasa, por eso es común usar leche descremada, sin embargo, la grasa es uno de los elementos que más influyen en el sabor y usar leche descremada es sinónimo de pérdida de sabor.  '
		},
		{ imagen: 'img/tipos/mozzarella.jpg',
		  espef: 'Mozarella', 
		  titulo: 'De leche de búfala', 
		  texto: 'La producción de leche de búfala ocupa el segundo lugar a nivel mundial en volumen producido, luego de la leche de vaca seguido por la cabra y oveja, que ocupan el tercer y cuarto lugar. Los principales países productores en el mundo son: India, Pakistán, China, Egipto e Italia. En Latinoamérica, Venezuela es el país de mayor producción y le sigue Brasil; en Argentina se empezó a producir en 1992 y su incremento es constante. Es nutritiva, de sabor levemente dulce y color muy blanco como la Mozzarella. '
		},
		{ imagen: 'img/tipos/crottin.jpg',
		  espef: 'Crottin', 
		  titulo: 'De leche de cabra', 
		  texto: 'Aunque la leche de vaca y la de cabra tienen contenidos grasos parecidos, la mayor proporción de ácidos grasos de la leche de cabra contribuye al característico sabor ácido del queso. Como se elabora a menudo en regiones donde la refrigeración no siempre está disponible, suelen tratarse con sal para mejorar su conservación, por eso la sal se relaciona con el queso de cabra especialmente en el caso del Feta que se conserva en salmuera. Otros ejemplos son el Crottin, el Chevrottin o el Quesillo.'
		},
		{ imagen: 'img/tipos/roquefort.jpg',
		  espef: 'Roquefort', 
		  titulo: 'De leche de oveja', 
		  texto: 'Tiene el doble de proteínas, materia grasa y un valor energético muy superior a la de la vaca, además de vitaminas, macrominerales y oligoelementos como hierro y calcio. Al ser muy rica en componentes queseros su rendimiento es mayor con respecto al de otras leches, como la de vaca y cabra. Con leche de oveja están hechos el Roquefort (aunque hay países donde lo hacen con leche de vaca), el Manchego, el Pecorino y el Idiazábal.  '
		},
		{ imagen: 'img/tipos/cabrales.jpg',
		  espef: 'Cabrales', 
		  titulo: 'De mezcla de leches', 
		  texto: 'A veces los quesos se hacen con mezclas de dos o más clases de leches procedentes de distintos animales (vaca, oveja o cabra) obteniendo un queso con un sabor más suave que el queso puro de un sólo animal y algo más acentuado que el queso de vaca. Los más conocidos son el Cabrales, el Mahonés y el Kasseri.  '
		}
	]
	
}]);


app.controller('tipoElaboracion', ['$scope', function($scope){

	$scope.tipos = [

		{ imagen: 'img/tipos/parmesano.jpg',
		  espef: 'Parmesano', 
		  titulo: 'Pasta dura', 
		  texto: 'Los quesos duros son de masa consistente, ideales para rallar o gratinar. Cuando aún no maduraron se pueden cortar en rodajas pero luego se usan rallados como el Sardo, el Provolone o el Parmesano. '
		},
		{ imagen: 'img/tipos/gruyere.jpg',
		  espef: 'Gruyére', 
		  titulo: 'Pasta semi-dura', 
		  texto: 'La mayoría de los quesos pertenecen a este grupo, son consistentes pero se pueden cortar en rodajas sin romperse como el Mar del Plata, el Fontina, el Edam, el Gruyére o el Gouda. '
		},
		{ imagen: 'img/tipos/camembert.jpg',
		  espef: 'Cammembert', 
		  titulo: 'Pasta blanda', 
		  texto: 'Son los del tipo cremoso y se usan para untar como el queso crema o doble crema, el Cammembert, el Brie, el Cottage. Se deben consumir rápido porque duran muy poco tiempo'
		},
		{ imagen: 'img/tipos/gorgonzola.jpg',
		  espef: 'Gorgonzola', 
		  titulo: 'Pasta semi-blanda', 
		  texto: 'Los quesos semiblandos, como la familia de los quesos azules son ideales para salsas de carnes rojas combinados con manzanas, uvas o peras. Su masa es quebradiza y tienden a desarmarse por su alto contenido de humedad. Por ejemplo el Roquefort, el Gorgonzola o el Cabrales.  '
		},
		{ imagen: 'img/tipos/cottage.jpg',
		  espef: 'Cottage', 
		  titulo: 'Pasta muy blanda', 
		  texto: 'Son los quesos frescos elaborados con poca cantidad de grasa, también conocidos como semidescremados o descremados, lo que no quiere decir que no tengan grasas, están presentes pero en menor cantidad como el Cottage.   '
		}
	]
	
}]);