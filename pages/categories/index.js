/*import Head from "next/head";
import { useRouter } from "next/router";
import { getCategories } from "utils/api";
import HotelList from "components/data/HotelList";

const Categories = ({ categories }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading category...</div>;
  }

  const CategoryButtons = ({ categories = [] }) => {
    return (
      <div>
        {categories.map((_category) => (
          <Link href={`/categories/${_category.slug}`} key={_category.id}>
            <a>{_category.name}
            </a>
          </Link>
        ))}
      </div>
    )
  }
  return (
    <div>
      <Head>
        <title>{categories.name} hotels</title>
      </Head>
      <HotelList hotels={categories.hotels} />
    </div>
  );
};

export default Categories;

export async function getStaticProps({ params }) {
  const categories = await getCategories(params);
  return { props: { categories } };
}*/
