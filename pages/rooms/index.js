import Head from 'next/head'
import {offersSlides} from 'data/home-page'
import {roomPreviewSlides} from 'data/shared-rooms-data'
import {servicesSlides} from 'data/vacation'
import RoomsAndPricesBanner from 'components/pageBanners/RoomsAndPricesBanner'
import SliderThree from 'components/sliders/SliderThree'
import RoomsSlider from 'components/sliders/RoomsSlider'
import TextBlock from 'components/TextBlock'
import ServicesSlider from 'components/sliders/ServicesSlider'

const RoomsPage = () => {
    return (<>
            <Head title="Hotels and Rooms" />
            <main>
                <RoomsAndPricesBanner/>
                <section className='section'>
                    <TextBlock title={'Family Rooms'}
                               subtitle={'Wellcome to'}
                               img={'images/hotel195.jpg'}
                               content={'<p class="text">Consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Et tortor at risus viverra. Nunc mi ipsum faucibus vitae aliquet. A diam maecenas sed enim ut. Nisl nisi scelerisque eu ultrices vitae auctor. Fermentum iaculis eu non diam phasellus vestibulum lorem sed. Arcu dui vivamus arcu felis bibendum ut tristique. Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Tellus in hac habitasse platea. Ac odio tempor orci dapibus ultrices in iaculis nunc sed. Tincidunt arcu non sodales neque sodales ut etiam sit amet. Quis hendrerit dolor magna eget est lorem ipsum dolor sit.</p>'}/>
                </section>

                <section className="section">
                    <RoomsSlider title={'Rooms and prices'} slides={roomPreviewSlides}/>
                </section>

                <section className="section">
                    <ServicesSlider slides={servicesSlides}/>
                </section>

                <section className="section">
                    <SliderThree slides={offersSlides} title="Offers"/>
                </section>

            </main>
        </>
    )
}

export default RoomsPage
