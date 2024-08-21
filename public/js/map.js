var map = new maplibregl.Map({
    container: 'map',
    style: 'https://api.maptiler.com/maps/streets/style.json?key=2tOsR36f6L1ZrLKWUy8q', // stylesheet location
    center: listing.geometry.coordinates, // starting position [lng, lat]
    zoom: 9// starting zoom
  });

  
  const marker = new maplibregl.Marker({color: "red"})
          .setLngLat(listing.geometry.coordinates)
          .setPopup(new maplibregl.Popup({offset: 25})
          .setHTML(`<h4>${listing.title}, ${listing.location}</h4><p>Precise location shared upon booking.</p>`))
          .addTo(map);
    