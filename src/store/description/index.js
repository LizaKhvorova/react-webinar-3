import StoreModule from "../module";
import Api from "../../api";

class Description extends StoreModule {

    constructor(store, name) {
        super(store, name);
    }

    initState() {
        return {
           title: null,
           description: null,
           madeIn: null,
           code: null,
           category: null,
           edition: null,
           price: null
        };
    }

    async load(id) {
        const {result} = await Api.getItem(id);
        const {title, description, madeIn, category, edition, price } = result;
        this.setState({
            ...this.getState(),
            title,
            description,
            madeIn: madeIn.title,
            code: madeIn.code,
            category: category.title,
            edition,
            price: price.toLocaleString("ru-RU")
            }, 'Загружен товар из АПИ');
    }
}

export default Description;