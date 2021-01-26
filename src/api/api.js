import Http from '../utils/axios';

export default {
    /**--------------添加文章--------------**/
    addArticle(params){
        return Http.post('/blog/addArticle',params)
    },
    /**--------------获取全部文章--------------**/
    getArticleList(params){
        return Http.get('/blog/getArticleList',params)
    }
}