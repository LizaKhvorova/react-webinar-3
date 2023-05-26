import {
    codeGenerator
} from "../../utils";
import StoreModule from "../module";
import Api from "../../api";

class Catalog extends StoreModule {

    constructor(store, name) {
        super(store, name);
        this.generateCode = codeGenerator(0);
    }

    initState() {
        return {
            list: []
        };
    }

    async load(currentPage, limit) {
        const skip = limit * currentPage;
        const json = await Api.getCatalog(skip, limit);
        const pageAmount = Math.ceil(json.result.count / limit);
        this.setState({
        ...this.getState(),
            list: json.result.items,
            count: json.result.count,
            limit,
            pageAmount
        }, 'Загружены товары из АПИ');
    }

    async describe(id) {
        const response = await fetch("api/v1/articles/646b6e1fe1626c0bd8518064?fields=*,madeIn(title,code),category(title)");
        const json = await response.json();
        
    }
}

export default Catalog;