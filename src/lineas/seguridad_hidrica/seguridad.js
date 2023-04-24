import Nav from '../../shared/nav/nav';
import Link from "next/link";
import Footer from '../../shared/footer/footer';

export default function Home() {
  return (
    <div className='nav'>
        <Nav />
        <div className='image-seguridad'>
            <div className='flex max-w-7xl mx-auto items-center height-header'>
                <div className='flex-1 w-full md:max-w-2xl lg:max-w-3xl p-4 lg:p-8 bg-white rounded-md opacity'>
                    <h1 className='font-extrabold text-4xl lg:text-6xl mt-2'>SEGURIDAD HÍDRICA</h1>
                    <div className="h-0.5 w-20 bg-gray-900 mt-3"></div>
                    <h1 className='mt-3'>Análisis de la dinámica glaciar, clima y disponibilidad hídrica.</h1>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}
