import Vue from 'vue'
import imgPreview from './img-preview'

const install = (option = {}) => {
  // 扩展vue构造器
  const Imgpreview = Vue.extend(imgPreview);
  // 判断是否安装
//   if (install.installed) return
  // 创建实例并且过滤参数
  const instance = new Imgpreview({
    data () {
      return { ...option, visible: true }
    }
  })
  // 挂载实例
  instance.$mount()
  document.body.appendChild(instance.$el)
  return instance
}
// 挂载到Vue原型上
export default install