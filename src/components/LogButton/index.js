import SideLayout from "../side-layout";
import {cn as bem} from '@bem-react/classname';
import "./style.css";

function LogButton ({title, info}) {
  const cn = bem('LogButton');  

    return (
        <SideLayout side="end">
            <div className={cn()}>
                {info? <div>{info}</div> : null}
                <button className={cn("button")}>{title}</button>
            </div>
        </SideLayout>    
    )
}

export default LogButton;