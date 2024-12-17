import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';

let customIcon = '';
if(typeof window !== 'undefined'){
  customIcon = new L.icon({
    iconUrl: '/pin.png',
    iconSize: [32, 32], // Size of the icon
    iconAnchor: [12, 55], // Point of the icon which will correspond to marker's location
    popupAnchor: [0, -55] // Point from which the popup should open relative to the iconAnchor
  });
}

const AddressMap = () => {
  return (
    <>
    <MapContainer center={[52.52, 13.405]} zoom={7} scrollWheelZoom={false} style={{ height: '650px', width: '100%' }}>
        <TileLayer
          url='https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png'
        />
    </MapContainer>
    </>
  );
};

export default AddressMap;
