import axios from './config'


// 登录
export const login = data => axios.post('/login',data)

//-------------------- 商品管理


// 查询商品
export const selectGoods = params => axios.get('/goods',{params})
 
// 按名称查询
export const selectGoodsName = params => axios.get('/goods_name',{params})

