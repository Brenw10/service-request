function getWaypoints(locations) {
  const waypoints = locations.filter((_, index) => index !== 0 && index !== locations.length - 1);
  return waypoints.map(value => ({ location: new window.google.maps.LatLng(value.lat(), value.lng()) }));
}

function getDirectionsServiceConfig(locations) {
  return {
    origin: new window.google.maps.LatLng(locations[0].lat(), locations[0].lng()),
    destination: new window.google.maps.LatLng(locations[locations.length - 1].lat(), locations[locations.length - 1].lng()),
    travelMode: window.google.maps.TravelMode.BICYCLING,
    waypoints: getWaypoints(locations),
  };
}

function getDirectionsService(config) {
  return new Promise(resolve => {
    const DirectionsService = new window.google.maps.DirectionsService();
    DirectionsService.route(config, (result, status) => {
      if (status === window.google.maps.DirectionsStatus.OK) {
        resolve(result);
      }
    });
  });
}

export default {
  getDirectionsService,
  getDirectionsServiceConfig,
}