let mapa

/* Variable posicionCentral con las coordenadas donde se va a centrar el mapa al inicializar */

const posicionCentral = {
  lat: -34.60372334498656,
  lng: -58.38164794526445
}

// Inicializa el mapa con un valor de zoom y una locación en el medio
function inicializarMapa () {
    //Constructor Map() pasando por parametro el elemento div "map" 
    //donde ubicara el mapa en la web 

    mapa = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: posicionCentral,
    });

  geocodificadorModulo.inicializar()
  marcadorModulo.inicializar()
  direccionesModulo.inicializar()
  lugaresModulo.inicializar()
  streetViewModulo.inicializar()
}
