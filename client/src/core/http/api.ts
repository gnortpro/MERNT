import { Config } from 'env/config';
import API from 'http';

const singleton = Symbol();
const singletonEnforcer = Symbol();

class CallApi extends API {
    constructor(enforcer) {
        if (enforcer !== singletonEnforcer) {
            throw new Error('Cannot construct singleton');
        }

        super(Config, {});
    }

    static get getInstance() {
        if (!this[singleton]) {
            this[singleton] = new CallApi(singletonEnforcer);
        }
        return this[singleton];
    }
}

export default CallApi.getInstance;
