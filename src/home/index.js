import Nav from '../shared/nav/nav';
import Footer from '../shared/footer/footer';
import Link from 'next/link';

export default function Home(){
    return(
        <div className='section'>
            <Nav />
            <div className='flex'>
                <div className='flex w-full lg:flex-1 justify-center items-center background-color lg:py-32'>
                    <div className='flex-1 w-full md:max-w-2xl lg:max-w-xl px-4 py-10 md:px-0 lg:px-0 lg:py-0'>
                        <h1 className='font-extrabold text-3xl lg:text-5xl w-32 border-b-2 pb-3 border-gray-800'>CCSH</h1>
                        <h1 className='font-extrabold text-3xl lg:text-5xl mt-3'>GRUPO DE INVESTIGACIÓN CRIÓSFERA, CLIMA Y SEGURIDDAD HÍDRICA</h1>
                        <h1 className='mt-3'>Análisis de la dinámica glaciar, clima y disponibilidad hídrica.</h1>
                        
                    </div>
                </div>
                <div className='flex-1 image-criosfera hidden lg:block'></div>
            </div>
            <div className='flex justify-center px-4 py-10 lg:py-20'>
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
            <div className='flex justify-center px-4 py-10 lg:py-20 background-color'>
                <div className='flex lg:flex-row flex-wrap md:max-w-2xl lg:max-w-7xl'>
                    <div className="flex w-full lg:flex-1 justify-start items-center pb-10 lg:pb-0 lg:height">
                        <div className="flex-1 lg:max-w-xl">
                            <h1 className="font-extrabold text-2xl lg:text-3xl">¿Quienes somos?</h1>
                            <div className="h-0.5 w-20 bg-gray-900 mt-3"></div>
                            <div className='flex gap-3 mt-3'>
                                <h1 className='text-color text-sm'>UNASAM</h1>
                                <h1 className='text-color text-sm'>ANA</h1>
                                <h1 className='text-color text-sm'>UV</h1>
                                <h1 className='text-color text-sm'>UGA</h1>
                            </div>
                            <h1 className="mt-5 text-justify">El grupo de investigación Criósfera, Clima y Seguridad Hídrica investiga el análsis de la dinámica glaciar, clima y la disponibilidad hídrica en la Cordillera Blanca en Perú y con aplicación en la Isla del Rey George en la Antártida, nuestra investigación integra disciplinas como las Ciencias Naturales y Sociales para comprender cómo los sistemas ambientales y socioambientales responden al cambio climático. Este proyecto busca desarrollar otros métodos más novedosos para su evaluación basados en la teledetección e inteligencia artificial.</h1>
                        </div>
                    </div>
                    <div className="w-full lg:flex-1">
                        <img className="cover" src="/fondos/TrabajosModelamiento_Permafrost.jpeg" />
                    </div>
                </div>
            </div>
            <div className='flex justify-center px-4 py-10 lg:py-20'>
                <div className='flex flex-col-reverse lg:flex-row flex-wrap md:max-w-2xl lg:max-w-7xl'>
                    <div className="w-full lg:flex-1">
                        <img className="cover" src="/fondos/TrabajosModelamiento_Permafrost.jpeg" />
                    </div>
                    <div className="flex w-full lg:flex-1 lg:justify-end items-center pb-10 lg:pb-0 lg:height">
                        <div className="flex-1 lg:max-w-xl">
                            <h1 className="font-extrabold text-2xl lg:text-3xl">¿Qué hacemos?</h1>
                            <div className="h-0.5 w-20 bg-gray-900 mt-3"></div>
                            <h1 className="mt-5 text-justify">El grupo de investigación Criósfera, Clima y Seguridad Hídrica investiga el análsis de la dinámica glaciar, clima y la disponibilidad hídrica en la Cordillera Blanca en Perú y con aplicación en la Isla del Rey George en la Antártida, nuestra investigación integra disciplinas como las Ciencias Naturales y Sociales para comprender cómo los sistemas ambientales y socioambientales responden al cambio climático. Este proyecto busca desarrollar otros métodos más novedosos para su evaluación basados en la teledetección e inteligencia artificial.</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center px-4 md:px-0 lg:px-0 py-10 lg:py-20 background-color'>
                <div className='flex-1 w-full md:max-w-2xl lg:max-w-7xl'>
                    <h1 className='text-center font-extrabold text-2xl lg:text-3xl'>Nuestras líneas de investigación</h1>
                    <div className="h-0.5 w-20 bg-gray-900 mt-3 mx-auto"></div>
                    <div className='flex flex-col lg:flex-row lg:flex-wrap justify-center lg:justify-between gap-5 lg:gap-0 mt-10'>
                        <Link href='/criosfera'>
                            <div className='relative cursor-pointer'>
                                <img className='cover w-full lg:w-96 h-72' src='/section/Criosfera.jpg'/>
                                <h1 className='absolute left-1/3 top-1/2 bg-white px-5 py-3 rounded-md opacity'>Criósfera</h1>
                            </div>
                        </Link>
                        <Link href='/clima'>
                            <div className='relative cursor-pointer'>
                                <img className='cover w-full lg:w-96 h-72' src='/section/Clima.jpg'/>
                                <h1 className='absolute left-1/3 top-1/2 bg-white px-5 py-3 rounded-md opacity'>Clima</h1>
                            </div>
                        </Link>
                        <Link href='/seguridadhidrica'>
                            <div className='relative cursor-pointer'>
                                <img className='cover w-full lg:w-96 h-72' src='/section/SeguridadHidrica_Paron.jpg'/>
                                <h1 className='absolute left-1/3 top-1/2 bg-white px-5 py-3 rounded-md opacity'>Seguridad Hídrica</h1>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='flex justify-center px-4 py-10 lg:px-0 lg:py-20'>
                <div className='flex flex-wrap flex-1 w-full md:max-w-2xl lg:max-w-7xl'>
                    <div className="flex w-full lg:flex-1 lg:justify-start items-center py-0 lg:py-16 lg:border-r border-gray-800">
                        <div className="flex-1 lg:max-w-xl">
                            <h1 className="font-extrabold text-2xl lg:text-3xl text-center">Visión</h1>
                            <div className="h-0.5 w-20 bg-gray-900 mt-3 mx-auto"></div>
                            <h1 className="mt-5 text-justify text-color">El grupo de investigación Criósfera, Clima y Seguridad Hídrica investiga el análsis de la dinámica glaciar, clima y la disponibilidad hídrica en la Cordillera Blanca en Perú y con aplicación en la Isla del Rey George en la Antártida, nuestra investigación integra disciplinas como las Ciencias Naturales y Sociales para comprender cómo los sistemas ambientales y socioambientales responden al cambio climático. Este proyecto busca desarrollar otros métodos más novedosos para su evaluación basados en la teledetección e inteligencia artificial.</h1>
                        </div>
                    </div>
                    <div className="flex w-full lg:flex-1 lg:justify-end items-center py-0 lg:py-16 mt-10 lg:mt-0">
                        <div className="flex-1 lg:max-w-xl">
                            <h1 className="font-extrabold text-2xl lg:text-3xl text-center">Misión</h1>
                            <div className="h-0.5 w-20 bg-gray-900 mt-3 mx-auto"></div>
                            <h1 className="mt-5 text-justify text-color">El grupo de investigación Criósfera, Clima y Seguridad Hídrica investiga el análsis de la dinámica glaciar, clima y la disponibilidad hídrica en la Cordillera Blanca en Perú y con aplicación en la Isla del Rey George en la Antártida, nuestra investigación integra disciplinas como las Ciencias Naturales y Sociales para comprender cómo los sistemas ambientales y socioambientales responden al cambio climático. Este proyecto busca desarrollar otros métodos más novedosos para su evaluación basados en la teledetección e inteligencia artificial.</h1>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}