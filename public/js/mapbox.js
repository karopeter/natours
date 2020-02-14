export const displayMap = (locations) => {
  mapboxgl.accessToken = 'pk.eyJ1Ijoia2Fyb3BldGVyIiwiYSI6ImNrNjZ5MXFuZDAydGwzbW1xb2x5Nmx0dG4ifQ.wvUufwmEtKDCjRAPT_R1Rw';
  
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/karopeter/ck66ywkvd18vv1io7x6fljrgv',
    scrollZoom: false
  //   center: [-118.178347,34.048674],
  //   zoom: 10,
  //   interactive: false
  });
  
  const bounds = new mapboxgl.LngLatBounds();
  
  locations.forEach(loc => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';
  
   // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    }).setLngLat(loc.coordinates).addTo(map);
  
    // Add popup
    new mapboxgl.Popup({
      offset: 30
    }).setLngLat(loc.coordinates).setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`).addTo(map);
  
    // Extends map bounds to include current location
    bounds.extend(loc.coordinates);
  });
  
  map.fitBounds(bounds, {
      padding: {
        top: 200,
        bottom: 150,
        left: 100,
        right: 100
      }
    });
};