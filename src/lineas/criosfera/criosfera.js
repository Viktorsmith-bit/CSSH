import Nav from '../../shared/nav/nav';
import Link from "next/link";
import Footer from '../../shared/footer/footer';

export default function Home() {
  return (
    <div className='section'>
        <Nav />
        <div className='image-criosfera'>
            <div className='flex px-4 lg:px-0 lg:max-w-7xl mx-auto justify-center lg:justify-start py-36 lg:py-48'>
                <div className='flex-1 w-full md:max-w-2xl lg:max-w-xl p-4 lg:p-8 bg-white rounded-md opacity'>
                    <h1 className='font-extrabold text-4xl lg:text-6xl mt-2'>CRIÓSFERA</h1>
                    <div className="h-0.5 w-20 bg-gray-900 mt-3"></div>
                    <h1 className='mt-3'>Análisis de la dinámica glaciar, clima y disponibilidad hídrica.</h1>
                </div>
            </div>
        </div>
        <div className="section-criosfera">
            <div className='flex justify-center px-4 py-10 lg:py-20 background-color'>
                <div className='flex flex-col-reverse lg:flex-row flex-wrap md:max-w-2xl lg:max-w-7xl'>
                    <div className="w-full lg:flex-1">
                        <img className="cover" src="/fondos/TrabajosModelamiento_Permafrost.jpeg" />
                    </div>
                    <div className="flex w-full lg:flex-1 lg:justify-end items-center pb-10 lg:pb-0 lg:height">
                        <div className="flex-1 lg:max-w-xl">
                            <h1 className="font-extrabold text-2xl lg:text-3xl text-center lg:text-start">Resumen</h1>
                            <div className="h-0.5 w-20 bg-gray-900 mt-3 mx-auto lg:mx-0"></div>
                            <h1 className="mt-5 text-justify">El grupo de investigación Criósfera, Clima y Seguridad Hídrica investiga el análsis de la dinámica glaciar, clima y la disponibilidad hídrica en la Cordillera Blanca en Perú y con aplicación en la Isla del Rey George en la Antártida, nuestra investigación integra disciplinas como las Ciencias Naturales y Sociales para comprender cómo los sistemas ambientales y socioambientales responden al cambio climático. Este proyecto busca desarrollar otros métodos más novedosos para su evaluación basados en la teledetección e inteligencia artificial.</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center px-4 py-10 lg:py-20'>
                <div className='flex flex-col-reverse lg:flex-row flex-wrap md:max-w-2xl lg:max-w-7xl'>
                    <div className="flex w-full lg:flex-1 lg:justify-start items-center pb-10 lg:pb-0 lg:height">
                        <div className="flex-1 lg:max-w-xl">
                            <h1 className="font-extrabold text-2xl lg:text-3xl">¿Qué hacemos?</h1>
                            <div className="h-0.5 w-20 bg-gray-900 mt-3"></div>
                            <h1 className="mt-5 text-justify">El grupo de investigación Criósfera, Clima y Seguridad Hídrica investiga el análsis de la dinámica glaciar, clima y la disponibilidad hídrica en la Cordillera Blanca en Perú y con aplicación en la Isla del Rey George en la Antártida, nuestra investigación integra disciplinas como las Ciencias Naturales y Sociales para comprender cómo los sistemas ambientales y socioambientales responden al cambio climático. Este proyecto busca desarrollar otros métodos más novedosos para su evaluación basados en la teledetección e inteligencia artificial.</h1>
                        </div>
                    </div>
                    <div className="w-full lg:flex-1">
                        <img className="cover" src="/fondos/TrabajosModelamiento_Permafrost.jpeg" />
                    </div>
                </div>
            </div>
            <div className="flex justify-center py-20 background-color ">
                <div className="flex-1 max-w-7xl">
                    <h1 className="text-2xl font-extrabold text-center">Proyectos Actuales</h1>
                    <div className="h-0.5 w-24 bg-gray-900 mt-3 mx-auto"></div>
                    <div className="mt-10 flex flex-wrap gap-4">
                        <div>
                            <Link href="/criosfera/iat_glaciar"><img className="w-full lg:w-72 h-56 cover cursor-pointer rounded-t-md" src="/section/Criosfera.jpg" /></Link>
                            <Link href="/criosfera/iat_glaciar">
                                <div className="border border-gray-300 py-2 rounded-b-md">
                                    <h1 className="text-color text-center cursor-pointer font-bold">IAT_GLACIAR</h1>
                                    <h1 className="text-sm text-center">2023</h1>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <Link href="/criosfera/iat_glaciar"><img className="lg:w-72 h-56 cover cursor-pointer" src="/section/Criosfera.jpg" /></Link>
                            <Link href="/criosfera/iat_glaciar">
                                <div className="border border-gray-300 py-2">
                                    <h1 className="text-color text-center cursor-pointer font-bold">GLAES FOTOVIDEO</h1>
                                    <h1 className="text-sm text-center">2023</h1>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <Link href="/criosfera/iat_glaciar"><img className="lg:w-72 h-56 cover cursor-pointer" src="/section/Criosfera.jpg" /></Link>
                            <Link href="/criosfera/iat_glaciar">
                                <div className="border border-gray-300 py-2">
                                    <h1 className="text-color text-center cursor-pointer font-bold">MICRO DEBRIS-GLACIER</h1>
                                    <h1 className="text-sm text-center">2023</h1>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center py-20">
                <div className="flex-1 max-w-7xl">
                    <h1 className="text-2xl font-extrabold text-center">Proyectos Finalizados</h1>
                    <div className="h-0.5 w-24 bg-gray-900 mt-3 mx-auto"></div>
                    <div className="mt-10 flex flex-wrap gap-4">
                        <div>
                            <a href="https://perugrows.inaigem.gob.pe/" target="blank"><img className="lg:w-72 h-56 cover cursor-pointer" src="/fondos/GlaciarRocoso_SanFelix_20_3.jpeg" /></a>
                            <a href="https://perugrows.inaigem.gob.pe/" target="blank">
                                <div className="border border-gray-300 py-2">
                                    <h1 className="text-color text-center cursor-pointer font-bold">PERÚ GROWS</h1>
                                    <h1 className="text-sm text-center">2020</h1>
                                </div>
                            </a>
                        </div>
                        <div>
                            <a href="https://permafrost.inaigem.gob.pe/" target="blank"><img className="lg:w-72 h-56 cover cursor-pointer" src="/fondos/Nevado_Coropuna.jpeg" /></a>
                            <a href="https://permafrost.inaigem.gob.pe/" target="blank">
                                <div className="border border-gray-300 py-2">
                                    <h1 className="text-color text-center cursor-pointer font-bold">PERMAFROST</h1>
                                    <h1 className="text-sm text-center">2020</h1>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}
