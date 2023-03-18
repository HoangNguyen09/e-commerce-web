import React from 'react'
import { Link } from 'react-router-dom';
import StarRating from 'react-star-rating-component';
const ProductCard = () => {
    return (
        <Link className='col-2'>
            <div className='product-card position-relative'>
                <div className='wishlist-icon position-absolute'>
                    <Link>
                        <img src='images\wish.svg' alt='wishlist' />
                    </Link>
                </div>
                <div className='product-image'>
                    <img src='images\watch1.jpg' className='img-fluid'  alt='product image' />
                    <img src='images\watch2.jpg'  className='img-fluid' alt='product image' />
                </div>
                <div className='product-details'>
                    <h6 className='brand'>Havels</h6>
                    <h5 className='product-title'>
                        Lorem ipsum dolor sit amet. Est quasi...
                    </h5>
                    <StarRating
                        starCount={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor='#ffd700'
                    />
                    <p className='price'>$100.00</p>

                </div>
                <div className='action-bar position-absolute'>

                    <div className='d-flex flex-column gap-15'>
                        <Link>
                            <img src='images\prodcompare.svg' alt='compare' />
                        </Link>
                        <Link>
                            <img src='images\view.svg' alt='view' />
                        </Link>
                        <Link>
                            <img src='images\add-cart.svg' alt='addcart' />
                        </Link>

                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard