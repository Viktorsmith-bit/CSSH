export default function Header(){
    return(
        <div className='section'>
            <div className='flex justify-center px-4 py-10 lg:py-20'>
                <div className='flex flex-col-reverse lg:flex-row flex-wrap md:max-w-2xl lg:max-w-7xl'>
                    <div className="w-full lg:flex-1">
                        <img className="cover" src="/fondos/TrabajosModelamiento_Permafrost.jpeg" />
                    </div>
                    <div className="flex w-full lg:flex-1 lg:justify-end items-center pb-10 lg:pb-0 lg:height">
                        <div className="flex-1 lg:max-w-xl">
                            <h1 className="font-extrabold text-2xl lg:text-2xl text-center lg:text-start">Resumen</h1>
                            <div className="h-0.5 w-20 bg-gray-900 mt-3 mx-auto lg:mx-0"></div>
                            <h1 className="mt-5 text-justify">El grupo de investigación Criósfera, Clima y Seguridad Hídrica investiga el análsis de la dinámica glaciar, clima y la disponibilidad hídrica en la Cordillera Blanca en Perú y con aplicación en la Isla del Rey George en la Antártida, nuestra investigación integra disciplinas como las Ciencias Naturales y Sociales para comprender cómo los sistemas ambientales y socioambientales responden al cambio climático. Este proyecto busca desarrollar otros métodos más novedosos para su evaluación basados en la teledetección e inteligencia artificial.</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center px-4 py-10 lg:py-20 background-color'>
                <div className='flex flex-wrap md:max-w-2xl lg:max-w-7xl'>
                    <div className="flex w-full lg:flex-1 lg:justify-start items-center pb-10 lg:pb-0 lg:height">
                        <div className="flex-1 lg:max-w-xl">
                            <h1 className="font-extrabold text-2xl lg:text-2xl">Ámbito de estudio</h1>
                            <div className="h-0.5 w-20 bg-gray-900 mt-3"></div>
                            <h1 className="mt-5 text-justify">El grupo de investigación Criósfera, Clima y Seguridad Hídrica investiga el análsis de la dinámica glaciar, clima y la disponibilidad hídrica en la Cordillera Blanca en Perú y con aplicación en la Isla del Rey George en la Antártida, nuestra investigación integra disciplinas como las Ciencias Naturales y Sociales para comprender cómo los sistemas ambientales y socioambientales responden al cambio climático. Este proyecto busca desarrollar otros métodos más novedosos para su evaluación basados en la teledetección e inteligencia artificial.</h1>
                            <button className='bg-gray-800 text-white rounded-md mt-5 px-10 py-4'>Ver mapa</button>
                        </div>
                    </div>
                    <div className="w-full lg:flex-1">
                        <img className="cover" src="/fondos/TrabajosModelamiento_Permafrost.jpeg" />
                    </div>
                </div>
            </div>
        </div>
    )
}