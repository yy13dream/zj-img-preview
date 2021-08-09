# zj-img-preview

## Project setup
```
npm install -g nrm
nrm add sinoiov http://npm.sinoiov.com:4873/
nrm use sinoiov
npm install zj-img-preview
```

### Usage
```
import ImgPreview from 'zj-img-preview'
import 'zj-img-preview/lib/index.css'
Vue.prototype.$imgPreview = ImgPreview
```

### Api
```
this.$imgPreview({ list: [] })
list: <Array> 预览图片数组
```
### 预览
```
支持多张图片预览，图片切换，滚轮放大，缩小，旋转，下载
![Image text](https://raw.githubusercontent.com/yy13dream/imgFolder/master/img-preview.jpg)
```
