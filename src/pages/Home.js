import React from 'react'
import Marquee from 'react-fast-marquee'
import { Link } from 'react-router-dom'
import BlogCard from '../components/BlogCard'
import ProductCard from '../components/ProductCard'
import SpecialProduct from '../components/SpecialProduct'
const Home = () => {
  return (
    <>
      <section className='home-wrapper-1 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <div className='main-banner position-relative '>
                <img
                  src='images\main-banner-1.jpg'
                  className='img-fluid rounded-3'
                  alt='main banner'
                />
                <div className='main-banner-content position-absolute'>
                  <h4>SUPERCHARGED FOR PRO5S</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.00 or $41.62/mo.</p>
                  <Link className='button'>BUY NOW</Link>
                </div>

              </div>
            </div>
            <div className='col-6'>
              <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
                <div className='small-banner position-relative'>
                  <img
                    src='images\catbanner-01.jpg'
                    className='img-fluid rounded-3'
                    alt='main banner'
                  />
                  <div className='small-banner-content position-absolute'>
                    <h4>SUPERCHARGED FOR PRO5S</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>From $999.00 or $41.62/mo.</p>
                  </div>
                </div>
                <div className='small-banner position-relative'>
                  <img
                    src='images\catbanner-02.jpg'
                    className='img-fluid rounded-3'
                    alt='main banner'
                  />
                  <div className='small-banner-content position-absolute'>
                    <h4>SUPERCHARGED FOR PRO5S</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>From $999.00 or $41.62/mo.</p>
                  </div>
                </div>
                <div className='small-banner position-relative'>
                  <img
                    src='images\catbanner-03.jpg'
                    className='img-fluid rounded-3'
                    alt='main banner'
                  />
                  <div className='small-banner-content position-absolute'>
                    <h4>SUPERCHARGED FOR PRO5S</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>From $999.00 or $41.62/mo.</p>
                  </div>
                </div>
                <div className='small-banner position-relative'>
                  <img
                    src='images\catbanner-04.jpg'
                    className='img-fluid rounded-3'
                    alt='main banner'
                  />
                  <div className='small-banner-content position-absolute'>
                    <h4>SUPERCHARGED FOR PRO5S</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>From $999.00 or $41.62/mo.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='serviex d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images\service.png' alt='services' />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className='mb-0'>From all orders over $5</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images\service-02.png' alt='services' />
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p className='mb-0'>Save upto 25% off</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images\service-03.png' alt='services' />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className='mb-0'>Shop with an expert</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images\service-04.png' alt='services' />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className='mb-0'>Get Fact Default Price</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images\service-05.png' alt='services' />
                  <div>
                    <h6>Secure Payments</h6>
                    <p className='mb-0'> 100% Protected Payment</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* catogories */}
      <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='categories d-flex flex-wrap justify-content-between align-items-center'>
                <div className='d-flex gap-15 align-items-center'>
                  <div>
                    <h6>Computers & Laptop</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images\laptop.jpg' alt='camera' />
                </div>
                <div className='d-flex gap-15 align-items-center'>
                  <div>
                    <h6>Cameras & Videos</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images\camera.jpg' alt='camera' />
                </div>
                <div className='d-flex gap-15 align-items-center'>
                  <div>
                    <h6>Smart Television</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images\tv.jpg' alt='camera' />
                </div>
                <div className='d-flex gap-15 align-items-center'>
                  <div>
                    <h6>Smartwatches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images\watch.jpg' alt='camera' />
                </div>
                <div className='d-flex gap-15 align-items-center'>
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images\game.jpg' alt='camera' />
                </div>
                <div className='d-flex gap-15 align-items-center'>
                  <div>
                    <h6>Mobiles $ Tablets</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images\mobile.jpg' alt='camera' />
                </div>
                <div className='d-flex gap-15 align-items-center'>
                  <div>
                    <h6>SHeadphone</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images\headphone.jpg' alt='camera' />
                </div>
                <div className='d-flex gap-15 align-items-center'>
                  <div>
                    <h6>Accessories</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images\acc.jpg' alt='camera' />
                </div>
                <div className='d-flex gap-15 align-items-center'>
                  <div>
                    <h6>Portable Speakers</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images\speaker.jpg' alt='camera' />
                </div>
                <div className='d-flex gap-15 align-items-center'>
                  <div>
                    <h6>Home Appliances</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images\homeapp.jpg' alt='camera' />
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* phần sp nổi bật */}
      <section className='featured-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading '>
                Featured Collection
              </h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            
          </div>
        </div>
      </section>

      {/*  */}
      <section className='famous-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img className='img-fluid' src=' images\mig.jpg' alt='famous' />
                <div className='famous-content position-absolute'>
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>From $399 or $16.62/mo for 24 mo</p>
                </div>
              </div>         

            </div>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img className='img-fluid' src=' images\mig.jpg' alt='famous' />
                <div className='famous-content position-absolute'>
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>From $399 or $16.62/mo for 24 mo</p>
                </div>
              </div>         

            </div><div className='col-3'>
              <div className='famous-card position-relative'>
                <img className='img-fluid' src=' images\mig.jpg' alt='famous' />
                <div className='famous-content position-absolute'>
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>From $399 or $16.62/mo for 24 mo</p>
                </div>
              </div>         

            </div><div className='col-3'>
              <div className='famous-card position-relative'>
                <img className='img-fluid' src=' images\mig.jpg' alt='famous' />
                <div className='famous-content position-absolute'>
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>From $399 or $16.62/mo for 24 mo</p>
                </div>
              </div>         

            </div>
          </div>
        </div>
      </section>


      <section className='special-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row '>
            <div className='col-12'>
              <h3 className='section-heading'>Special Product</h3>
            </div>
            <div className='row d-flex '>
              <SpecialProduct />
              <SpecialProduct />
              <SpecialProduct />
              <SpecialProduct />
              <SpecialProduct />
              <SpecialProduct />
            </div>
          </div>
        </div>
      </section>

      {/* phần sp phổ biến */}
      <section className='popular-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading d-flex flex-wrap'>
                Our Popular Products
              </h3>
            </div>
          </div>
          <div className='row'>
            <div className='col-2  d-flex'>
              <div className='card'>
              <p><img src='images\watch.jpg' alt='' />Smart Watch</p>
                  <p><img src='images\speaker.jpg' alt='' />Speaker</p>
                  <p><img src='images\laptop.jpg' alt='' />Laptops</p>

                
              </div>
            </div>
            <div className='col-2 d-flex'>
            <div className='famous-card position-relative d-flex'>
                <img className='img-fluid' src=' images\mig.jpg' alt='famous' />
                <div className='famous-content position-absolute'>
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>From $399 or $16.62/mo for 24 mo</p>
                </div>
              </div>
            </div>
            <ProductCard />
            <ProductCard />
            
          </div>
        </div>
      </section>

      {/* dòng brand chạy */}
      <section className='marquee-inner-wrapper py-5'>
        <div className='container-xxl'>
          <div className='row'>

            <div className='col-12'>
              <div className='marquee-inner-wrapper card-wrapper'>
                <Marquee className='d-flex'>
                  <div className='mx-4 w-25'>
                    <img src='images\brand-01.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images\brand-02.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images\brand-03.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images\brand-04.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images\brand-05.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images\brand-06.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images\brand-07.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images\brand-08.png' alt='brand' />
                  </div>

                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* phần blog */}
      <section className='blog-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>
                Our Latest Blogs
              </h3>
            </div>
            <div className='row'>
            <div className='col-3'>
              <BlogCard/>
            </div>
            <div className='col-3'>
              <BlogCard/>
            </div>
            <div className='col-3'>
              <BlogCard/>
            </div>
            <div className='col-3'>
              <BlogCard/>
            </div>
            </div>

          </div>
        </div>
      </section>

    </>
  )
}

export default Home