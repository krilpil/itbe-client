import React from 'react';
import styles from './add-product-page.module.scss'

import AddProductRow from "./add-product-row/add-product-row";
import Select from "../../../components/common/select/select";
import Input from "../../../components/common/input/input";
import AdminContent from "../../../components/admin/panel/main/content/admin-content";
import AdminPanel from "../../../components/admin/panel/admin-panel";
import AdminTitle from "../../../components/admin/panel/main/title/admin-title";


const AddProductPage = () => {
    const category = ['Одежда', 'Обувь', 'Летняя обувь', 'Спортивные костюмы', 'Пуховые куртки']
    const site = ['Asos', 'Adidas', 'Nike', 'End', 'Цум']
    const brand = ['Adidas', 'Nike', 'Ralph Lauren', 'Asos']

    return (
        <AdminPanel>
            {/*<div>menu</div>*/}
            <AdminContent>
                <AdminTitle title={'Добавление товара'}/>
                <div className={styles['add-product']}>
                    <AddProductRow title={'Сайт'}>
                        <Select list={site} title={'Выберите сайт'}/>
                    </AddProductRow>
                    <AddProductRow title={'URL-адрес'}>
                        <Input placeholder={'Ссылка на товар'}/>
                    </AddProductRow>
                    <AddProductRow title={'Заголовок'}>
                        <Input placeholder={'Название товара'}/>
                    </AddProductRow>
                    <AddProductRow title={'Категория'}>
                        <Select list={category} title={'Выберите категорию'}/>
                    </AddProductRow>
                    <AddProductRow title={'Пол'}>
                        <Select list={['Мужской', 'Женский']} title={'Выберите пол'}/>
                    </AddProductRow>
                    <AddProductRow title={'Бренд'}>
                        <Select list={brand} title={'Выберите бренд'}/>
                    </AddProductRow>
                    <AddProductRow title={'Цвет'}>
                        <Select list={category} title={'Выберите цвет'}/>
                    </AddProductRow>
                    <AddProductRow title={'Фото'}>
                        <Input placeholder={'Ссылка на фотографию'}/>
                    </AddProductRow>
                    <AddProductRow title={'Цена'}>
                        <Input type={'number'} placeholder={'Текущая цена товара'}/>
                    </AddProductRow>
                    <button className={styles['add-product-row__save']}>Добавить</button>
                </div>
            </AdminContent>
        </AdminPanel>
    );
};

export default AddProductPage;