export default function Footer(){
    return(
        <div className="flex justify-center px-4 md:px-0 lg:px-0 py-10 lg:py-20 background-color">
            <div className="flex flex-wrap justify-between w-full lg:flex-1 md:max-w-2xl lg:max-w-7xl">
                <div className='w-full lg:flex-1 w-full md:max-w-2xl lg:max-w-sm'>
                    <h1 className='font-extrabold text-xl'>UNASAM</h1>
                    <div className="h-0.5 w-20 bg-gray-900 mt-3"></div>
                    <h1 className='text-base mt-3'>Universidad Nacional Santiago Antúnez de Mayolo</h1>
                    <h1 className='text-base'>Facultad Ciencias del Ambiente</h1>
                    <h1 className='text-base'>mesadepartesfcam@unasam.edu.pe</h1>
                    <h1 className='text-base'>Cuidad Universitaria</h1>
                    <h1 className='text-base'>Av. Universitaria s/n - Shancayán - Independencia</h1>
                </div>
                <div className='w-full lg:flex-1 w-full md:max-w-2xl lg:max-w-sm mt-5 lg:mt-0'>
                    <h1 className='font-extrabold text-xl'>CCSH</h1>
                    <div className="h-0.5 w-20 bg-gray-900 mt-3"></div>
                    <h1 className='text-base mt-3'>Grupo de Investigación Criósfera, Clima y Seguridad Hídrica</h1>
                    <h1 className='text-base'>ccsh@unasam.edu.pe</h1>
                    <h1 className='text-base'>Av. Centenario Nro. 200 - Independencia</h1>
                </div>
                <div className='w-full lg:flex-1 w-full md:max-w-2xl lg:max-w-sm mt-5 lg:mt-0'>
                    <h1 className='font-extrabold text-xl'>Investigador principal</h1>
                    <div className="h-0.5 w-20 bg-gray-900 mt-3"></div>
                    <h1 className='text-base mt-3'>MSc. Edwin A. Loarte Cadenas</h1>
                    <h1 className='text-base'>Docente e investigador</h1>
                    <h1 className='text-base'>Facultad Ciencias del Ambiente - UNASAM</h1>
                    <h1 className='text-base'>eloartec@unasam.edu.pe</h1>
                </div>
            </div>
        </div>
    )
}