<template>
  <div id="zhexiantu">
    <div id="chartPie12" style="width: 100%; height: 400px;margin-top: 0px;"></div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "ZheXianTu",
  data() {
    return {
      chartPie12: null
    };
  },
  methods: {
    drawPieChart() {
      this.chartPie12 = echarts.init(document.getElementById("chartPie12"));
      this.chartPie12.setOption({
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
            data: [200, 800, 900, 500, 300, 50],
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