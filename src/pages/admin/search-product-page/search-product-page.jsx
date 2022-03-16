import React, {useEffect} from 'react';
import styles from './search-product-page.module.scss'
import {useDispatch, useSelector} from "react-redux";
import AdminPanel from "../../../components/admin/panel/admin-panel";
import AdminContent from "../../../components/admin/panel/main/content/admin-content";
import AdminTitle from "../../../components/admin/panel/main/title/admin-title";
import digitPrice from "/src/helpers/digit-price"
import digitDate from "../../../helpers/digit-date";
import {getProducts} from "../../../redux/actions/product-actions";

const SearchProductPage = () => {

    const dispatch = useDispatch()
    const products = useSelector(state => state.products.items)

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    const productItems = products.map((item) => {
        return (
            <div className={styles['search-product__block-item']}>
                <div title={'Заголовок'} className={styles['search-product__block-item-title']}>
                    <p>{item.title}</p>
                </div>
                <div className={styles['search-product__block-item-attribute']}>
                    <p>Площадка:</p>
                    <p className={styles['search-product__block-item-site']}>{item.site_title}</p>
                </div>
                <div className={styles['search-product__block-item-attribute']}>
                    <p>Категория:</p>
                    <p>{item.category_title}</p>
                </div>
                <div className={styles['search-product__block-item-attribute']}>
                    <p>Цвет:</p>
                    <p>{item.colors_title}</p>
                </div>
                <div className={styles['search-product__block-item-attribute']}>
                    <p>Бренд:</p>
                    <p>{item.brands_title}</p>
                </div>
                <div className={styles['search-product__block-item-attribute']}>
                    <p>Цена:</p>
                    <p className={styles['search-product__block-item-attribute-price']}>
                        <s>{digitPrice(item.previous_price)}</s>
                        <span>{digitPrice(item.current_price)}&#8381;</span>
                    </p>
                </div>
                <div className={styles['search-product__block-item-attribute']}>
                    <p>Обновление:</p>
                    <p title={'Последнее обновление товара в базе данных'}>{digitDate(item.unique_date)}</p>
                </div>
            </div>
        )
    })

    return (
        <AdminPanel>
            {/*<div>menu</div>*/}
            <AdminContent>
                <AdminTitle title={'Поиск товара'}/>
                <div className={styles['search-product-page']}>
                    {productItems}
                </div>
            </AdminContent>
        </AdminPanel>
    );
};

export default SearchProductPage