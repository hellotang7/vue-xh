`
<template>
  <div class="main">

    <div class="left">
        <div class="left-gl">
          <div class="left-gl-user card">
            <div class="left">
              <img src="@/assets/vue.png" alt="" style="width: 90px">
              <span>管理员</span>
            </div>
            <div class="right">
              <h1>用户登录信息</h1>
              <span>默认班组</span>
              <h1
              >角色类型:管理员</h1>
              <span><i class="el-icon-phone"></i>:暂无</span>
              <span><i class="el-icon-s-promotion"></i>:暂无</span>
            </div>
          </div>
          <div class="left-gl-form card">
            <div v-for="i in tabData" :key="i.icon">
              <router-link :to="`${i.path}`">
              <i :class="`${i.icon}`"></i>
              <p>{{ i.text }}</p>
              </router-link>
            </div>
          </div>
        </div>
        <div class="left-xx">
          <div class="left-xx-statistics card">
            <div class="left-xx-statistics-xx">
              <div class="z">
                <h2>信息统计</h2>
                <el-table
                    :data="tableData"
                    style="width: 100% "
                    :show-header="false"
                    :border="false"
                    :row-class-name="''"
                >
                  <el-table-column
                      prop="date"
                      width="120">
                  </el-table-column>
                  <el-table-column
                      prop="name"
                      width="30">
                  </el-table-column>
                  <el-table-column
                      prop="address"
                  >
                  </el-table-column>
                </el-table>

              </div>
              <div class="y">
                <h2>异常信息</h2>
                <p>暂无异常信息</p>
              </div>
            </div>
            <div class="left-xx-statistics-ech" ref="echats1"></div>
          </div>
          <div class="left-xx-asset card" ref="echats2"></div>
        </div>
      </div>
      <div class="right">
        <div class="right-msg card">
          <p>暂无异常信息</p>
          <h2>最新入库消息</h2>
          <i class="el-icon-message-solid"></i>
        </div>
        <div class="right-img card">
          <h2>库房三维效果图</h2>
          <img src="@/assets/vue.png" alt="">
        </div>
      </div>
    </div>


</template>

<script>
import * as echarts from 'echarts';

export default {
  data() {
    return {
      tabData: [
        {
          icon: "el-icon-s-order",
          text: '出入单据',
          path: "/churu"
        },
        {
          icon: "el-icon-s-release",
          text: '新增申领',
          path: "/shenling"
        },
        {
          icon: "el-icon-s-ticket",
          text: '便查服务',
          path: "/taizhang"
        },
        {
          icon: "el-icon-s-management",
          text: '存放位置',
          path: "/taizhang"
        },
        {
          icon: "el-icon-s-open",
          text: '用户管理',
          path: "/xitong"
        },
        {
          icon: "el-icon-s-shop",
          text: '资产分析',
          path: "/fenxi"
        },
        {
          icon: "el-icon-s-marketing",
          text: '统计信息',
          path: "/fenxi"
        },
        {
          icon: "el-icon-s-flag",
          text: '日志管理',
          path: "/xitong"
        },

      ],
      tableData: [
        {
          date: '今日出库资产',
          name: '●',
          address: '0'
        }, {
          date: '工器具总数',
          name: '●',
          address: '3'
        }, {
          date: '今日出库单据',
          name: '●',
          address: '0'
        }, {
          date: '耗材总数',
          name: '●',
          address: '0'
        }]
    }
  },
  mounted() {
    // console.log(this.$route)
    // 基于准备好的dom，初始化echarts实例
    var myChart1 = echarts.init(this.$refs.echats1);
    var myChart2 = echarts.init(this.$refs.echats2);
    // 绘制图表1
    myChart1.setOption({
      title: {
        textStyle: {
          color: "#666",
        },
        text: '近期出入库单据数量统计',
        left: 'center',


      },
      grid: {
        left: '3%',
        right: '8%',
        bottom: '10%',
        containLabel: true
      },
      xAxis: [
        {

          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisTick: {
            alignWithLabel: true
          },
          name: "日期",
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: "数量",
          axisLine: {
            show: true,
            onZero: false
          },
          axisTick: {
            show: true
          }
        }
      ],
      series: [
        {
          name: 'Direct',
          type: 'bar',
          barWidth: '60%',
          data: [10, 52, 200, 334, 390, 330, 220]
        }
      ]
    });
    // 绘制图表2
    myChart2.setOption({
      title: {
        textStyle: {
          color: "#666",
        },
        text: '资产分布情况',
        left: 'center',

      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        bottom: 10,
        textStyle: {
          color: "#666",
        },
      },
      series: [
        {

          type: 'pie',
          radius: ['30%', '50%'],
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          data: [
            {value: 1048, name: '在库(合格)'},
            {value: 735, name: '在库(待实验)'},
            {value: 580, name: '在库(超时未试验)'},
            {value: 484, name: '在库(待维修)'},
            {value: 300, name: '在库(作业中)'},
            {value: 188, name: '在库(试验中)'},
            {value: 275, name: '出库(维修中)'},
            {value: 550, name: '出库(异常作业-维修)'},
            {value: 444, name: '异常作业-试验'},

          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    });
  },
  // computed: {
  //   breadCrumb() {
  //     return this.$route.matched
  //   },
  // },


}
</script>

<style lang="scss" scoped>

h2 {
  color: #666666;
  font-size: 18px;
  margin: 0;
}

.card {
  border-radius: 6px;
  background: white;
  margin-top: 8px;
  margin-right: 8px;
  padding: 10px 20px;
}

  //margin: 10px 10px;
  //flex: 1;
  //background: rgba(240, 243, 246);

//  .mbx {
//    font-size: 15px;
//    height: 20px;
//    border-bottom: 2px solid rgba(177, 193, 196);
//    padding-bottom: 4px;
//    color: #999;
//  }

  .main {
    //background: rgba(240, 243, 246);
    height: calc(100% - 42px);
    display: flex;

    .left {
      flex: 1;
      display: flex;
      flex-direction: column;

      .left-gl {
        height: 200px;
        display: flex;

        .left-gl-user {
          width: 30%;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          //border: 1px solid red;

          .left {
            //border: 1px solid red;
            width: 40%;
            display: flex;
            justify-content: center;
            align-items: center;

            span {
              margin-top: 20px;
            }
          }

          .right {
            margin-top: -16px;
            //border: 1px solid red;
            width: 60%;

            h1 {
              color: #666;
            }

            span {
              color: #999999;
              font-size: 13px;
            }
          }
        }

        .left-gl-form {
          width: 70%;
          display: flex;
          flex-wrap: wrap;

          div {
            display: flex;
            justify-content: center;
            width: 25%;
            height: 50%;
            border-right: 1px solid #F5F5F5;
            border-bottom: 1px solid #F5F5F5;
            margin-left: -1px;
            a{
              text-decoration: none;
              display: flex;
              align-items: center;
            }

            i {
              font-size: 30px;
              color: rgba(72, 118, 231);
            }

            p {
              margin: 0;
              font-size: 14px;
              color: #333;
            }

          }

          div:nth-child(4) {
            border-right: none;
          }

          div:nth-child(5) {
            border-bottom: none;

          }

          div:nth-child(6) {
            border-bottom: none;

          }

          div:nth-child(7) {
            border-bottom: none;

          }

          div:nth-child(8) {
            border-right: none;
            border-bottom: none;
          }
        }
      }

      .left-xx {

        flex: 1;
        display: flex;

        .left-xx-statistics {

          width: 55%;

          .left-xx-statistics-xx {
            height: 50%;
            display: flex;
            border-bottom: 1px solid #F5F5F5;


            .z {
              border-right: 1px solid #F5F5F5;
              width: 60%;

            }


            .y {
              width: 40%;
              padding-left: 10px;

              p {
                color: rgba(204, 204, 204);
                text-align: center;

              }
            }
          }

          .left-xx-statistics-ech {
            height: 50%;
            padding: 10px 10px;
          }


        }

        .left-xx-asset {
          padding: 30px 10px;
          width: 45%;

        }
      }
    }

    .right {
      width: 350px;
      display: flex;
      flex-direction: column;


      .right-msg {
        height: 40%;
        display: flex;
        justify-content: space-between;
        position: relative;

        h2 {
          margin: 0;

        }

        i {
          color: rgba(255, 125, 0);

        }


        p {
          position: absolute;
          color: rgba(204, 204, 204);
          line-height: 80px;
          left: 50%;
          margin-left: -40px;

        }
      }

      .right-img {
        height: 60%;
        text-align: center;

        img {
          width: 300px;
          height: 300px;
        }
      }
    }
  }



</style>
`
