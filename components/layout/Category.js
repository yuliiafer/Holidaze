import Link from "next/link";
const Layout = ({ children, categories }) => {

  return (
    <div className="flex justify-center bg-gray-200">
                  <div>
            {categories.map((_category) => (
              <Link href={`/categories/${_category.slug}`} key={_category.id}>
                <a>{_category.name}
                </a>
              </Link>
            ))}
          </div>
        <div className="flex-grow">{children}</div>
    </div>
  );
};

export default Layout;