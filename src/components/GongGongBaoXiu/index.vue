<template>
  <div id="gonggongbaoxiu">
    <div class="gonggongbaoxiu-div1">
      <div class="block">
        <span class="demonstration">开始日期：</span>
        <el-date-picker v-model="value1" align="right" type="date" placeholder="年/月/日" :picker-options="pickerOptions">
        </el-date-picker>
      </div>
      <div class="block">
        <span class="demonstration">结束日期：</span>
        <el-date-picker v-model="value2" align="right" type="date" placeholder="年/月/日" :picker-options="pickerOptions">
        </el-date-picker>
      </div>
      <div class="block srk">
        <el-select v-model="value" clearable placeholder="状态">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="block srk">
        <el-input placeholder="请输入报修人姓名" size="10" v-model="input" clearable></el-input>
      </div>
      <div class="block">
        <el-button type="primary" class="chaxun">查询</el-button>
      </div>
    </div>
    <div class="gonggongbaoxiu-div2">
      <el-table :header-cell-style="{ background: '#623bfe', color: '#ffffff' }" :data="tableData" border style="width: 100%">
        <el-table-column header-align="center" align="center" prop="serial" label="序号" width="70">
        </el-table-column>
        <el-table-column header-align="center" align="center" prop="date" label="报修时间" width="160">
        </el-table-column>
        <el-table-column header-align="center" align="center" prop="location" label="报修位置" width="150">
          <div>
            <span>A区 地下停车场...</span>
            <i class="el-icon-location"></i>
          </div>
        </el-table-column>
        <el-table-column header-align="center" align="center" prop="content" label="报修内容" width="130">
        </el-table-column>
        <el-table-column header-align="center" align="center" prop="person" label="报修人" width="75">
        </el-table-column>
        <el-table-column header-align="center" align="center" prop="accept" label="受理状态" width="80">
        </el-table-column>
        <el-table-column header-align="center" align="center" prop="revise" label="修复状态" width="80">
        </el-table-column>
        <el-table-column header-align="center" align="center" prop="maintenance" label="修复时间" width="160">
        </el-table-column>
        <el-table-column header-align="center" align="center" prop="solve" label="解决人" width="75">
        </el-table-column>
        <el-table-column header-align="center" align="center" prop="operation" label="操作">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "GongGongBaoXiu",
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            },
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            },
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            },
          },
        ],
      },
      value1: "",
      value2: "",
      options: [
        {
          value: "选项1",
          label: "已受理",
        },
        {
          value: "选项2",
          label: "等待受理",
        },
        {
          value: "选项3",
          label: "正在进行",
        },
        {
          value: "选项4",
          label: "已修复",
        },
        {
          value: "选项5",
          label: "等待修复",
        }
      ],
      value: "",
      input: "",
      tableData: [
        {
          serial: "1",
          date: "2019-09-12 16:12:20",
          location: "A区 地下停车场...",
          content: "电梯口门锁损坏",
          person: "张xx",
          accept: "等待受理",
          revise: "-",
          maintenance: '-',
          solve: '李xx',
          operation: '查看详情'
        },
        {
          serial: "2",
          date: "2019-09-12 16:12:20",
          location: "A区 地下停车场...",
          content: "电梯口门锁损坏",
          person: "张xx",
          accept: "已受理",
          revise: "等待修复",
          maintenance: '-',
          solve: '李xx',
          operation: '查看详情'
        },
        {
          serial: "3",
          date: "2019-09-12 16:12:20",
          location: "A区 地下停车场...",
          content: "电梯口门锁损坏",
          person: "张xx",
          accept: "已受理",
          revise: "正在修复",
          maintenance: '-',
          solve: '李xx',
          operation: '查看详情'
        },
        {
          serial: "4",
          date: "2019-09-12 16:12:20",
          location: "A区 地下停车场...",
          content: "电梯口门锁损坏",
          person: "张xx",
          accept: "已受理",
          revise: "已修复",
          maintenance: '2019-09-11 16:12:20',
          solve: '李xx',
          operation: '查看详情'
        }
      ],
    };
  },
};
</script>

<style scoped>
.gonggongbaoxiu-div1 {
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
}
.chaxun {
  width: 120px;
  margin-right: 30px;
  margin: 0;
}
.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 150px;
}
.srk {
  width: 160px;
}
.gonggongbaoxiu-div2 {
  margin: 10px 10px 0 10px;
}
::v-deep .el-table__row td:nth-of-type(10){
  color: red;
  cursor: pointer;
}
::v-deep .el-table__body tr:nth-of-type(1) td:nth-of-type(6){
  color: red;
}
::v-deep .el-table__body tr:nth-of-type(2) td:nth-of-type(6){
  color: #009688;
}
::v-deep .el-table__body tr:nth-of-type(3) td:nth-of-type(6){
  color: #009688;
}
::v-deep .el-table__body tr:nth-of-type(4) td:nth-of-type(6){
  color: #009688;
}
::v-deep .el-table__body tr:nth-of-type(2) td:nth-of-type(7){
  color: red;
}
::v-deep .el-table__body tr:nth-of-type(3) td:nth-of-type(7){
  color: #623bfe;
}
::v-deep .el-table__body tr:nth-of-type(4) td:nth-of-type(7){
  color: #623bfe;
}
i{
  color: #623bfe;
  font-size: 20px;
}
</style>