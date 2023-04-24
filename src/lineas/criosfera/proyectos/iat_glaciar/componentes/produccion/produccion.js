import { listaTesis } from "./lista/lista.tesis";
import React from 'react';
import Link from 'next/link';

export default function Produccion(){
    return(
        <div className='flex justify-center py-16 px-4 lg:px-0'>
            <div className='flex-1 max-w-7xl'>
                <div className="flex-1 lg:max-w-xl">
                    <h1 className="font-extrabold text-2xl">Producción científica</h1>
                    <div className="h-0.5 w-20 bg-gray-900 mt-3"></div>
                </div>
                <div className='flex flex-wrap justify-start gap-2 lg:gap-4 mt-10'>
                    {
                        listaTesis.map((item)=>{
                            return <div key={item.id} className='flex flex-col background-color rounded-md width-perfil p-5 border border-gray-300'>
                                            <h1 className='flex justify-between items-center'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="blue" class="bi bi-folder" viewBox="0 0 16 16">
                                                    <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z"/>
                                                </svg>
                                                <Link href={`/criosfera/iat_glaciar/produccion/${item.ruta}`} >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="cursor-pointer bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                                                        <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                                                    </svg>
                                                </Link>
                                            </h1>
                                            <div className='container mt-5'>
                                                <h1 className='text-sm lg:text-base text-color font-bold'>{item.titulo}</h1>
                                                <h1 className='text-sm text-gray-700 text-color '>{item.tipo}</h1>
                                            </div>
                                <div className='mb-auto mt-5'>
                                    <h1 className='text-sm text-gray-700 text-color'><span className="font-bold">Tesista:</span> {item.tesista}</h1>
                                    <h1 className='text-sm text-gray-700 text-color mt-1'><span className="font-bold">Universidad:</span> {item.universidad}</h1>
                                    <h1 className='text-sm text-gray-700 text-color mt-1'><span className="font-bold">Asesor:</span> {item.asesor}</h1>
                                    <h1 className='text-sm text-gray-700 text-color mt-1'><span className="font-bold">Co-Asesor:</span> {item.co_asesor}</h1>
                                    <h1 className='text-sm text-gray-700 text-color mt-1'><span className="font-bold">Estado:</span> {item.estado}</h1>
                                    <a href={item.link} target="_blank"><h1 className={`text-sm text-gray-700 text-color mt-1 ${item.link === null?"hidden":"block"}`}><span className="font-bold">Enlace:</span> <span className='green-color font-bold'>Ver publicación</span></h1></a>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
}