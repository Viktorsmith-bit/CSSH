import { listaTeam } from "./lista/lista.team";
import React from 'react';
import Link from 'next/link';

export default function Team(){
    return(
        <div className='flex justify-center pb-16 px-4 lg:px-0'>
            <div className='flex-1 lg:max-w-7xl'>
                <div className="flex-1 lg:max-w-xl">
                    <h1 className="font-extrabold text-2xl">Equipo científico</h1>
                    <div className="h-0.5 w-20 bg-gray-900 mt-3"></div>
                </div>
                <div className='flex flex-wrap justify-center lg:justify-start gap-4 md:gap-2 lg:gap-4 mt-10'>
                    {
                        listaTeam.map((item)=>{
                            return  <div key={item.id} className='flex items-center width-perfil background-color rounded-md'>
                                        <Link href={`/criosfera/iat_glaciar/equipo/${item.ruta}`} ><div><img className='w-56 h-32 rounded-l-md cursor-pointer cover' src={`${item.foto}`}/></div></Link>
                                        <div className='w-full flex flex-col justify-center px-4'>
                                            <Link href={`/equipo-cientifico/nacional/${item.ruta}`}><h1 className='text-sm lg:text-base text-color font-bold cursor-pointer'>{item.name}</h1></Link>
                                            <h1 className='text-sm text-gray-700 text-color '>{item.profesion}</h1>
                                            <h1 className='text-sm text-gray-700 text-color '>{item.cargo}</h1>
                                        </div>
                                    </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
}