<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
  }
  .layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }
  .layout-nav{
    width: 420px;
    margin: 0 auto;
  }
  .layout-assistant{
    width: 300px;
    margin: 0 auto;
    height: inherit;
  }
  .layout-breadcrumb{
    padding: 10px 15px 0;
  }
  .layout-content{
    min-height: 200px;
    margin-left: 20px;
    margin-top: 20px;
    overflow: hidden;
    background: #f5f7f9;
    border-radius: 4px;
  }
  .layout-content-main{
    padding: 10px;
  }
  .layout-copy{
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
  }
</style>
<template>
  <div class="layout">
<!--    <Menu mode="horizontal" theme="dark" active-name="1">-->
<!--      <div class="layout-logo"></div>-->
<!--      <div class="layout-nav">-->
<!--        <Menu-item name="1">-->
<!--          <Icon type="ios-navigate"></Icon>-->
<!--          导航一-->
<!--        </Menu-item>-->
<!--        <Menu-item name="2">-->
<!--          <Icon type="ios-keypad"></Icon>-->
<!--          导航二-->
<!--        </Menu-item>-->
<!--        <Menu-item name="3">-->
<!--          <Icon type="ios-analytics"></Icon>-->
<!--          导航三-->
<!--        </Menu-item>-->
<!--        <Menu-item name="4">-->
<!--          <Icon type="ios-paper"></Icon>-->
<!--          导航四-->
<!--        </Menu-item>-->
<!--      </div>-->
<!--    </Menu>-->
    <div class="layout-content">
      <Row>
        <i-col span="5">
          <label>
            <Select v-model="model1" style="width:200px">
              <Option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</Option>
            </Select>
          </label>
          <label>
            <Select v-model="model1" style="width:200px">
              <Option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</Option>
            </Select>
          </label>
          <label>
            <Select v-model="model1" style="width:200px">
              <Option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</Option>
            </Select>
          </label>
        </i-col>
        <i-col span="18" >
          <div class="layout-content">
            <Table stripe border :columns="columns1" :data="data1"></Table>
          </div>
        </i-col>
      </Row>
    </div>
    <div class="layout-copy">
      2020 &copy; Roche
    </div>
  </div>

</template>
<script>
  export default {
    // name:Table,
    data () {
      return {
        columns1: [
          {
            title: 'Indication',
            key: 'Indication',
            width: 100
          },
          {
            title: 'Theme',
            key: 'Theme'
          },
          {
            title: 'Registration Strategy',
            key: 'Registration_Strategy'
          },
          {

          }
        ],
        data1: [
          {
            name: '王小明',
            age: 18,
            address: '北京市朝阳区芍药居'
          },
          {
            name: '张小刚',
            age: 25,
            address: '北京市海淀区西二旗'
          },
          {
            name: '李小红',
            age: 30,
            address: '上海市浦东新区世纪大道'
          },
          {
            name: '周小伟',
            age: 26,
            address: '深圳市南山区深南大道'
          }
        ]
      }
    }
  }
</script>
