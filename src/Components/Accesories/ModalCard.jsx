import React from 'react';
import { FcRating } from 'react-icons/fc';
import { Bounce, toast } from 'react-toastify';

const ModalCard = ({ item, setCart, cart, handleRemove }) => {

    const isExist = cart.find(i => i.id === item.id)
    const handleAddCart = () => {
        if (isExist) {
            return
        }
        setCart([...cart, item])
        toast.success(`${item.name} successfuly added to cart`, {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });
    }

    return (
        <div className="group bg-white rounded-2xl  hover:border-blue-500/30 transition-all duration-300 overflow-hidden flex flex-col h-full">
            {/* Image Section - Ektu padding add kora hoyeche */}
            <div className="relative bg-gray-50/50 p-6 h-48 flex items-center justify-center overflow-hidden">
                {/* Discount Badge */}
                <div className="absolute top-3 left-3 bg-rose-500 text-white text-[10px] font-bold px-2 py-1 rounded-lg z-10 shadow-sm">
                    -10%
                </div>
                <img
                    src={item.image}
                    alt={item.name}
                    className="h-full object-contain transition duration-500 group-hover:scale-110"
                />
            </div>
            {/* Content */}
            <div className="p-4 flex flex-col flex-grow">
                {/* Category + Brand */}
                <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] text-blue-600 font-bold uppercase tracking-wider">{item.category}</span>
                    <span className="text-[11px] font-medium text-gray-700">Brand: {item.brand}</span>
                </div>

                {/* Title */}
                <h2 className="text-sm font-bold text-gray-800 line-clamp-2 min-h-[40px] group-hover:text-blue-600 transition-colors">
                    {item.name}
                </h2>
                <p className='text-gray-600'>{item.description}</p>

                {/* Rating */}
                <div className="flex items-center gap-1 text-amber-400 text-xs mt-1">
                    {"★".repeat(Math.floor(item.rating))}
                    <span className="text-gray-400 font-medium ml-0.5">({item.rating})</span>
                </div>

                {/* Price - Ektu bold look */}
                <div className="flex items-center gap-2 mt-3 mb-4">
                    <p className="text-xl font-black text-gray-900">
                        ৳{item.price}
                    </p>
                    <p className="text-xs text-gray-400 line-through">
                        ৳{Math.round(item.price * 1.1)}
                    </p>
                </div>

                {/* Button - Full focus e */}

                <form method="dialog" >
                    <div className="mt-auto">
                        {
                            !isExist ? (
                                <button
                                    onClick={handleAddCart}
                                    className="w-full bg-gray-900 text-white py-2.5 rounded-xl text-xs font-bold hover:bg-blue-600 transition-all active:scale-95">
                                    ADD TO CART
                                </button>
                            ) : (
                                <button
                                    onClick={() => handleRemove(item)}
                                    className="w-full bg-rose-50 text-rose-600 py-2.5 rounded-xl text-xs font-bold hover:bg-rose-500 hover:text-white transition-all active:scale-95">
                                    REMOVE ITEM
                                </button>
                            )
                        }
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModalCard;