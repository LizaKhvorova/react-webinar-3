import SideLayout from "../side-layout";
import {cn as bem} from '@bem-react/classname';
import "./style.css";

function ProfileForm () {
    const cn = bem('ProfileForm');

    return (
         <SideLayout padding="medium">
            <div className={cn()}>
                <div className={cn("title")}>Профиль</div>
                <div className={cn("details")}>Имя: </div>
                <div className={cn("details")}>Телефон:</div>
                <div className={cn("details")}>email: </div>
            </div>
         </SideLayout>   
    )
}

export default ProfileForm;