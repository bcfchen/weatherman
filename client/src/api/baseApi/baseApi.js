import axios from "axios";
import { beginAjaxCall, ajaxCallError, ajaxCallSuccess } from "../../redux/actions/ajaxStatusActions";
class BaseApi {
    constructor() {
        this.client = axios.create();
        this.client.defaults.timeout = 1000;
    }

    get(requestUrl, dispatch, errorMsg = "") {
        dispatch(beginAjaxCall());
        return this.client.get(requestUrl).then(response => {
            dispatch(ajaxCallSuccess());
            return response;
        }).catch(err => {
            let fullErrMsg = errorMsg + " with message: " + err.message;
            dispatch(ajaxCallError(fullErrMsg));
            throw (fullErrMsg);
        });
    }

    getSimple(requestUrl, errorMsg = "") {
        return this.client.get(requestUrl).catch(err => {
            let fullErrMsg = errorMsg + " with message: " + err.message;
            throw (fullErrMsg);
        });
    }
}

export default new BaseApi();

