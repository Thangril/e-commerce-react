import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../context/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
  const { categoriesyMap } = useContext(CategoriesContext);
  return (
    <Fragment>    
      {Object.keys(categoriesyMap).map((title) => {
        const products = categoriesyMap[title];
        return <CategoryPreview key={title} title={title} products={products} />
      })}       
    </Fragment>
  );
};

export default CategoriesPreview;