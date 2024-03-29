import Http from '../utils/axios';

const api = '/blog'

export default {
    /**--------------添加文章--------------**/
    getUserInfo(params){
        return Http.get('/user/check_user',params)
    },
    /**--------------添加文章--------------**/
    addArticle(params){
        return Http.post(`${api}/addArticle`,params)
    },
    /**--------------获取全部文章--------------**/
    getArticleList(params){
        return Http.get(`${api}/getArticleList`,params)
    },
    /**--------------获取文章详情--------------**/
    getArticleDetails(params){
        return Http.get('/blog/getArticleDetails',params)
    }
}