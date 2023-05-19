import {generateCode} from "./utils";
/**
 * Хранилище состояния приложения
 */
class Store {
  constructor(initState = {}) {
    this.state = {
        ...initState, 
        cart: [],
        isShow: false
    };
    this.listeners = []; // Слушатели изменений состояния
  }
  /**
   * Подписка слушателя на изменения состояния
   * @param listener {Function}
   * @returns {Function} Функция отписки
   */
  subscribe(listener) {
    this.listeners.push(listener);
    // Возвращается функция для удаления добавленного слушателя
    return () => {
      this.listeners = this.listeners.filter(item => item !== listener);
    }
  }

  /**
   * Выбор состояния
   * @returns {Object}
   */
  getState() {
    return this.state;
  }

  /**
   * Установка состояния
   * @param newState {Object}
   */
  setState(newState) {
    this.state = newState;
    // Вызываем всех слушателей
    for (const listener of this.listeners) listener();
  }

  /**
   * Добавление новой записи
   */
  addItem() {
    this.setState({
      ...this.state,
      list: [...this.state.list, {code: generateCode(), title: 'Новая запись'}]
    })
  };

  /**
   * Удаление записи по коду
   * @param code
   */
  deleteItem(code) {
    this.setState({
      ...this.state,
      // Новый список, в котором не будет удаляемой записи
      list: this.state.list.filter(item => item.code !== code)
    })
  };

  /**
   * Выделение записи по коду
   * @param code
   */
  selectItem(code) {
    this.setState({
      ...this.state,
      list: this.state.list.map(item => {
        if (item.code === code) {
          // Смена выделения и подсчёт
          return {
            ...item,
            selected: !item.selected,
            count: item.selected ? item.count : item.count + 1 || 1,
          };
        }
        // Сброс выделения если выделена
        return item.selected ? {...item, selected: false} : item;
      })
    })
  }

  // добавление товара в корзину
  addItemToCart(code) {
    const { list, cart } = this.state;
    const listItem = list.find((item) => item.code === code);
    const existingCartItemIndex = cart.findIndex((item) => item.code === code);
    if (~existingCartItemIndex) {
        cart[existingCartItemIndex].count += 1;
    } else {
        cart.push({...listItem, count: 1})
    }

    this.setState({ ...this.state, cart })
    console.log(this.state);
  }

  // удаление товара из корзины 
  removeItemFromCart(code) {
    this.setState({
        ...this.state,
        cart: this.state.cart.filter(item => item.code !== code)
      })
  }

  // Переход в корзину и закрыть корзину
  toggleModal() {
    this.setState({...this.state, isShow: !this.state.isShow})
  }
}

export default Store;
