import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import useTranslate from "../../hooks/use-translate";
import {cn as bem} from '@bem-react/classname';
import './style.css';
import Comment from './comment';
import NewComment from "./newComment";
import Reply from './reply';

function CommentsCard({commentCount = 0, token = true}) {
    const navigate = useNavigate();
    const cn = bem("CommentsCard");
    const {t} = useTranslate();

    return (
        <div className={cn()} >
            <div className={cn("title")}>{`${t("comments.title")} (${commentCount})`}</div> 
            <Comment />
            <Reply />
            {token? 
                <NewComment />
            :
            <div>
                <div className={cn("entrance")}>
                    <div className={cn("enter")} onClick={() => navigate("/login")}>Войдите</div> 
                    <div>
                        , чтобы иметь возможность комментировать
                    </div>
                </div> 
            </div>
            }
        </div>
    );
}

export default CommentsCard;