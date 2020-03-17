//公网ip
let ipUrl = 'http://localhost:6060/'
//私有ip
// let ipUrl = 'http://172.19.94.105:7002/web/api/'

// let ipUrl = 'http://localhost:7002/web/api/'

let servicePath = {
    getPostList : ipUrl+'article/list',//首页接口
    getArticleById : ipUrl+'getArticleById/',//详细页接口
    getTypeInfo : ipUrl+'getTypeInfo',//首页导航内容接口
    getListById : ipUrl+'getListById/',//根据类别id获取文章列表
    getImgUrlByName : ipUrl+'getImgUrlByName/'
}

export default servicePath