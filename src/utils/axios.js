import axios from "axios";

axios.defaults.timeout=15000;
axios.defaults.responseType="json";
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// axios.defaults.headers.common['Cache-Control']=''

// // http response 拦截器
// axios.interceptors.response.use(
//     response=>{
        
//     },
//     error=>{
//         return Promise.reject(error.response.data || {}) //返回接口返回的错误信息
//     }

// )

// // http resquest 拦截器
// axios.interceptors.request.use(
//     request=>{

//     }
// )

export default {
/**-------------get方法--------------**/
    get(url,params) {
        return new Promise((resolve,reject)=>{
            axios.get(url,{
                params:params
            }).then(res=>{
                resolve(res.data)
            }).catch(err=>{
                reject(err.data)
            })
        })
    },
/**-------------post方法--------------**/
    post(url,params){
        return new Promise((resolve,reject)=>{
            axios.post(url,params)
            .then(res=>{
                resolve(res.data)
            })
            .catch(err=>{
                reject(err.data)
            })
        })
    }
}
