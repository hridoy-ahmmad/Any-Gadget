import React from 'react';
import ModalCard from './ModalCard';

const AccesoryCard = ({ item, setCart, cart }) => {
    // console.log(item);
     const isExist = cart.find(i => i.id === item.id)
    return (
        <div
            onClick={() => document.getElementById(`my_modal_${item.id}`).showModal()}
            className="bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition duration-300 overflow-hidden group ">
            {/* Top Badge */}
            <div className="absolute mt-2 ml-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-md z-2">
                -10%
            </div>
            {/* Image */}
            <div className="bg-gray-100 h-26 flex items-center justify-center overflow-hidden">
                <img
                    src={item.image}
                    alt={item.name}
                    className="object-contain transition duration-300 group-hover:scale-110"
                />
            </div>
            {/* Content */}
            <div className="p-4 space-y-2">

                {/* Title */}
                <h2 className="text-sm font-medium text-gray-800 line-clamp-2">
                    {item.name}
                </h2>

                {/* Price */}
                <div className="flex items-center gap-2">
                    <p className="text-lg font-semibold text-black">
                        ৳ {item.price}
                    </p>
                    <p className="text-sm text-gray-400 line-through">
                        ৳ {Math.round(item.price * 1.1)}
                    </p>
                </div>
                {
                    isExist && <p className='text-sm text-gray-400 '>added as a cart item</p>
                }
            </div>

            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <dialog id={`my_modal_${item.id}`} className="modal hover:shadow-2xl">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm text-2xl btn-circle btn-ghost absolute right-2 top-2 m-5">✕</button>
                    </form>
                    {/* main Info */}
                    <ModalCard item={item} cart={cart} setCart={setCart} />
                </div>
            </dialog>
        </div>
    );
};

export default AccesoryCard;