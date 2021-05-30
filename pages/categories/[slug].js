/*import Head from "next/head";
import { useRouter } from "next/router";
import { getCategories, getCategory } from "utils/api";
import Hotels from "pages/hotels";

const CategoryPage = ({ category }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading category...</div>;
  }

  return (
    <div>
      <Head>
        <title>{category.name} hotels</title>
      </Head>
      <Link href={`/categories/${category.slug}`} key={category.id}>
            <button>{category.name}
            </button>
          </Link>
      <Hotels hotels={category.hotels} />
    </div>
  );
};

export default CategoryPage;

export async function getStaticProps({ params }) {
  const category = await getCategory(params.slug);
  return { props: { category } };
}

export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map((_category) => {
      return {
        params: { slug: _category.slug },
      };
    }),
    fallback: true,
  };
}*/