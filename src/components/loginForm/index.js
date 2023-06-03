import SideLayout from "../side-layout";
import Input from "../input";
import useTranslate from "../../hooks/use-translate";
import {cn as bem} from '@bem-react/classname';
import "./style.css";

function LoginForm () {
  
  const cn = bem('LoginForm');
  const {t} = useTranslate();

    return(
          <SideLayout side="left" padding="medium">
            <div className={cn()}>
                <div className={cn("entrance")}>{t("entrance")}</div>
                <Input label={t("label.login")}/>
                <Input label={t("label.password")}/>
                <button className={cn("button")}>{t("button.entrance")}</button>
            </div>
          </SideLayout>
    )
}

export default LoginForm;