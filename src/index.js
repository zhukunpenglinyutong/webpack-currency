import './css/index1.css'
import './css/index2.less'

import testObj from './js/test'
let { headerPath } = testObj

let promiseArr = [
  new Promise( res => {}),
  new Promise( res => {})
]

promiseArr.map( item => console.log(item) );

console.log('图片地址是：', headerPath);
