import { useState } from 'react';
import { listaImagenes } from './lista/lista.imagenes';
import ModalImagenes from './modal.imagenes';

export default function Adaptacion(){
    const [state, setState] = useState({open:false});
    const [item, setItem] = useState({idItem:''});

    function openModal(e){
        e.preventDefault();
        setItem({
            idItem: e.target.id
        })
        setState({
            open:true
        })
        const x = document.getElementsByTagName('BODY')[0];
        x.style.overflow = 'hidden';
        document.oncontextmenu = function(){
            return false
        }
    }

    function closeModal(e){
        e.preventDefault();
        setState({open:false})
        const x = document.getElementsByTagName('BODY')[0];
        x.style.overflow = 'visible';
    }

    return(
        <div className='pb-10'>
            <div className='flex justify-center px-4 lg:px-0'>
                <div className='flex-1 max-w-7xl'>
                    <div className="flex-1 max-w-xl">
                        <h1 className="font-extrabold text-2xl">Imágenes</h1>
                        <div className="h-0.5 w-20 bg-gray-900 mt-3"></div>
                    </div>
                </div>
            </div>
            <div className='py-10'>
                {
                    !state.open?null:<ModalImagenes close={closeModal} idItem={item.idItem}/>
                }
                <div className='flex justify-center'>
                    <div className='flex flex-1 justify-center lg:justify-between flex-wrap w-full lg:max-w-7xl gap-3 px-4 lg:px-0'>
                        {
                            listaImagenes.map((item)=>{
                                return <div className='relative'>
                                            <img id={item.id} onClick={openModal} className='cover galeria cursor-pointer' src={`${item.url}`} />
                                            <div onClick={openModal} className='absolute bottom-0 left-0 opacity flex items-center px-4 h-16 w-full cursor-pointer'>
                                                <h1 className='text-bold'>{item.nombre}</h1>
                                            </div>
                                        </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
        
    );
}