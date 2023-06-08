import {cn as bem} from '@bem-react/classname';
import './style.css';
import PropTypes from 'prop-types';

function Reply({user = "User 1"}) {
    const cn = bem("Reply");
    return (
        <div className={cn()}>
            <div className={cn("title")}>Новый ответ</div>
            <textarea className={cn("textarea")} placeholder={`Мой ответ для ${user}`}></textarea>
            <div className={cn("container")}>
                <button className={cn("button")}>Отправить</button>
                <button className={cn("button-cancel")}>Отмена</button>
            </div>
        </div>    
    )
}

export default Reply;