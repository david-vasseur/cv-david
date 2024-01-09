import React, { useEffect, useRef } from 'react';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import OSM from 'ol/source/OSM';
import VectorSource from 'ol/source/Vector';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj';
import { Icon, Style } from 'ol/style';

const MapComponent = () => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    const center = fromLonLat([4.8017, 43.9434]);

    const osmLayer = new TileLayer({
      source: new OSM(),
    });

    const vectorLayer = new VectorLayer({
      source: new VectorSource(),
    });

    mapInstance.current = new Map({
      target: mapRef.current,
      layers: [osmLayer, vectorLayer],
      view: new View({
        center: center,
        zoom: 10,
      }),
    });

    const markerCoords = fromLonLat([4.8017, 43.9434]);

    const marker = new Feature(new Point(markerCoords));

    const markerStyle = new Style({
      image: new Icon({
        anchor: [0.5, 1.5],
        src: './media/address.png', // Ajoutez le chemin vers votre icône de marqueur
        
      }),
    });

    marker.setStyle(markerStyle);

    const vectorSource = vectorLayer.getSource();
    vectorSource.addFeature(marker);

    // Nettoyer la carte lors du démontage du composant
    return () => {
      if (mapInstance.current) {
        mapInstance.current.setTarget(null);
      }
    };
  }, []);

  return (
    <div ref={mapRef} style={{ width: '400px', height: '400px' }}>
      {/* Cette div avec la référence "mapRef" sera utilisée par OpenLayers pour afficher la carte */}
    </div>
  );
};

export default MapComponent;
