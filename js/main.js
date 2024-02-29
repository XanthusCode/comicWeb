document.addEventListener("DOMContentLoaded", function() {
    // Datos de personajes de Marvel
    const personajesMarvel = [
        { 
            nombre: "Ant man", 
            imagen: "./img/marvel/ant-man.jpg", 
            descripcion: "Ant-Man es el alter ego de Scott Lang, actualmente. Scott Lang, por su parte, es un ladronzuelo que se roba el traje para salvar a su hija Cassie Lang de una condición cardíaca." 
        },{ 
            nombre: "Black Panter", 
            imagen: "./img/marvel/black-panter.jpg", 
            descripcion: "Su verdadero nombre es T'Challa, y es el rey y protector de la nación africana ficticia llamada Wakanda. Sus poderes los obtuvo a través de un ritual en su país natal." 
        },{ 
            nombre: "Black Widow", 
            imagen: "./img/marvel/black-widow.jpg",
            descripcion: "Black Widow, conocida también como Natasha Romanoff, es una asesina entrenada de origen ruso. En su primera aparición en los cómics, era una antagonista para el personaje de Iron Man, pero luego se trasladó a los Estados Unidos y se unió a SHIELD." 
        },{ 
            nombre: "Capitan America", 
            imagen: "./img/marvel/capitan-america.jpg",
            descripcion: "Capitán América es el alter ego de Steve Rogers, un soldado americano que fue modificado genéticamente para producir un «supersoldado» patriótico. Steve Rogers permaneció en animación suspendida, congelado, luego de los sucesos en la Segunda Guerra Mundial." 
        },{ 
            nombre: "Deadpool", 
            imagen: "./img/marvel/deadpool.jpg", 
            descripcion: "Deadpool es el alter ego de Wade Wilson. Es el personaje que más rompe la cuarta pared de los cómics, hablando con el público y haciendo chistes de la cultura pop." 
        },{ 
            nombre: "Doctor Doom",
            imagen: "./img/marvel/doctor-doom.jpg", 
            descripcion: "El Doctor Victor Von Doom es un supervillano asociado con el grupo de superhéroes Los Cuatro Fantásticos. Sus medios siempre son justificables para él, y cree que muchas de sus decisiones son «nobles».También tiene habilidades con la hechicería." 
        },{ 
            nombre: "Doctor Strange", 
            imagen: "./img/marvel/doctor-strange.jpg", 
            descripcion: "Stephen Strange, que adopta el seudónimo de Doctor Strange, solía ser un cirujano egocéntrico. Eventualmente, Strange se transforma en el Hechicero Supremo y dirige el Sanctum Sanctorum." 
        },{ 
            nombre: "Falcon", 
            imagen: "./img/marvel/falcon.jpg", 
            descripcion: "Sam Wilson es oficialmente, el primer superhéroe afroamericano en los cómics populares. En su identidad de Falcon, usa alas mecánicas para volar, y tiene poderes telepáticos limitados hacia las aves. Luego de que Steve Rogers se retirase como Capitán América, es Falcon quien lo sucede." 
        },{ 
            nombre: "Hulk", 
            imagen: "./img/marvel/hulk.jpg", 
            descripcion: "The Hulk es el alter ego de Bruce Banner. El humanoide Hulk cuenta con una fuerza sin límites, tiene la piel verde y es enorme y musculoso. Es uno de los personajes más fácilmente reconocibles e icónicos de la cultura popular, inspirando mercancía e incluso estructuras del mundo real, como su propia montaña rua." 
        },{ 
            nombre: "Iron Man", 
            imagen: "./img/marvel/iron-man.jpg", 
            descripcion: "Iron Man es el alter-ego de Tony Stark, un filántropo multimillonario que, luego de un secuestro, debe construir un aparato para mantenerse con vida. Originalmente, el personaje fue originado para explorar los temas de la guerra fría y el impacto de la tecnología americana en la lucha contra el comunismo." 
        },{ 
            nombre: "Loki", 
            imagen: "./img/marvel/loki.jpg", 
            descripcion: "Basado en el dios nódrico, Loki es el «dios del engaño». Luego de que sus travesuras adolescentes se transformaran en sed de poder y malicia, se transformó en el «Dios del Mal»." 
        },{ 
            nombre: "Profesor X", 
            imagen: "./img/marvel/profesorX.jpg", 
            descripcion: "Es miembro de la subespecie humana llamada mutantes, con habilidades telepáticas. Fundó una escuela que entrena a mutantes de todas partes del mundo, y su sueño es encontrar un punto medio donde la humanidad y los mutantes puedan coexistir en paz." 
        },{ 
            nombre: "Spiderman", 
            imagen: "./img/marvel/spiderman.jpg", 
            descripcion: "Spider-Man es el alter ego de Peter Parker, un joven de Queens que fue mordido por una araña radioactiva y obtuvo poderes similares a los del arácnido. Spider-Man fue uno de los primeros héroes protagonistas adolescentes, cosa que lo hizo muy popular de inmediato." 
        },{ 
            nombre: "Thor", 
            imagen: "./img/marvel/thor.jpg", 
            descripcion: "Thor Odinson, conocido simplemente como Thor, es el dios del trueno asgardiano, basado en la mitología nórdica. Thor fue interpretado por Chris Hemsworth en el MCU, donde se explora su relación con su hermano adoptivo, Loki." 
        },{ 
            nombre: "Wolverine", 
            imagen: "./img/marvel/wolverine.jpg", 
            descripcion: "El verdadero nombre de Wolverine es James Howlett, pero su alias más conocido es Logan. El personaje está asociado con los X-Men, y es un mutante. Cuenta con un sentido casi animal, sus habilidades físicas son sobrehumanas, y se regenera muy rápidamente. Pero su característica más conocida es las tres garras de acero que tiene en cada mano.Logan ha sido uno de los antihéroes más importantes y populares del MCU." 
        },
    ];

    // Datos de personajes de DC Comics
    const personajesDC = [
        { 
            nombre: "Aqua Man", 
            imagen: "./img/dc/aquaman.webp",
            descripcion: 'Gracias a la interpretación del cómic de Super Friends y a varios efectos secundarios, Aquaman puede ser para siempre el blanco de los chistes de la cultura pop. Aquaman no sólo es más fuerte y más capaz que cualquier otra persona nadando kilómetros bajo la superficie del océano, sino que también es el líder del vasto reino submarino de la Atlántida. El mayor atractivo de Aquaman es que su lealtad se pone a prueba constantemente.'
        },{ 
            nombre: "Batman", 
            imagen: "./img/dc/batman.webp", 
            descripcion: 'Desde 1939, los fans han quedado fascinados por la historia de un hombre que se disfraza de murciélago para asustar a los criminales. Es una historia que está en todos los medios. Sólo tiene la capacidad, los medios y, lo más importante, la determinación para librar una guerra él solo contra el crimen. Y es un testimonio de esa decisión que nadie cuestiona si Batman tiene lo necesario para enfrentarse al resto de la Liga de la Justicia.'
        },{ 
            nombre: "Booster Goold", 
            imagen: "./img/dc/booster-gold.webp", 
            descripcion: 'Por supuesto, la idea es robar un montón de gadgets y retroceder en el tiempo para demostrar que eres el héroe más grande del mundo. Mientras tanto, la gente del Universo DC no ve a Booster Gold como el superhéroe que creen que es. La combinación de humor tonto y acción sarcástica siempre hace que las desventuras de Booster sean divertidas de leer.' 
        },{ 
            nombre: "Cyborg", 
            imagen: "./img/dc/cyborg.webp",  
            descripcion: "Salió de un accidente casi fatal para convertirse en uno de los más grandes de una nueva generación de héroes entre los Teen Titans. Olvída su fuerza y ​​armamento avanzado: la capacidad de Cyborg para conectarse a las redes de computadoras lo convierte en uno de los héroes más formidables de la Tierra.La fama de Cyborg ya estaba en aumento gracias a la serie animada Teen Titans."
        },{ 
            nombre: "Flash", 
            imagen: "./img/dc/flash.webp", 
            descripcion: 'Barry Allen debutó en 1956, coincidiendo con el inicio de la Edad de Plata de DC Comics. Barry asume el papel de The Flash del héroe de la Edad de Oro Jay Garrick. Es uno de los superhéroes más nuevos de DC, gracias a sus habilidades de velocidad ilimitada, sus increíbles viajes a través del tiempo y el espacio y su lucha interminable por equilibrar los intereses de las celebridades y la vida profesional. Árbol.' 
        },{
            nombre: "Flecha Verde", 
            imagen: "./img/dc/flecha-verde.webp", 
            descripcion:'Green Arrow comenzó como uno de los miles de personajes de Batman. Green Arrow es uno de los miembros más estables de la Sociedad de Abogados. Esta serie tendrá tanto impacto en la presencia de DC en Hollywood como las películas El Hombre de Acero y El Caballero Oscuro.' 
        },{ 
            nombre: "Hawkgirl", 
            imagen: "./img/dc/hawkgirl.webp",  
            descripcion:'Más que solo ser la compañera de Hawkman, Hawkgirl se ha establecido como una heroína igual e incluso superior a su tocayo.'
        },{ 
            nombre: "Jonah Hex", 
            imagen: "./img/dc/jonah-Hex.webp", 
            descripcion: 'Jonah Hex no es el único héroe vaquero de DC, pero ha sido el más popular desde su presentación en 1972. Quizás porque era un guerrero experimentado, la maravillosa experiencia espiritual fue tan simple como un cuento del Lejano Oeste.' 
    
        },{ 
            nombre: "Linterna Verde", 
            imagen: "./img/dc/linterna-verde.webp", 
            descripcion: 'En términos de personalidad y apariencia, Kyle no es diferente de Hal. Sin embargo, logró hacerlo y se convirtió en Linterna Verde durante diez años. A pesar de la recuperación de Hal y su regreso al deber, Kyle sigue siendo un guerrero poderoso y uno de los pocos héroes dignos de usar el anillo de White Lantern.' 
    
        },{ 
            nombre: "Detective Marciano", 
            imagen: "./img/dc/martian-manhunter.webp", 
            descripcion: 'El origen de Superman es bastante trágico, pero al menos todavía era un niño cuando fue expulsado de su mundo condenado. Jon Jones vio a su familia, su gente y toda la cultura de Marsina arder ante sus ojos. Jon es un miembro habitual de la Liga de la Justicia en el cómic y la serie animada, y suponemos que es sólo cuestión de tiempo antes de que aparezca en la pantalla grande.' 
        },{ 
            nombre: "Shazam", 
            imagen: "./img/dc/shazam.webp", 
            descripcion: 'El héroe anteriormente conocido como Capitán Marvel (las batallas legales convencieron a DC de cambiar su nombre), fue una vez más popular que Batman o Superman. Los jóvenes lectores se identificaron con el concepto de un niño común que podría transformarse en el Mortal más poderoso del mundo simplemente pronunciando la palabra "¡Shazam!" Superman era como un padre, pero el Capitán Marvel era más como un hermano.' 
        },{ 
            nombre: "StarFire", 
            imagen: "./img/dc/starfire.webp", 
            descripcion: 'La princesa extraterrestre espiritual vino a la Tierra y se convirtió en uno de los principales miembros de los Jóvenes Titanes en la década de 1980. Los Jóvenes Titanes eran un grupo que a menudo rivalizaba en popularidad con los X-Men. Desde entonces, sigue siendo un pilar de los Titanes.'
        },{ 
            nombre: "Superman", 
            imagen: "./img/dc/superman.webp",
            descripcion: 'Tiene un origen trágico, casi bíblico: un bebé es enviado de un planeta condenado, es adoptado por una pareja humana y crece para convertirse en el principal defensor de la verdad, la justicia y el estilo de vida estadounidense. Pero lo que hace grande a Superman es que no se sigue el "estilo de vida americano". Se preocupa por todos, sin importar credo, color o nacionalidad. Se ha convertido en un ícono internacional.' 
        },{ 
            nombre: "Wonder Woman", 
            imagen: "./img/dc/wonder-woman.webp",
            descripcion: 'Wonder Woman, una de las primeras superhéroes femeninas, ha sido un ícono de DC desde su debut en 1940. Wonder Woman ha sido miembro fundador de la Liga de la Justicia en casi todas las encarnaciones del Universo DC. Ha sido un ícono feminista durante décadas.' 
        },{ 
            nombre: "La Cosa del Pantano", 
            imagen: "./img/dc/swamp-thing.webp", 
            descripcion:'La versión de DC más popular es Swamp Thing. Desde entonces, Swamp Thing ha luchado contra la fuerza vital conocida como The Green One y se pregunta si es un humano convertido en monstruo o simplemente un monstruo que se cree humano.' 
        },
    ];

    // Función para crear elementos de personaje
    function crearPersonaje(personaje) {
        const productContainer = document.createElement('div');
        productContainer.classList.add('product-container');

        const product = document.createElement('div');
        product.classList.add('pro');

        const imageLink = document.createElement('a');
        imageLink.href = '#';

        const image = document.createElement('img');
        image.src = personaje.imagen;
        image.alt = personaje.nombre;

        const description = document.createElement('div');
        description.classList.add('des');
        description.innerHTML = `<span>${personaje.nombre}</span>`;

        const button = document.createElement('button');
        button.classList.add('button');
        button.textContent = 'Ver Más';

        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.style.display = 'none';

        const modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');

        const closeButton = document.createElement('span');
        closeButton.classList.add('close');
        closeButton.textContent = 'Regresar';

        const details = document.createElement('p');
        details.textContent = personaje.descripcion;
        

        modalContent.appendChild(closeButton)
        modalContent.appendChild(details)
        modal.appendChild(modalContent)

        imageLink.appendChild(image);
        product.appendChild(imageLink);
        product.appendChild(description);
        product.appendChild(button);
        product.appendChild(modal);
        productContainer.appendChild(product);

    
        // Agrega el evento clic al botón "Ver Más"
        button.addEventListener('click', function(event) {
            event.preventDefault();
            modal.style.display = 'block';
            modal.style.top = '50%';
            modal.style.left = '50%';
            modal.style.transform = 'translate(-50%, -50%)'; 
        
            const modalImage = document.createElement('img');
            modalImage.src = personaje.imagen;
            modalImage.alt = personaje.nombre;

            const existingImage = modalContent.querySelector('img');
            if (existingImage) {
                modalContent.removeChild(existingImage);
            }

            modalContent.appendChild(modalImage);

        });

       closeButton.addEventListener('click', function(){
        modal.style.display = 'none';
       });

        return productContainer;
    }


// Función para agregar personajes al contenedor
    function agregarPersonajes(personajes, contenedor) {
        personajes.forEach(function(personaje) {
            const personajeElemento = crearPersonaje(personaje);
            contenedor.appendChild(personajeElemento);
        });
    }

    const marvelContainer = document.querySelector('.products');
    const dcContainer = document.querySelector('.dc-products');

    // Agrega los personajes de Marvel y DC Comics a sus respectivos contenedores
    agregarPersonajes(personajesMarvel, marvelContainer);
    agregarPersonajes(personajesDC, dcContainer);

    const marvelButton = document.querySelector('.marvel');
    const dcButton = document.querySelector('.button-dc');
    const marvelSection = document.getElementById('product1');
    const dcSection = document.getElementById('dcCharacters');
    const all = document.querySelector('.all')

    marvelButton.addEventListener('click', function() {
        marvelSection.style.display = 'block';
        dcSection.style.display = 'none';
    });

    dcButton.addEventListener('click', function() {
        marvelSection.style.display = 'none';
        dcSection.style.display = 'block';
    });

    all.addEventListener('click', function() {
        marvelSection.style.display = 'block';
        dcSection.style.display = 'block';
    });

    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', function(event) {
        const searchTerm = event.target.value.toLowerCase().trim(); 

        const filterMarvelCharacters = personajesMarvel.filter(personaje => {
            return personaje.nombre.toLowerCase().includes(searchTerm);
        });
        marvelContainer.innerHTML = ''; 
        agregarPersonajes(filterMarvelCharacters, marvelContainer); 

        const filteredDCCharacters = personajesDC.filter(personaje => {
            return personaje.nombre.toLowerCase().includes(searchTerm);
        });
        dcContainer.innerHTML = ''; 
        agregarPersonajes(filteredDCCharacters, dcContainer); 
    });
});