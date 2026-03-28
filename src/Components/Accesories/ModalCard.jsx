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
            autoClose: 2000,
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
        <div className="bg-white  transition duration-300 overflow-hidden group ">
            {/* Discount Badge */}
            <div className="absolute mt-3 ml-3 bg-red-500 text-white text-xs px-2 py-1 rounded-md z-10">
                -10%
            </div>

            {/* Image */}
            <div className="bg-gray-100 h-44 flex items-center justify-center overflow-hidden">
                <img
                    src={item.image}
                    alt={item.name}
                    className="h-32 object-contain transition duration-300 group-hover:scale-110"
                />
            </div>

            {/* Content */}
            <div className="p-4 space-y-2">

                {/* Title */}
                <h2 className="text-sm font-semibold text-gray-800 ">
                    {item.name}
                </h2>

                {/* Description */}
                <p className="text-xs text-gray-500 line-clamp-2">
                    {item.description}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1 text-yellow-500 text-xs">
                    {"*".repeat(Math.floor(item.rating))}
                    <span className="text-gray-500 ml-1">({item.rating})</span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2">
                    <p className="text-lg font-bold text-black">
                        ৳ {item.price}
                    </p>
                    <p className="text-sm text-gray-400 line-through">
                        ৳ {Math.round(item.price * 1.1)}
                    </p>
                </div>

                {/* Stock */}
                <p className="text-xs text-gray-400">
                    Stock: {item.stock}
                </p>

                {/* Button */}
                {
                    item.id
                }

                <form method="dialog">

                    {
                        !isExist ? <button
                            onClick={handleAddCart}
                            className="w-full mt-2 bg-black text-white py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition">
                            Add to Cart
                        </button> : <button
                            onClick={() => handleRemove(item)}
                            className="w-full mt-2 bg-black text-white py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition"> Remove from Cart </button>
                    }

                </form>

            </div>
        </div>
    );
};

export default ModalCard;