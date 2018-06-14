export default {
  getDirectionsService(locations) {
    return new Promise(resolve => {
      const DirectionsService = new window.google.maps.DirectionsService();
      DirectionsService.route({
        origin: new window.google.maps.LatLng(41.8507300, -87.6512600),
        destination: new window.google.maps.LatLng(41.8525800, -87.6514100),
        travelMode: window.google.maps.TravelMode.DRIVING,
      }, (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          resolve(result);
        }
      });
    });
  }
}