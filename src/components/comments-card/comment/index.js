import {cn as bem} from '@bem-react/classname';
import './style.css';
import PropTypes from 'prop-types';

function Comment({data}) {
    const cn = bem("Comment");

    return(
       <div className={cn()}>
        <div className={cn("container")}>
            <div className={cn("username")}>User</div>
            <div className={cn("date")}>date</div>
        </div>
        <div className={cn("text")}>Text Tesx Test tttttttt</div>
        <div className={cn("reply")}>Reply</div>
       </div>     
    )
}

export default Comment;