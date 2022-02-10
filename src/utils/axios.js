import axios from "axios";
import { Message } from 'element-ui'

axios.defaults.timeout = 5000;
axios.defaults.responseType = "json";
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// axios.defaults.headers.common['Cache-Control']=''

// http response 拦截器
axios.interceptors.response.use(
    response => {
        console.log('响应', response)
        if (response.data.type === 'no_login') {
            console.log(window.location.href)
            window.location.href += 'login'
        } else if (response.data.code !== 200) {
            Message.error(response.data?.message ?? '系统异常')
            return Promise.reject(response.data)
        }
        return response.data
    },
    error => {
        console.log('错误', error.response)
        // if(error.response.status === 500)  Message.error(error.response.data || '网络异常')
        return Promise.reject(error.response?.data ?? {}) //返回接口返回的错误信息
    }

)

// // http resquest 拦截器
axios.interceptors.request.use(
    request => {
        console.log('请求', request)
        let userInfo = sessionStorage.getItem('userInfo')
        if (userInfo?.token) request.headers.token = userInfo.token;
        return request
    }
)

export default class Http {
    static send (config, loading) {
        const currentUrl = encodeURIComponent(window.location.href)
        const configs = Object.assign(
            {
                headers: {
                    muimo: 'muimopab'
                },
                timeout: 30000
            },
            config
        )
        let userInfo = sessionStorage.getItem('userInfo')
        if (userInfo?.token) configs.headers.token = userInfo.token;
        return axios(configs)
    }
    static get (url, params = {}, loading) {
        let config = {
            method: 'get',
            url,
            data: params
        }
        let urlParams = []
        Object.keys(params).forEach((key, index) => {
            urlParams = [...urlParams, `${key}=${encodeURIComponent(params[key])}`]
        })
        config.url += urlParams.length ? '?' + urlParams.join('&') : ''
        return Http.send(config, loading)
    }
    static post (url, params = {}, loading) {
        let config = {
            method: 'post',
            url,
            data: params
        }
        return Http.send(config, loading)
    }
}
