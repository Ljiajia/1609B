<template>
  <div>
    <pan-thumb :image="image" />
    <el-button type="primary" icon="upload" style="position: absolute;bottom: 15px;margin-left: 40px;" @click="imagecropperShow=true">
      Change Avatar
    </el-button>

    <image-cropper
      v-show="imagecropperShow"
      :key="imagecropperKey"
      :width="300"
      :height="300"
      url="http://123.206.55.50:11000/upload"
      lang-type="en"
      @close="close"
      @crop-upload-success="cropSuccess"
    />
  </div>
</template>

<script>
import ImageCropper from '@/components/ImageCropper'
import PanThumb from '@/components/PanThumb'

export default {
  data(){
    return {
      imagecropperShow: false,
      imagecropperKey: 0,
      image: 'https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191'
    }
  },
  components: {
    ImageCropper,
    PanThumb,
  },
  methods: {
    close(){
      this.imagecropperShow = false;
    },
    cropSuccess(e){
      this.image = e[0].path;
      this.imagecropperShow = false;
    }
  },
  mounted(){
    // 1.获取uid,组成本地存储的key
    const key = 'showTip_'+'abcd';
    // 2.拿uid去本地存储中获取
    let num = window.localStorage.getItem(uid);
    // 3.判断num是否存在
    if (num){
      num = parseInt(num);
      // 3.1.判断num的值
      if (num == 1 || num == 2){
        // 3.1.1 已经显示一次或两次，这时候继续显示tip，并设置num为1+num
        window.localStorage.setItem(key, 1+num)
        // 显示tip的逻辑
      }else if(num == 3){
        // 3.1.2 这时候提示已经显示过三次，不需要再次显示，啥也不用做
      }
    }else{
      // 3.2num不存在，表示一次tip也没有显示过
      window.localStorage.setItem(key, 1)
      // 显示tip的逻辑
    }
  }
}
</script>
