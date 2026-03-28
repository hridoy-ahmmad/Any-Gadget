import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import CartItem from './CartItem';
import { BiShoppingBag } from 'react-icons/bi';
import { Bounce, toast } from 'react-toastify';


const Header = ({ cart, handleRemove, setCart }) => {
    // console.log(cart);

    const handleProceed = () => {

        if (cart.length == 0) {
            toast.info('no item added to cart', {
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
        } else {
            setCart([])
            toast.success(`Proceed Successful`, {
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
    }


    // let total = 0
    // for (let item of cart) {
    //     total = total + item.price
    // }

    const total = cart.reduce((total, item) => {
        return total + item.price
    }, 0)


    return (
        <div className="mx-auto">
            <div className="flex justify-center items-center mt-8">
                <a className=" text-xl font-extrabold">Any <span className='text-red-600'>Gadget</span> </a>
            </div>
            <div>
                <div className="mx-auto flex justify-start md:justify-center items-center bg-blue-200 px-20 h-16 mt-2">
                    <ul className=" flex justify-start md:justify-center items-center flex-wrap space-x-5">
                        <li><a>Home</a></li>
                        <li><a>Shop</a></li>
                        <li><a>Collection</a></li>
                    </ul>
                    <div className='relative'>
                        <label htmlFor="my-drawer-5" className="drawer-button text-3xl text-red-600 "><HiOutlineShoppingCart className='md:ml-10 ml-3' /></label>
                        <p className='absolute -right-5 bg-red-600  text-gray-100 rounded-full px-2 -top-2 text-sm '>{cart.length} </p>
                    </div>
                </div>
            </div>
            <div className="drawer drawer-end z-10">
                <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-5" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 min-h-full w-80 p-4">
                        <h1 className='text-center font-extrabold text-2xl text-gray-600'>Your Cart Items</h1>
                        <p className='py-5'>Total Item: {cart.length}</p>
                        {/* Sidebar content here */}

                        {
                            cart.length === 0 ? <div className="text-center text-gray-500 text-sm italic py-10 rounded-2xl p-4 ">
                                <div className='flex justify-center text-5xl'>
                                    <BiShoppingBag />
                                </div>
                                <p> Your cart is empty! Add some products to get started.</p>
                            </div> : cart.map((item, index) => <CartItem key={item.id} handleRemove={handleRemove} setCart={setCart} cart={cart} item={item} index={index}></CartItem>)
                        }
                        <hr className='text-gray-400' />
                        <div className='flex justify-between py-2'>
                            <p>Total Costs:</p>
                            <p>{total} tk</p>
                        </div>
                        <button
                            onClick={handleProceed}
                            className='bg-red-400 hover:bg-red-500 transition duration-200 py-2 rounded-md  mt-1'> Proceed to checkout</button>
                    </ul>

                </div>

            </div>

        </div>
    );
};

export default Header;