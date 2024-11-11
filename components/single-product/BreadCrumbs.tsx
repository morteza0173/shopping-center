import { SlashIcon } from "@radix-ui/react-icons";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { categories, Product } from "@/utils/type";

function BreadCrumbs({
  product,
  categories,
}: {
  product: Product;
  categories: categories[];
}) {
  const { name, categories: productsCategories } = product;

  const catrgoryCrumb = (
    categories: categories[],
    productsCategories: categories[],
    parentId: number = 0
  ): React.ReactNode => {
    let firstParent = false;
    return (
      <>
        {productsCategories.map((category) => {
          const { id } = category;

          const categoryFiltered = categories.find(
            (category) => category.id === id
          );

          if (categoryFiltered?.parent === parentId) {
            if (parentId === 0 && firstParent) return <></>;
            firstParent = true;

            return (
              <>
                <BreadcrumbItem key={category.id}>
                  <BreadcrumbLink href={`/category/${id}`}>
                    {categoryFiltered.name}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <SlashIcon />
                </BreadcrumbSeparator>
                {catrgoryCrumb(
                  categories,
                  productsCategories,
                  categoryFiltered.id
                )}
              </>
            );
          }

          return <></>;
        })}
      </>
    );
  };

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">صفحه اصلی</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <SlashIcon />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="/products">محصولات</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <SlashIcon />
        </BreadcrumbSeparator>
        {catrgoryCrumb(categories, productsCategories)}
        <BreadcrumbItem>
          <BreadcrumbPage>{name}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
export default BreadCrumbs;
