import PageLayout from "../../components/page-layout";
import Navigation from "../../containers/navigation";
import useTranslate from "../../hooks/use-translate";
import ProfileForm from "../../components/profileForm";
import LogButton from "../../components/LogButton";
import Head from "../../components/head";

function Login () {
    const {t} = useTranslate();
  
      return(
          <PageLayout>
              <LogButton title={t("exit")} info={"user"}/>
              <Head title={t('title')}></Head>
              <Navigation />
              <ProfileForm />
          </PageLayout> 
      )
  }
  
  export default Login;