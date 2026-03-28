import React from 'react';
import ModalCard from './ModalCard';
import { FaCheckCircle } from 'react-icons/fa';

const AccesoryCard = ({ item, setCart, cart, handleRemove }) => {
    // console.log(item);
    const isExist = cart.find(i => i.id === item.id)
    return (
        <div className="group relative bg-white rounded-t-lg border border-gray-100 shadow-lg hover:border-transparent hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 overflow-hidden flex flex-col h-full cursor-pointer"
            onClick={() => document.getElementById(`my_modal_${item.id}`).showModal()}>

            {/* Discount Badge */}
            <div className="absolute top-3 left-3 z-5">
                <span className="bg-red-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm uppercase tracking-wider">
                    -10% Off
                </span>
            </div>

            {/* Image Section */}
            <div className="relative aspect-square overflow-hidden bg-gray-50 flex items-center justify-center ">
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain transition duration-700 group-hover:scale-110 "
                />
                {/* Quick View Overlay (Optional) */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold py-2 px-4 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ">
                        Quick View
                    </span>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-5 flex flex-col flex-grow">
                {/* Category or Brand (Optional) */}
                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Electronic</span>
                {/* Title */}
                <h2 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-3 group-hover:text-red-600 transition-colors duration-300">
                    {item.name}
                </h2>

                {/* Price & Cart Status */}
                <div className="mt-auto">
                    <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-xl font-bold text-gray-900">৳{item.price}</span>
                        <span className="text-sm text-gray-400 line-through decoration-red-400/50">
                            ৳{Math.round(item.price * 1.1)}
                        </span>
                    </div>

                    {isExist && (
                        <div className="flex items-center justify-center gap-2 py-2 px-3 bg-green-50 text-green-700 rounded-xl border border-green-100 animate-fade-in">
                            <FaCheckCircle className="text-xs" />
                            <p className="text-[11px] font-bold uppercase tracking-tighter">Already in Cart</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Modal Section */}
            <dialog id={`my_modal_${item.id}`} className="modal backdrop-blur-md">
                <div className="modal-box max-w-2xl p-0 overflow-hidden rounded-3xl shadow-2xl border-none">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 z-50 bg-white/50 hover:bg-white">✕</button>
                    </form>
                    <div className="p-6">
                        <ModalCard item={item} handleRemove={handleRemove} cart={cart} setCart={setCart} />
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop bg-black/40">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
};

export default AccesoryCard;