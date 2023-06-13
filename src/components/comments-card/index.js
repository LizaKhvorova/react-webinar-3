import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import useTranslate from "../../hooks/use-translate";
import {cn as bem} from '@bem-react/classname';
import './style.css';
function CommentsCard({renderItem, data, count, id}) {
    const cn = bem("CommentsCard");
    const {t} = useTranslate();
    const scrollRef = useRef(null);

    useEffect(() => {
        if(scrollRef?.current) {
            scrollRef?.current?.scrollIntoView({behavior: "smooth"}); 
        }
    }, [id])

    return (
        <div className={cn()} >
            <div className={cn("title")}>{`${t("comments.title")} (${count})`}</div>
            <div className={cn("list")}>
                {data.map((item) => (
                    <div key={item._id} >
                        {renderItem(item)}
            <div ref={item._id === id ? scrollRef : undefined}></div>

                    </div>
                    
                ))}
            </div>
        </div>
    );
}

CommentsCard.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
      _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })).isRequired,
    renderItem: PropTypes.func,
    count: PropTypes.number
  };
  
  CommentsCard.defaultProps = {
    renderItem: (item) => {},
    count: 0,
    data: []
  }

export default CommentsCard;