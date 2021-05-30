streetViewModulo = (function () {
  let panorama // 'Visor' de StreetView

  async function inicializar () {
        /* Se posiciona el streetview de google maps en elemento div 'pano' 
        de el HTML, se asigna la posicion inicial de google.maps.Map() y luego, 
        setea el objeto panorama al mapa que creado. */
    panorama = await new google.maps.StreetViewPanorama(document.getElementById('pano'), {
      position: posicionCentral,
    })
    mapa.setStreetView(panorama) 
  }

    // Actualiza la ubicación del Panorama
  function fijarStreetView (ubicacion) {
        /* dada la nueva ubicacion elegida por el usuario la sete en el
        streetview "panorama". */
    panorama.setPosition(ubicacion)

  }

  return {
    inicializar,
    fijarStreetView
  }
})()
