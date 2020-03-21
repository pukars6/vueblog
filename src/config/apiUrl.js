//公网ip
let ipUrl = 'http://47.103.24.216:6060/'
//私有ip
// let ipUrl = 'http://172.19.94.105:7002/web/api/'

// let ipUrl = 'http://47.103.24.216:6060/'

let servicePath = {
    getPostList : ipUrl+'article/list',//首页接口
    getPostDetail : ipUrl+'article/',//首页接口
    getCategoryList : ipUrl+'category/list',
    getTagList : ipUrl+'tag/list'

}

export default servicePath