import { createStore } from 'vuex'

export default createStore({
  state: {
	  turtleName: '',
    numProblem: 0,
    problems:[
      {estado: 'Viva', etapa: 'Adulta', razon: 'Temperaturas más altas podrían provocar que la arena se caliente, lo cual llevaría a un aumento de la proporción de crías hembra. ', descripcion: 'Llegamos a la adultos, pero no tenemos con quién echar acción.', urlImage: 'https://blogcostasalvaje.files.wordpress.com/2017/05/mg_3577tortuga-de-carey-1.jpg'},
      {estado: 'Muerta', etapa: 'Huevo', razon: 'Incluso una pequeña subida ya provocaría una gran pérdida del hábitat de playas de desove ', descripcion: 'Mamá tortuga no encontro un buen lugar para poner su nido.', urlImage: 'https://imagenes.elpais.com/resizer/rpLGWEp6DlTKoKbmyze803_UJpA=/414x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/3YFCXM6ZOSC36HURJSXQB53LGM.jpg'},
      {estado: 'Muerta', etapa: 'Bebé', razon: 'Con la construcción masiva en playas causan que las tortugas busquen hábitats que no están en condiciones para la crianza. ', descripcion: 'Haz nacido, pero la mala ubicación de tu nido ha echo que no puedas llegar al mar.', urlImage: 'http://3.bp.blogspot.com/-Sg7rv3WY3IM/UWPrY7XOHZI/AAAAAAAAHYE/UFd5Bhko83g/s1600/urbanizacionlitoral.gif'},
      {estado: 'Muerta', etapa: 'Huevo', razon: 'Más tormentas violentas podrían aumentar la probabilidad de inundación de sus nidos lo que reduciría la tasa de éxito de la anidación. ', descripcion: 'Una tormenta ah inundado tu nido.', urlImage: 'https://s.yimg.com/ny/api/res/1.2/l7z8Hnhx7I1dAaKGq3XwQQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNg--/https://s.yimg.com/uu/api/res/1.2/79ItoQCy1mNRpgKcNLm9jQ--~B/aD01MzM7dz04MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/es/reuters.com/28d080e188afa4d5ee91148690a80992'},
      {estado: 'muerta', etapa: 'Huevo', razon: 'Pueden causar estragos en las especies autóctonas al competir con ellas por espacio y comida, o actuar como depredadoras.', descripcion: 'Un perro se comio los huevos de tu nido.', urlImage: 'https://c8.alamy.com/compes/bgg1h7/la-excavacion-de-un-perro-salvaje-amenazadas-tortugas-olive-ridley-nido-buitre-negro-stand-by-esperando-su-turno-en-los-huevos-bgg1h7.jpg'},
      {estado: 'Viva', etapa: 'Jóven', razon: 'Los desechos sólidos, productos químicos y contaminantes de las actividades humanas llegan al mar, provocando lesiones, enfermedades e incluso la muerte de las tortugas marinas. ', descripcion: 'Los daños de la contaminación han bajado tus expectativas de vida.', urlImage: ''},
      {estado: 'Viva', etapa: 'Jóven', razon: 'Las tortugas pueden enredarse e ingerir los residuos marinos, lo que amenaza su capacidad de alimentación, crecimiento y, en consecuencia, su supervivencia.', descripcion: 'Los daños de la contaminación han bajado tus expectativas de vida.', urlImage: 'https://files.worldwildlife.org/wwfcmsprod/images/Turtle_and_Plastic_HERO/story_full_width/6g2l0nqbx3_Medium_WW260730.jpg'},
      {estado: 'Viva', etapa: 'Adulta', razon: 'Los choques con barcos son una de las principales fuentes reconocibles de traumatismo en las tortugas que aparecen perdidas o muertas en las playas del Mediterráneo. Las lesiones por hélices de barcos provocan la amputación de aletas, caparazones rotos, lesiones cerebrales y huesos rotos.', descripcion: 'Chocaste con un barco y la hélice te hizo un gran daño.', urlImage: 'https://c8.alamy.com/compes/2cprc1x/los-funcionarios-del-centro-de-rescate-de-tortugas-marinas-dekamer-inyectan-cera-de-abejas-en-la-concha-de-una-tortuga-marina-que-fue-herida-por-una-helice-de-barco-en-su-centro-en-la-playa-iztuzu-cerca-de-dalyan-en-la-provincia-de-mugla-turquia-18-de-julio-de-2018-reuters-umit-bektas-busca-bektas-tortugas-para-esta-historia-busque-imagen-mas-amplia-para-todas-las-historias-2cprc1x.jpg'},
      {estado: 'Muerta', etapa: 'Adulta', razon: 'Las tortugas marinas se ahogan al quedar atrapadas en las redes de arrastre y al ser aplastadas o no poder subir a la superficie para respirar.', descripcion: 'Haz sido capturada por accidente en una red, no puedes volver a respirar a la superficie.', urlImage: 'https://espesca.com/wp-content/uploads/La-pesca-de-arrastre-redes-y-artes-ESPESCA.jpg'},
      {estado: 'Muerta', etapa: 'Adulta', razon: 'Se trata de un método de pesca destructivo que arrasan todo tipo de vida ya que aplastan o atrapan organismos que descansan o se alimentan al fondo del mar.', descripcion: 'Haz sido capturada mientras descansabas en el elcho oceánico y fuiste aplastada por una draga.', urlImage: 'https://img.europapress.es/fotoweb/fotonoticia_20191112115943_420.jpg'},
      {estado: 'Viva', etapa: 'Jöven', razon: 'Las tortugas de mar se enredan en las redes y como las tortugas marinas tienen que salir a la superficie para respirar, pueden morir si permanecen demasiado tiempo bajo el agua.', descripcion: 'Te haz atorado en una red a la deriva, lograste escapar pero recibiste fuertes daños.', urlImage: 'https://www.ecoticias.com/wp-content/uploads/2022/01/JUKH_fsdfsqwdasdas.jpg'},
      {estado: 'Viva', etapa: 'Jóven', razon: 'Las capturas accidentales con las redes de cerco siguen siendo un problema para las tortugas y otras especies marinas como los delfines o tiburones.', descripcion: 'Haz sido capturada, te han liberado pero recibiste fuertes daños provocados por la red.', urlImage: 'https://www.mallorcadiario.com/fotos/1/uploads/2014/05/atun-rojo-cerco.jpg'}
    ]
  },
  getters: {
    getTurtleName(state){
      return state.turtleName;
    },
    getProblem(state){
      let num = state.numProblem;
      return state.problems[num];
    }
  },
  mutations: {
    startApp(state, name){
      state.numProblem = Math.round(Math.random()*state.problems.length);
      state.turtleName = name;
    }
  },
  actions: {
    startApp(state, name){
      state.commit("startApp", name);
    }
  },
  modules: {
  }
})