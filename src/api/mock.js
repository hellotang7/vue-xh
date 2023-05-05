import Mock from 'mockjs'

import permission from "./mockData/permission";
//定义mock请求拦截
Mock.mock(/api\/permission\/getMenu/,'post',permission.getMenu)

