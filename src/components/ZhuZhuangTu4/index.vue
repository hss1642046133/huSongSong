<template>
  <div id="zhuzhuangtu">
    <div id="chartPie10" style="width: 100%; height: 500px;margin-top: -50px;"></div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "ZhuZhuangTu",
  data() {
    return {
      chartPie10: null
    };
  },
  methods: {
    drawPieChart() {
      this.chartPie10 = echarts.init(document.getElementById("chartPie10"));
      this.chartPie10.setOption({
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["house_num", "house_area"],
          left: "center",
          bottom: 0
        },
        calculable: true,
        xAxis: [
          {
            type: "category",
            data: ["毛胚", "精装", "豪华精华", "入住"]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "house_num",
            type: "bar",
            data: [1000, 500, 100, 100],
            itemStyle:{ normal:{ color:'#3aa1ff' } }
          },
          {
            name: "house_area",
            type: "bar",
            data: [90, 120, 150, 98],
            itemStyle:{ normal:{ color:'#4ecb73' } }
          }
        ],
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