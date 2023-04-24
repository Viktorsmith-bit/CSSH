import Nav from '../../../../shared/nav/nav';
import Team from './componentes/equipo/team';
import Imagenes from './componentes/galeria/imagenes';
import Header from './componentes/seccion/header';
import Informacion from './componentes/seccion/informacion';
import DatoGeneral from './componentes/seccion/datos.general';
import Produccion from './componentes/produccion/produccion';
import Footer from '../../../../shared/footer/footer';

export default function IATGlaciar(){
    return(
        <div className='section'>
            <Nav />
            <Header />
            <DatoGeneral />
            <Informacion />
            <Produccion />
            <Team />
            <Imagenes />
            <Footer />
        </div>
    )
}