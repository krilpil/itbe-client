import React from "react";

import AddProductPage from "../pages/admin/add-product-page/add-product-page";
import SearchProductPage from "../pages/admin/search-product-page/search-product-page";
import IndexContent from "../pages/user/home";

const routes = [
    {
        path: '/panel/product-add',
        page: <AddProductPage />
    },
    {
        path: '/panel/product-search',
        page: <SearchProductPage />
    },
    {
        path: '/home',
        page: <IndexContent />
    }
]

export default routes