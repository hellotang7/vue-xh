import http from "../axios/request";

//请求首页数据
export const getMenu = (data) => {
    return http.post('/permission/getMenu',data)
}
