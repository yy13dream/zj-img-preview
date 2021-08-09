<template>
  <div id="app">
    <a href="javascript:;" @click="preview">预览</a>
  </div>
</template>

<script>

export default {
  name: 'App',
  created() {
    this.preview()
  },
  methods: {
    preview() {
      console.log(this)
      this.$imgPreview({ list: ['http://p4.img.cctvpic.com/photoAlbum/photo/2021/05/25/PHOTv0AZANodnJPNa9aQ9KUL210525_1000x2000.jpg', 'https://dss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=1700730599,747362983&fm=202&mola=new&crop=v1']})
    }
  }
}
</script>

