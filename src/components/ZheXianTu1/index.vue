<template>
  <div id="zhexiantu">
    <div id="chartPie11" style="width: 100%; height: 400px;margin-top: 0px;"></div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "ZheXianTu",
  data() {
    return {
      chartPie11: null
    };
  },
  methods: {
    drawPieChart() {
      this.chartPie11 = echarts.init(document.getElementById("chartPie11"));
      this.chartPie11.setOption({
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["水费", "电费", "煤气费", "宽带费", "停车费", "物业费"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [500, 1000, 1200, 900, 1000, 200],
            type: "line",
            areaStyle: {},
            itemStyle:{ normal:{ color:'#b9ddff' } }
          }
        ]
      });
    },
    drawCharts() {
      this.drawPieChart();
    }
  },
  mounted: function() {
    this.drawCharts();
  }
};
</script>