import React, { Component } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
//import Creditos from './components/creditos';
//import Geoportal from './components/geoportal';
//import LeftAside from './components/leftAside';
//import Aside from './components/capas/aside';
//import Panoramicas from './components/panoramicas/panoramicas';

export default class MapViewer extends Component{
    constructor(props){
        super(props);
        this.state={
            map:"1",
            state:"",
            stateOpen:true,
            panam:"closePanam",
            corBlanca:"openCorBlanca",
            corNegra:"openCorNegra",
            corPeru:"openCorPeru",
            cuencaSanta:"openCuencaSanta",
            cuencaSantaCorte:"openCuencaSantaCorte",
            glaciares:"closeGlaciares",
            lagunas:"closeLagunas",
            puntosTrabajo:"openPuntosTrabajo"
        }
        this.openMap = this.openMap.bind(this);
        this.hundleClicOpen360 = this.hundleClicOpen360.bind(this);
        this.hundleClicClose360 = this.hundleClicClose360.bind(this);

    }

    openMap(e){e.preventDefault(), this.setState({map:e.target.id})}
    hundleClicOpen360(e){e.preventDefault(), this.setState({state:e.target.id}), this.setState({stateOpen:false})}
    hundleClicClose360 (e){e.preventDefault(), this.setState({stateOpen:true})}
    
    render(){
        return(
            <div className='h-screen border'>
                {/**<Geoportal /> */}
                {/**<LeftAside /> */}
                {/**
                 *  <Aside state={this.state} openMap={this.openMap} hundleClickOpen={this.hundleClickOpen} hundleClickClose={this.hundleClickClose}
                    hundleClickEstadoVisor={this.hundleClickEstadoVisor}
                />
                */}
                {/**
                 *{this.state.stateOpen?null:<Panoramicas hundleClicClose360={this.hundleClicClose360} state={this.state.state} />}
                */}
                <MapContainer center={[-9.114974922615183, -78.142071978681196]} zoom={8} scrollWheelZoom={true} >
                    {
                        this.state.map === "1"?<TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                        />:null
                    }
                    {
                        this.state.map === "2"?<TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
                        />:null
                    }
                    {
                        this.state.map === "3"?<TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />:null
                    }
                    {
                        this.state.map === "4"?<TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                        />:null
                    }
                    {
                        this.state.map === "5"?<TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://tile.osm.ch/switzerland/{z}/{x}/{y}.png"
                        />:null
                    }

                    {
                        this.state.map === "1"?<TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-hybrid/{z}/{x}/{y}{r}.{ext}"
                            ext='png'
                        />:null
                    }
                    {
                        this.state.map === "1"?<TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-labels/{z}/{x}/{y}{r}.{ext}"
                            ext='png'
                        />:null
                    }
                </MapContainer>
            </div>
        );
    }
}