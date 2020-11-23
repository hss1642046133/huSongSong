<template>
  <div id="zhuti">
    <div class="zhuti-div1">
      <p>房屋信息</p>
    </div>
    <div class="zhuti-div2">
      <div class="zhuti-div2-div1">
        <div class="block">
          <el-select v-model="value" clearable placeholder="房产类型">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div class="block">
          <el-select v-model="value1" clearable placeholder="区域">
            <el-option
              v-for="item in options1"
              :key="item.value1"
              :label="item.label1"
              :value="item.value1"
            ></el-option>
          </el-select>
        </div>
        <div class="block">
          <el-select v-model="value2" clearable placeholder="装修">
            <el-option
              v-for="item in options2"
              :key="item.value2"
              :label="item.label2"
              :value="item.value2"
            ></el-option>
          </el-select>
        </div>
        <div class="block">
          <el-select v-model="value3" clearable placeholder="房屋类型">
            <el-option
              v-for="item in options3"
              :key="item.value3"
              :label="item.label3"
              :value="item.value3"
            ></el-option>
          </el-select>
        </div>
        <div class="block">
          <el-input placeholder="请输入房屋编号" v-model="input" clearable></el-input>
        </div>
        <div class="block">
          <el-button type="primary" class="chaxun">查询</el-button>
        </div>
        <div class="block">
          <el-button type="primary" class="chaxun" @click="dialogVisible = true">添加</el-button>
        </div>
        <el-dialog
          title="房屋信息"
          :visible.sync="dialogVisible"
          width="30%"
          :before-close="handleClose"
        >
          <div class="block1">
            <span class="demonstration">房产类型：</span>
            <el-select v-model="value4" clearable placeholder="请选择">
              <el-option
                v-for="item in options4"
                :key="item.value4"
                :label="item.label4"
                :value="item.value4"
              ></el-option>
            </el-select>
          </div>
          <div class="block1">
            <span class="demonstration">区&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;域：</span>
            <el-select v-model="value5" clearable placeholder="请选择">
              <el-option
                v-for="item in options5"
                :key="item.value5"
                :label="item.label5"
                :value="item.value5"
              ></el-option>
            </el-select>
          </div>
          <div class="block1">
            <span class="demonstration">面&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;积：</span>
            <el-input class="kd" placeholder="请输入内容" v-model="input1" clearable></el-input>
          </div>
          <div class="block1">
            <span class="demonstration">几室几厅：</span>
            <el-select v-model="value6" clearable placeholder="请选择">
              <el-option
                v-for="item in options6"
                :key="item.value6"
                :label="item.label6"
                :value="item.value6"
              ></el-option>
            </el-select>
          </div>
          <div class="block1">
            <span class="demonstration">房屋编号：</span>
            <el-input placeholder="请输入内容" v-model="input2" clearable></el-input>
          </div>
          <div class="block1">
            <span class="demonstration">装&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;修：</span>
            <el-select v-model="value7" clearable placeholder="请选择">
              <el-option
                v-for="item in options7"
                :key="item.value7"
                :label="item.label7"
                :value="item.value7"
              ></el-option>
            </el-select>
          </div>
          <div class="block1">
            <span class="demonstration">房屋类型：</span>
            <el-select v-model="value8" clearable placeholder="请选择">
              <el-option
                v-for="item in options8"
                :key="item.value8"
                :label="item.label8"
                :value="item.value8"
              ></el-option>
            </el-select>
          </div>
          <div class="block2">
            <span class="demonstration">房屋备注：</span>
            <el-input
              type="textarea"
              style="width: 80%;"
              :rows="2"
              placeholder="请输入房屋备注"
              v-model="textarea"
            ></el-input>
          </div>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          </span>
        </el-dialog>
      </div>
      <div class="zhuti-div2-div2">
        <el-table
          :header-cell-style="{background:'#623bfe',color:'#ffffff'}"
          :data="tableData"
          border
          style="width: 100%"
        >
          <el-table-column
            header-align="center"
            align="center"
            prop="serial"
            label="序号"
            width="105"
          ></el-table-column>
          <el-table-column
            header-align="center"
            align="center"
            prop="house"
            label="房产类型"
            width="105"
          ></el-table-column>
          <el-table-column header-align="center" align="center" prop="area" label="区域" width="105"></el-table-column>
          <el-table-column
            header-align="center"
            align="center"
            prop="acreage"
            label="面积"
            width="105"
          ></el-table-column>
          <el-table-column
            header-align="center"
            align="center"
            prop="habitable"
            label="几室几厅"
            width="105"
          ></el-table-column>
          <el-table-column
            header-align="center"
            align="center"
            prop="number"
            label="楼层索引（房屋编号）"
            width="170"
          ></el-table-column>
          <el-table-column
            header-align="center"
            align="center"
            prop="fitment"
            label="装修"
            width="105"
          ></el-table-column>
          <el-table-column
            header-align="center"
            align="center"
            prop="building"
            label="房屋类型"
            width="105"
          ></el-table-column>
          <el-table-column header-align="center" align="center" prop="operation" label="操作">
            <div class="el-table-column-div">
              <ul class="el-table-column-div-ul">
                <li @click="dialogVisible = true">修改</li>
                <li @click="dialogVisible1 = true">删除</li>
                <li>详情</li>
              </ul>
            </div>
          </el-table-column>
        </el-table>
        <el-dialog
          title="系统提示"
          :visible.sync="dialogVisible1"
          width="30%"
          :before-close="handleClose"
        >
          <div class="tuichu-div">
            <i class="el-icon-question tuichu-i"></i>
            <span class="tuichu-span">确定要删除 1栋101室 房屋信息吗？</span>
          </div>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible1 = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible1 = false">确 定</el-button>
          </span>
        </el-dialog>
      </div>
      <div class="shuifei-div2-div3">
        <ul class="shuifei-div2-div3-ul">
          <li>
            <span>总账单数:100/条</span>
            <span>页数:1/9</span>
            <span>每页:12/条</span>
          </li>
          <li>
            <el-pagination background layout="prev, pager, next" :total="90"></el-pagination>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FangWuXinXi",
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "一手房"
        },
        {
          value: "选项2",
          label: "二手房"
        }
      ],
      value: "",
      options1: [
        {
          value1: "选项1",
          label1: "A区"
        },
        {
          value1: "选项2",
          label1: "B区"
        },
        {
          value1: "选项3",
          label1: "C区"
        },
        {
          value1: "选项4",
          label1: "D区"
        }
      ],
      value1: "",
      options2: [
        {
          value2: "选项1",
          label2: "毛胚"
        },
        {
          value2: "选项2",
          label2: "精装"
        },
        {
          value2: "选项3",
          label2: "简装"
        },
        {
          value2: "选项4",
          label2: "豪华装修"
        }
      ],
      value2: "",
      options3: [
        {
          value3: "选项1",
          label3: "商品房"
        },
        {
          value3: "选项2",
          label3: "经济适用房"
        },
        {
          value3: "选项3",
          label3: "小产权"
        },
        {
          value3: "选项4",
          label3: "xxx"
        }
      ],
      value3: "",
      options4: [
        {
          value4: "选项1",
          label4: "一手房"
        },
        {
          value4: "选项2",
          label4: "二手房"
        },
        {
          value4: "选项3",
          label4: "廉租房"
        }
      ],
      value4: "二手房",
      options5: [
        {
          value5: "选项1",
          label5: "A区"
        },
        {
          value5: "选项2",
          label5: "B区"
        },
        {
          value5: "选项3",
          label5: "C区"
        }
      ],
      value5: "A区",
      options6: [
        {
          value6: "选项1",
          label6: "1室1厅"
        },
        {
          value6: "选项2",
          label6: "2室1厅"
        },
        {
          value6: "选项3",
          label6: "2室2厅"
        }
      ],
      value6: "2室2厅",
      options7: [
        {
          value7: "选项1",
          label7: "毛胚"
        },
        {
          value7: "选项2",
          label7: "简装"
        },
        {
          value7: "选项3",
          label7: "精装"
        }
      ],
      value7: "毛胚",
      options8: [
        {
          value8: "选项1",
          label8: "商品房"
        },
        {
          value8: "选项2",
          label8: "经济适用房"
        }
      ],
      value8: "商品房",
      input: "",
      input1: "98/平米",
      input2: "1栋101室",
      textarea: "",
      tableData: [
        {
          serial: "1",
          house: "二手房",
          area: "A区",
          acreage: "98/平米",
          habitable: "2室2厅",
          number: "1栋101室",
          fitment: "毛坏",
          building: "商品房",
          operation: "删除"
        },
        {
          serial: "2",
          house: "一手房",
          area: "B区",
          acreage: "98/平米",
          habitable: "3室2厅",
          number: "1栋102室",
          fitment: "精装",
          building: "商品房",
          operation: "删除"
        },
        {
          serial: "3",
          house: "二手房",
          area: "C区",
          acreage: "98/平米",
          habitable: "2室2厅",
          number: "1栋103室",
          fitment: "豪华精装",
          building: "经济适用房",
          operation: "删除"
        },
        {
          serial: "4",
          house: "二手房",
          area: "D区",
          acreage: "98/平米",
          habitable: "3室2厅",
          number: "1栋104室",
          fitment: "精装",
          building: "经济适用房",
          operation: "删除"
        }
      ],
      dialogVisible: false,
      dialogVisible1: false
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  }
};
</script>

