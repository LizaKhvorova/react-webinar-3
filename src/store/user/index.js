import StoreModule from "../module";
import {setLocalStorageItem} from "../../utils";

/**
 * Данные о пользователе 
 */
class UserState extends StoreModule {

  initState() {
    return {
      error: "", 
      username: "",
      phone: "",
      email: ""
    }
  }

  /**
   * Отправка данных на сервер, проверка
   */
    async postData({login, password}){
        const response = await fetch(`/api/v1/users/sign`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                login,
                password,
            }),
        });
        const json = await response.json();

        if(response.ok) {
            setLocalStorageItem("token", json.result.token);
            setLocalStorageItem("name", json.result.user.profile.name);
            this.setState({
                ...this.getState(),
                username: json.result.user.profile.name,
                phone: json.result.user.profile.phone,
                email: json.result.user.email
            }, "Cброшены данные в инпуте");
            console.log(this.getState());
        } else {
                this.setState({
                    ...this.getState(),
                    error: json.error.data.issues[0].message
                }, "Ошибка от сервера");
        }
    } 

    async getUserData(token) {
        this.setState({
            ...this.getState(),
         }, `Получение данных пользователя`);

         const response = await fetch('/api/v1/users/self', {
            headers: {
               'Content-Type': 'application/json',
               'X-Token': token
            } 
         })

         const json = await response.json();
         this.setState({
            ...this.getState(),
            username: json.result.profile.name,
            phone: json.result.profile.phone,
            email: json.result.email
         }, `Запись данных пользователя`);
    }

    resetState() {
        this.setState(this.initState());
    }
}

export default UserState;
