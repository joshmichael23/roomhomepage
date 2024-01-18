import React from 'react'

function Slide(props) {
  return (
        <>
            <div className='slide'>
                <div className="slide-content" style={{ transform: `translateX(${-props.slide * 100}%)` }}>

                <img className="slide-images mobile" src="/mobile-image-hero-1.jpg" alt="" />
                <img className="slide-images mobile" src="/mobile-image-hero-2.jpg" alt="" />
                <img className="slide-images mobile" src="/mobile-image-hero-3.jpg" alt="" />

                <img className="slide-images desktop" src="/desktop-image-hero-1.jpg" alt="" />
                <img className="slide-images desktop" src="/desktop-image-hero-2.jpg" alt="" />
                <img className="slide-images desktop" src="/desktop-image-hero-3.jpg" alt="" />
                </div>
                <div className='slide-buttons mobile'>
                <button onClick={() => props.nextSlide(-1)}><img src="/icon-angle-left.svg" alt="" /></button>
                <button onClick={() => props.nextSlide(1)}><img src="/icon-angle-right.svg" alt="" /></button>
                </div>
            </div>

            <div className='desc'>
                <div className='desc-content' style={{ transform: `translateX(${-props.slide * 100}%)` }}>
                <section className='desc-section'>
                    <h1>Discover innovative ways to decorate</h1>
                    <p>
                    We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.
                    </p>
                    <a>Shop Now <img src="/icon-arrow.svg" alt="" /></a>
                </section>
                <section className='desc-section'>
                    <h1>We are available all across the globe</h1>
                    <p>With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.</p>
                    <a>Shop now  <img src="/icon-arrow.svg" alt="" /></a>
                </section>
                <section className='desc-section'>
                    <h1>Manufactured with the best materials</h1>
                    <p>Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.</p>
                    <a>Shop now <img src="/icon-arrow.svg" alt="" /></a>
                </section>
                </div>

                <div className='slide-buttons desktop'>
                    <button onClick={() => props.nextSlide(-1)}><img src="/icon-angle-left.svg" alt="" /></button>
                    <button onClick={() => props.nextSlide(1)}><img src="/icon-angle-right.svg" alt="" /></button>
                </div>
            </div>
        </>
  )
}

export default Slide