<style scoped>
#zhuti {
  position: absolute;
  left: 20%;
  top: 100px;
  width: 79.8%;
  overflow-x: hidden;
  overflow-y: scroll;
  height: 520px;
}
.zhuti-div1 {
  margin-right: 5px;
  height: 33px;
  background: linear-gradient(to right, #623bfe, #faf9fe);
  display: flex;
  align-items: center;
}
.zhuti-div1 p {
  border-left: 2px solid #ffffff;
  margin-left: 10px;
  padding-left: 10px;
  color: #ffffff;
}
.zhuti-div2 {
  border: 1px solid #ededff;
  margin-right: 5px;
}
.zhuti-div2-div1 {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}
.chaxun {
  width: 80px;
  margin-right: 30px;
  margin: 0;
}
.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 200px;
}
.zhuti-div2-div2 {
  margin: 20px 10px 200px 10px;
}
.el-table-column-div-ul li {
  display: inline-block;
  padding: 0 5px;
  cursor: pointer;
}
.el-table-column-div-ul li:nth-of-type(1) {
  color: #623bfe;
}
.el-table-column-div-ul li:nth-of-type(2) {
  color: red;
}
.el-table-column-div-ul li:nth-of-type(3) {
  color: #623bfe;
}
.shuifei-div2-div3 {
  border-top: 1px solid #f0f0ff;
  padding: 10px 0;
  margin-top: 100px;
}
.shuifei-div2-div3-ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.shuifei-div2-div3-ul li:nth-of-type(1) span ~ span {
  margin-left: 20px;
}
.el-select {
  width: 150px;
}
::v-deep .el-dialog__header {
  background-color: #623bfe;
}
::v-deep .el-dialog__title {
  color: #ffffff;
}
.block1 {
  display: flex;
  align-items: center;
}
.block1 ~ .block1 {
  margin-top: 10px;
}
.block1 .el-input {
  width: 80%;
}
.block1 .el-select {
  width: 80%;
}
.block2 {
  display: flex;
  margin-top: 10px;
}
.tuichu-div {
  display: flex;
  justify-content: center;
  align-items: center;
}
.tuichu-i {
  color: red;
  font-size: 40px;
  margin-right: 5px;
}
.tuichu-span {
  font-size: 20px;
}
</style>