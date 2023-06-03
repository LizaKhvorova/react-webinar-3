import LoginForm from "../../components/loginForm";
import Head from "../../components/head";
import PageLayout from "../../components/page-layout";
import Navigation from "../../containers/navigation";
import useTranslate from "../../hooks/use-translate";
import LogButton from "../../components/LogButton";

function Login () {
  const {t} = useTranslate();

    return(
        <PageLayout>
            <LogButton title={t("entrance")}/>
            <Head title={t('title')}></Head>
            <Navigation />
            <LoginForm />
        </PageLayout> 
    )
}

export default Login;