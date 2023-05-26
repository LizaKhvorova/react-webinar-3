import {
    memo,
    useCallback,
    useEffect,
    useState
} from 'react';
import Item from "../../components/item";
import PageLayout from "../../components/page-layout";
import Head from "../../components/head";
import BasketTool from "../../components/basket-tool";
import List from "../../components/list";
import useStore from "../../store/use-store";
import useSelector from "../../store/use-selector";
import Pagination from "../../components/pagination/index.js";
 
function Main() {

    const store = useStore();
    const [currentPage, setCurrentPage] = useState(1);
    const [limit] = useState(10);
    const lastItemIndex = currentPage * limit;
    const firstItemIndex = lastItemIndex - limit;
  
    useEffect(() => {
        store.actions.catalog.load(currentPage, limit);
    }, []);

    const select = useSelector(state => ({
        list: state.catalog.list,
        amount: state.basket.amount,
        sum: state.basket.sum
    }));

    const currentItem = select.list.slice(firstItemIndex, lastItemIndex);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    const callbacks = {
        // Добавление в корзину
        addToBasket: useCallback(_id => store.actions.basket.addToBasket(_id), [store]),
        // Открытие модалки корзины
        openModalBasket: useCallback(() => store.actions.modals.open('basket'), [store]),
    };

    const renders = {
        item: useCallback((item) => {
            return <Item item={item} onAdd={callbacks.addToBasket}/>;
        }, [callbacks.addToBasket]),
    };

    return ( 
    <PageLayout>
        <Head title='Магазин' / >
        <BasketTool onOpen={callbacks.openModalBasket}
        amount={select.amount}
        sum={select.sum}
        /> 
        <List list={currentItem} renderItem={renders.item}/> 
        <Pagination totalItems={select.list.length} limit={limit} paginate={paginate}/>
    </PageLayout>
    );
}

export default memo(Main);