import { useState } from 'react';
import {cn as bem} from '@bem-react/classname';
import './style.css';
import PropTypes from 'prop-types';
import dateFormat from "../../../utils/date-format";
import Reply from '../reply';

function Comment({comment, exists, postComment, level}) {
    const cn = bem("Comment");
    const [reply, setReply] = useState("");
    const handleReply = () => {
        setReply(comment._id);
    }
    console.log(comment)
    return(
       <div className={cn()} style={{paddingLeft: `${level * 30}px`}}>
        <div className={cn("container")}>
            <div className={cn("username")}>{comment.authorName}</div>
            <div className={cn("date")}>{dateFormat(comment.dateCreate)}</div>
        </div>
        <div className={cn("text")}>{comment.text}</div>
        <div className={cn("reply")} onClick={handleReply}>Ответить</div>
        {reply? <Reply 
            exists={exists}
            id={comment._id}
            postAnswer={postComment}
            setReply={setReply}
        />: null}
       </div>     
    )
}

Comment.propTypes = {
    comment: PropTypes.object,
    exists: PropTypes.bool,
    level: PropTypes.number,
    postComment: PropTypes.func,
};

Comment.defaultProps = {
    exists: false,
    postComment: () => {},
}


export default Comment;