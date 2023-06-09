import {memo, useCallback, useMemo} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import useSelector from "../../hooks/use-selector";
import useInit from "../../hooks/use-init";
import {useDispatch, useSelector as useSelectorRedux} from 'react-redux';
import commentsActions from "../../store-redux/comments/actions";
import CommentsCard from '../../components/comments-card';
import NewComment from '../../components/comments-card/newComment';
import listToTree from "../../utils/list-to-tree";
import treeToList from "../../utils/tree-to-list";
import Comment from "../../components/comments-card/comment"

function Comments() {
    const dispatch = useDispatch();
    const params = useParams();
    const navigate = useNavigate();

    const selectStore = useSelector(state => ({
        exists: state.session.exists,
        user: state.session.user
    }));

    const selectRedux = useSelectorRedux(state => ({
        data: state.comments.data,
        count: state.comments.count,
    }));

    useInit(() => {
        dispatch(commentsActions.load(params.id))
    }, [params.id, selectRedux.newComment])

    const comments = useMemo(() => {
        if(selectRedux.data) {
        const data = selectRedux.data.map(item => {
            if(item.parent._type === 'article') {
                return {...item, parent: null}
            }
            return item;
        })
        const tree = listToTree(data);
        return treeToList(tree, (item, level) => ({
            _id: item._id,
            level,
            dateCreate: item.dateCreate,
            authorName: item.author.profile.name,
            text: item.text
        }));
    }
        return null;
    }, [selectRedux.data])

    const callbacks = {
        onLogin: useCallback(() => navigate("/login"), [location.pathname]),
        postComment: useCallback((text, id, type) => dispatch(commentsActions.postComment(text, id, type)), []),
    }

    const renders = {
        item: useCallback(item => (
          <Comment 
            comment={item}
            exists={selectStore.exists}
            postComment={callbacks.postComment}
            level={item.level}
          />
        ), [comments]),
      };
    return (
        <>
          <CommentsCard data={comments} renderItem={renders.item} count={selectRedux.count}/>
        {selectStore.exists ?
            <NewComment /> 
            :  
          null
            }
        </>
    )
}

export default memo(Comments);