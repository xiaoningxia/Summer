<template>
  <div id="app">
    <el-amap class="map" :vid="'amap'" :events="events" :zoom="8"></el-amap>
    <el-dialog
      title="7天预报"
      :visible.sync="dialogVisible"
      width="60%"
      height="300px"
      :before-close="handleClose">
      <div class="weatherBox-content" v-for="(item) in weatherList" :key="item.fxDate">
        <p>{{item.fxDate}}</p><p>{{item.textDay}}转{{item.textNight}}</p><i :class="`qi-${item.iconDay}`"></i><p>{{item.tempMin}}~{{item.tempMax}}°</p><p>{{item.windDirDay}}{{item.windScaleDay}}级</p>
      </div>
    </el-dialog>
  </div>
</template>
 
<script>
import {getWeatherList} from '@/api/demoApi'
export default {
  data() { 
    let self = this
    return {
      dialogVisible:false,
      weatherList:[],
      mapLngLat:null,
      events: {
        click(e) {
         localStorage.setItem('mapList', JSON.stringify(e.lnglat));
         self.mapLngLat = JSON.parse(localStorage.getItem('mapList'));
         self.getList()
        },
      },
    };
  },
  mounted() {
    
  },
  methods:{
    getList() {
      let lng = this.mapLngLat.lng.toFixed(2)
      let lat = this.mapLngLat.lat.toFixed(2)
      getWeatherList(lng,lat).then(res => {
        // console.log(res.data.daily)
        if(res.data.code == '200' && res.data.daily){
          this.weatherList = res.data.daily
          this.dialogVisible  = true
        }
      })
    },
    handleClose() {
      this.dialogVisible = false
    }
  }
};
</script>
 
<style>
  #app{
    width: 100%;
    height: 95vh;
  }
  .el-dialog__body{
    display: flex;
    justify-content: space-around;
  }
  .weatherBox-content{
    width: 14%;
    text-align: center;
  }
</style>
