import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router'

export default function navMobile(){
    const router = useRouter()
    return(
        <div className='w-full px-4 lg:px-10 py-4 background-navMobile shadow-md' >
            <Link href="/"><a><h1 className={`cursor-pointer py-1 ${router.asPath == '/'?'border-b-2 border-gray-900':null}`}>Inicio</h1></a></Link>
            <Link href="/criosfera"><a><h1 className={`cursor-pointer py-1 ${router.asPath == '/criosfera'?'border-b-2 border-gray-900':null}`}>Criósfera</h1></a></Link>
            <Link href="/clima"><a><h1 className={`cursor-pointer py-1 ${router.asPath == '/clima'?'border-b-2 border-gray-900':null}`}>Clima</h1></a></Link>
            <Link href="/seguridadhidrica"><a><h1 className={`cursor-pointer py-1 ${router.asPath == '/seguridadhidrica'?'border-b-2 border-gray-900':null}`}>Seguridad Hídrica</h1></a></Link>
            <Link href="/visor"><a><h1 className={`cursor-pointer py-1 ${router.asPath == '/visor'?'border-b-2 border-gray-900':null}`}>Visor de mapas</h1></a></Link>
        </div>
    );
}