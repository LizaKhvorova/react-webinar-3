import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import useTranslate from "../../hooks/use-translate";
import {cn as bem} from '@bem-react/classname';
import './style.css';
import Comment from './comment';
import NewComment from "./newComment";
import Reply from './reply';

function CommentsCard({commentCount = 0, exists = true, data}) {
    const navigate = useNavigate();
    const cn = bem("CommentsCard");
    const {t} = useTranslate();

   console.log(data);
    return (
        <div className={cn()} >
            <div className={cn("title")}>{`${t("comments.title")} (${commentCount})`}</div> 
            {data.map(item => (
                        <div key={item._id}>
                    <Comment 
                        name={item.author.profile.name}
                        date={item.dateCreate}
                        text={item.text}
                    />
                </div> 

            ))}
            {exists? 
            <div>
                <Reply />
                <NewComment />  
            </div>
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