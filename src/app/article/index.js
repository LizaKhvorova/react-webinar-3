import {memo, useCallback, useEffect, useMemo} from 'react';
import {useParams} from "react-router-dom";
import useStore from "../../hooks/use-store";
import useSelector from "../../hooks/use-selector";
import useTranslate from "../../hooks/use-translate";
import useInit from "../../hooks/use-init";
import PageLayout from "../../components/page-layout";
import Head from "../../components/head";
import Navigation from "../../containers/navigation";
import Spinner from "../../components/spinner";
import ArticleCard from "../../components/article-card";
import LocaleSelect from "../../containers/locale-select";
import TopHead from "../../containers/top-head";
import {useDispatch, useSelector as useSelectorRedux} from 'react-redux';
import shallowequal from "shallowequal";
import articleActions from '../../store-redux/article/actions';
import commentsActions from "../../store-redux/comments/actions";
import CommentsCard from '../../components/comments-card';

function Article() {
  const store = useStore();
  const dispatch = useDispatch();
  // Параметры из пути /articles/:id
  const params = useParams();
  useInit(() => {
    dispatch(articleActions.load(params.id));
  }, [params.id]);
  useEffect(() => {
    dispatch(commentsActions.load(params.id))
    }, [])
    const selectStore = useSelector(state => ({
        exists: state.session.exists,
        user: state.session.user
    }), []);

    const select = useSelectorRedux(state => ({
        article: state.article.data,
        waiting: state.article.waiting,
        data: state.comments.data,
        count: state.comments.count
    }), shallowequal); // Нужно указать функцию для сравнения свойства объекта, так как хуком вернули объект
  const {t} = useTranslate();
  const callbacks = {
    // Добавление в корзину
    addToBasket: useCallback(_id => store.actions.basket.addToBasket(_id), [store]),
  }

  return (
    <PageLayout>
      <TopHead/>
      <Head title={select.article.title}>
        <LocaleSelect/>
      </Head>
      <Navigation/>
      <Spinner active={select.waiting}>
        <ArticleCard article={select.article} onAdd={callbacks.addToBasket} t={t}/>
      </Spinner>
      <CommentsCard commentCount={select.count} exists={selectStore.exists} data={select.data}/>
    </PageLayout>
  );
}

export default memo(Article);
