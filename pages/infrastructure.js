
import dynamic from 'next/dynamic'
import Head from "components/layout/Head";
import {infrastructureSlides} from 'data/home-page'
import {gallerySlides} from 'data/gallery-data'
import LazyLoad from 'react-lazyload'
import PageBanner from 'components/pageBanners/PageBanner';
import SliderTwo from 'components/sliders/SliderTwo';
const GallerySlider = dynamic(() => import('components/sliders/GallerySlider'))

export default function Infrastructure() {
    return (<>
            <Head title = "Prices and services" />
                
            
            <main>
                <PageBanner />

                <section className="section first">
                    <SliderTwo slides={infrastructureSlides} title={'About'}/>
                </section>

                <LazyLoad height={'300px'}>
                    <section className="section">
                        <GallerySlider slides={gallerySlides} title={'Gallery'}/>
                    </section>
                </LazyLoad>

            </main>
        </>
    )
}
