import Head from "next/head";
import { otherRoomsSlides } from "data/shared-rooms-data";
import { roomsData } from "data/rooms-data";
import SingleRoomPageBanner from "components/pageBanners/SingleRoomPageBanner";
import DescriptionRoomBlock from "components/shared/DescriptionRoomBlock";
import RoomPhotosSlider from "components/sliders/RoomPhotosSlider";
import OtherSlider from "components/sliders/OtherSlider";

const SingleRoomPage = ({
  title,
  subtitle,
  bannerImg,
  description,
  photos,
  features,
  link,
}) => {
  return (
    <>
      <Head>
        <title>{title} Holidaze Rooms</title>
      </Head>
      <main>
        <SingleRoomPageBanner
          bannerImg={bannerImg}
          title={title}
          subtitle={subtitle}
        />
        <section className="section first">
          <DescriptionRoomBlock
            title="Description"
            icons={features}
            link={link}
            description={description}
          />
        </section>
        <section className="section">
          <RoomPhotosSlider slides={photos} title="Gallery" />
        </section>
        <section className="section last">
          <OtherSlider
            slides={otherRoomsSlides}
            title={"Another variants"}
            type={"room"}
          />
        </section>
      </main>
    </>
  );
};

export default SingleRoomPage;

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          room: "standard",
        },
      },
      {
        params: {
          room: "superior",
        },
      },
      {
        params: {
          room: "superior-extra",
        },
      },
      {
        params: {
          room: "1-room-lux",
        },
      },
      {
        params: {
          room: "2-rooms-lux",
        },
      },
      {
        params: {
          room: "3-rooms-lux",
        },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const room = params.room;
  const props = roomsData[room];
  return {
    props,
  };
}
