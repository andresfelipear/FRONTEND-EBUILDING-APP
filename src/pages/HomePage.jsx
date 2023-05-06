import React from 'react'

function HomePage() {
    return (
        <main className='py-5'>
            <div class="main-header">
                <p className='w-2/3 m-auto my-10'>
                    WE ARE A FAMILY BUSINESS CREATED WITH THE PURPOSE OF DESIGNING THE SPACES AND ADVICE FOR HOME, FOCUSING
                    ON COMFORT AND ELEGANCE, SO YOU HAVE A UNIQUE EXPERIENCE.
                </p>
            </div>

            <div className='flex flex-row flex-wrap justify-center gap-10'>
                <div >
                    <img src="/images/img4.jpg" alt="living room" className='images' />
                    <h4 className='uppercase text-center font-medium'>living room</h4>
                </div>
                <div >
                    <img src="/images/img5.jpg" alt="dining room" className='images' />
                    <h4 className='uppercase text-center font-medium'>dining room</h4>
                </div>
                <div >
                    <img src="/images/img1.jpg" alt="main room"  className='images'/>
                    <h4 className='uppercase text-center font-medium'>main room</h4>
                </div>
                <div >
                    <img src="/images/img3.jpg" alt="mirrors"  className='images'/>
                    <h4 className='uppercase text-center font-medium'>mirrors</h4>
                </div>
                <div >
                    <img src="/images/img2.jpg" alt="home accesories" className='images' />
                    <h4 className='uppercase text-center font-medium'>home accesories</h4>
                </div>
            </div>
        </main>
    )
}

export default HomePage;
