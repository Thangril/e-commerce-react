import { createContext, useState, useEffect} from "react";

import { getCategoriesAndDocuments } from "../utilts/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
  categoriesyMap: {},
  
})

export const CategoriesProvider =  ({ children }) =>{
  const [categoriesyMap, setCategoriesyMap] = useState({});
 
  useEffect(() => {
    const getCategoriesMap = async () =>{
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
      setCategoriesyMap(categoryMap);
    }

    getCategoriesMap();
  },[]);

  const value = {categoriesyMap};
  return (
   <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  )
};
