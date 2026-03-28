import React, { use } from 'react';
import AccesoryCard from './AccesoryCard';

const Accesories = ({ dataPromise, setCart, cart }) => {
    const accesories = use(dataPromise)
    // console.log(accesories);

    return (
        <div className='container mx-auto my-5'>
            <h1 className='text-2xl font-bold'>Accesories: </h1>
            <div className='grid grid-cols-5 gap-5'>
                {
                    accesories.map(item => <AccesoryCard cart={cart} setCart={setCart}  item={item} />)
                }
            </div>
        </div>
    );
};

export default Accesories;