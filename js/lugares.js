lugaresModulo = (function () {
  let servicioLugares // Servicio para obtener lugares cercanos e información de lugares(como fotos, puntuación del lugar,etc).
  
  function autocompletar () {
      /* El circulo creado limita en un radio de 20.000mts los resultados del 
      autocompletado de google maps */

      const circuloLimite = new google.maps.Circle({
        map: mapa,
        center: mapa.getCenter(),
        radius: 20000,
        visible: false
      })
      
      const autocompleteOptions = {
        bounds: circuloLimite,
        componentRestrictions: { country: 'ar'}
      }
      
      const IdListaInput = ["direccion", "desde", "hasta", "agregar"]
      IdListaInput.forEach(elementId => {
  
        new google.maps.places.Autocomplete(
          document.getElementById(elementId), 
          autocompleteOptions)
      });
  }

    // Inicializo la variable servicioLugares y llamo a la función autocompletar
  function inicializar () {
    servicioLugares = new google.maps.places.PlacesService(mapa)
    autocompletar()
  }

    // Busca lugares con el tipo especificado en el campo de TipoDeLugar

  function buscarCerca (posicion) {
        /* El usuario selecciona el tipo de luagres cercanos que desea
        y también el radio (por ejemplo 3000mts) según su posición.
        nearbySearch de google se encarga de tomar estos datos 
        y devolver los resultados,  */
    const seleccionTipoDeLugar = document.getElementById('tipoDeLugar').value
    const seleccionRadio = document.getElementById('radio').value

    const request = {
      location: posicion,
      radius: seleccionRadio,
      type: seleccionTipoDeLugar
    }

    servicioLugares.nearbySearch(request, (results, status) => {
      marcadorModulo.marcarLugares(results, status)

    })

  }
  return {
    inicializar,
    buscarCerca
  }
})()
