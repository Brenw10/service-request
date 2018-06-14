function getWaypoints(locations) {
  return locations.reduce((sum, actual, index, array) => {
    if (index !== 0 && index !== array.length - 1) {
      sum.push({
        location: new window.google.maps.LatLng(actual.lat(), actual.lng())
      });
    }
    return sum;
  }, []);
}

function getDirectionsServiceConfig(locations) {
  const length = locations.length;
  const waypoints = getWaypoints(locations);
  return {
    origin: new window.google.maps.LatLng(locations[0].lat(), locations[0].lng()),
    destination: new window.google.maps.LatLng(locations[length - 1].lat(), locations[length - 1].lng()),
    travelMode: window.google.maps.TravelMode.BICYCLING,
    waypoints,
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

export default { getDirectionsService, getDirectionsServiceConfig }