import {
    memo,
    useCallback,
    useMemo
} from "react";
import useTranslate from "../../hooks/use-translate";
import useStore from "../../hooks/use-store";
import useSelector from "../../hooks/use-selector";
import Select from "../../components/select";
import Input from "../../components/input";
import SideLayout from "../../components/side-layout";
import {makeCategoryList} from "../../utils";

function CatalogFilter() {

    const store = useStore();

    const select = useSelector(state => ({
        sort: state.catalog.params.sort,
        query: state.catalog.params.query,
        category: state.catalog.params.category,
        categoryItems: state.catalog.categoryItems
    }));

    const callbacks = {
        // Сортировка
        onSort: useCallback(sort => store.actions.catalog.setParams({
            sort
        }), [store]),
        // Поиск
        onSearch: useCallback(query => store.actions.catalog.setParams({
            query,
            page: 1
        }), [store]),
        // Сброс
        onReset: useCallback(() => store.actions.catalog.resetParams(), [store]),
        // Категории
        onChangeCategory: useCallback(category => store.actions.catalog.setParams({category, page: 1}), [store])
    };

    const categories = [{_id: "all", title: "Все"}];

    makeCategoryList(select.categoryItems);
    const getCategories = (arr) => {
        
    }

    const options = {
        sort: useMemo(() => ([{
                value: 'order',
                title: 'По порядку'
            },
            {
                value: 'title.ru',
                title: 'По именованию'
            },
            {
                value: '-price',
                title: 'Сначала дорогие'
            },
            {
                value: 'edition',
                title: 'Древние'
            },
        ]), []),
        category: select.categoryItems
    }; 

    const {
        t
    } = useTranslate();

    return ( 
    <SideLayout padding = 'medium' >
        <Select options={options.category} value={select.category} onChange={callbacks.onChangeCategory}/>
        <Select options = {options.sort} value = {select.sort} onChange = {callbacks.onSort} /> 
        <Input value = {select.query}
        onChange = {callbacks.onSearch}
        placeholder = {'Поиск'}
        delay = {1000}
        /> 
        <button onClick = {callbacks.onReset}> 
            {t('filter.reset')} 
        </button> 
    </SideLayout >
    )
}

export default memo(CatalogFilter);