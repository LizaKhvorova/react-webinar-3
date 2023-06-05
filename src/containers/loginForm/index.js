import { useState } from "react";
import SideLayout from "../../components/side-layout";
import Input from "../../components/input";
import useTranslate from "../../hooks/use-translate";
import {cn as bem} from '@bem-react/classname';
import "./style.css";
import useStore from "../../hooks/use-store";
import useSelector from "../../hooks/use-selector";

function LoginForm () {
    const [loginValue, setLoginValue] = useState("");
    const [passValue, setPassValue] = useState(""); 
    const store = useStore();

    const select = useSelector(state => ({
            username: state.user.username, 
            error: state.user.error, 

    }));
    const postData = () => {
        store.actions.user.postData({login: loginValue, password: passValue});
        setLoginValue("");
        setPassValue("");
    }
    
    const cn = bem('LoginForm');
    const {t} = useTranslate();

    return(
          <SideLayout side="start" padding="medium">
            <div className={cn()}>
                <div className={cn("entrance")}>{t("entrance")}</div>
                <Input label={t("label.login")} onChange={setLoginValue} value={loginValue}/>
                <Input label={t("label.password")} onChange={setPassValue} value={passValue}/>
                {select.error? <div className={cn("error")}>{select.error}</div> : null}
                <button className={cn("button")} onClick={postData}>{t("button.entrance")}</button>
            </div>
          </SideLayout>
    )
}

export default LoginForm;