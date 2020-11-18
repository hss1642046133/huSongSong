<template>
  <div class="amap-page-container">
    <el-amap vid="amapDemo" style="height: 425px;" :center="center" :zoom="zoom" class="amap-demo" :events="events">
    </el-amap>
  </div>
</template>

<script>
import { AMapManager } from 'vue-amap';
export default {
  name: "LuJingTu",
  data: function () {
    let self = this;

    return {
      zoom: 12,
      center: [121.59996, 31.197646],
      address: "",
      events: {
        click(e) {
          let { lng, lat } = e.lnglat;
          self.lng = lng;
          self.lat = lat;

          // 这里通过高德 SDK 完成。
          var geocoder = new AMap.Geocoder({
            radius: 1000,
            extensions: "all",
          });
          geocoder.getAddress([lng, lat], function (status, result) {
            if (status === "complete" && result.info === "OK") {
              if (result && result.regeocode) {
                self.address = result.regeocode.formattedAddress;
                self.$nextTick();
              }
            }
          });
        },
      },
      lng: 0,
      lat: 0,
    };
  },
};
</script>

<style scoped>
.amap-demo {
  height: 260px;
}
</style>