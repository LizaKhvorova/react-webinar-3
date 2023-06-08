import {cn as bem} from '@bem-react/classname';
import './style.css';

function NewComment () {
    const cn = bem("NewComment");

    return(
        <div className={cn("")}>
            <div className={cn("title")}>Новый комментарий</div>
            <textarea className={cn("textarea")} placeholder="Текст"></textarea>
            <button className={cn("button")}>Отправить</button>
        </div>
    )
}

export default NewComment;