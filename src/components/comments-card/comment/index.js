import {cn as bem} from '@bem-react/classname';
import './style.css';
import PropTypes from 'prop-types';
import dateFormat from "../../../utils/date-format";

function Comment({name, date, text}) {
    const cn = bem("Comment");

    const handleReply = () => {
        
    }

    return(
       <div className={cn()}>
        <div className={cn("container")}>
            <div className={cn("username")}>{name}</div>
            <div className={cn("date")}>{dateFormat(date)}</div>
        </div>
        <div className={cn("text")}>{text}</div>
        <div className={cn("reply")}>Reply</div>
       </div>     
    )
}

export default Comment;