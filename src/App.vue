<template>
  <h2>button</h2>
  <div class="row">
    <tex-button type="primary">删除</tex-button>
    <tex-button type="success">删除</tex-button>
    <tex-button type="info">删除</tex-button>
    <tex-button type="warning">警告</tex-button>
    <tex-button type="danger">删除</tex-button>
  </div>
  <div class="row">
    <tex-button plain type="primary">删除</tex-button>
    <tex-button plain type="success">删除</tex-button>
    <tex-button plain type="info">删除</tex-button>
    <tex-button plain type="waring">删除</tex-button>
    <tex-button plain type="danger">删除</tex-button>
  </div>
  <div class="row">
    <tex-button plain round icon="tex-icon-delete" type="primary"
      >删除</tex-button
    >
    <tex-button plain round type="success">删除</tex-button>
    <tex-button plain round type="info">删除</tex-button>
    <tex-button plain round type="waring">删除</tex-button>
    <tex-button plain round type="danger">删除</tex-button>
  </div>
  <div class="row">
    <tex-button plain circle type="primary">删除</tex-button>
    <tex-button plain circle type="success">删除</tex-button>
    <tex-button plain circle type="info">删除</tex-button>
    <tex-button plain circle type="waring">删除</tex-button>
    <tex-button plain circle type="danger">删除</tex-button>
  </div>
  <div class="row">
    <tex-button plain circle icon="tex-icon-delete" type="primary"></tex-button>
    <tex-button plain circle icon="tex-icon-delete" type="success"></tex-button>
    <tex-button plain circle icon="tex-icon-delete" type="info"></tex-button>
    <tex-button plain circle icon="tex-icon-delete" type="waring"></tex-button>
    <tex-button
      plain
      circle
      icon="tex-icon-delete"
      disabled
      type="danger"
    ></tex-button>
  </div>

  <h2>dialog</h2>
  <!-- sync修饰符是一个语法糖 -->
  <tex-button
    plain
    icon="tex-icon-delete"
    type="primary"
    @click="visible = true"
    >显示</tex-button
  >
  <tex-dialog
    title="温馨提示"
    width="50%"
    top="200px"
    v-model:visible.sync="visible"
  >
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
    <template v-slot:footer>
      <tex-button type="primary" @click="visible = false">取消</tex-button>
      <tex-button @click="visible = false">确认</tex-button>
    </template>
  </tex-dialog>
  <tex-dialog>
    <template v-slot:title>
      <h1>我是标题</h1>
    </template>
  </tex-dialog>
  <h2>input</h2>
  <tex-input v-model="modelValue" placeholder="value" clearable></tex-input>
  <span>{{ modelValue }}</span>
  <tex-input
    placeholder="enterpassword"
    v-model="modelValue"
    showPassword
  ></tex-input>

  <h2>switch</h2>
  <tex-switch v-model:modleActive="modleActive"></tex-switch>
  <tex-switch
    v-model:modleActive="modleActive"
    inactive-color="red"
    active-color="green"
    name="username"
    @change="handleSwitch"
  ></tex-switch>
  <h2>radio</h2>
  <tex-radio label="1" v-model:value="value"></tex-radio>
  <tex-radio label="0" v-model:value="value"></tex-radio>

  <h2>radiogroup</h2>
  <tex-radiogroup v-model:value="value">
    <tex-radio label="1"></tex-radio>
    <tex-radio label="0"></tex-radio>
  </tex-radiogroup>

  <h2>checkbox</h2>
  <tex-checkbox v-model:value="active"> 是否選中 </tex-checkbox>

  <h2>checkbox-group</h2>
  <tex-checkgroup v-model:value="hobby">
    <tex-checkbox label="抽烟"></tex-checkbox>
    <tex-checkbox label="喝酒"></tex-checkbox>
    <tex-checkbox label="烫头"></tex-checkbox>
  </tex-checkgroup>

  <h2>form</h2>
  <tex-form :model="model" label-width="100px">
    <tex-form-item label="用户名">
      <tex-input
        palceholder="请输入用户名"
        v-model="model.username"
      ></tex-input>
    </tex-form-item>
    <tex-form-item label="选择">
      <tex-switch v-model:modleActive="model.active"></tex-switch>
    </tex-form-item>
  </tex-form>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      modelValue: "zhangsan",
      modleActive: false,
      value: "1",
      active: true,
      hobby: ["抽烟", "喝酒", "烫头"],
      model: {
        username: "",
        active: true,
      },
    };
  },
  methods: {
    handleSwitch() {
      console.log("change");
    },
  },
  watch: {
    value() {
      console.log(this.value);
    },
    active() {
      console.log(this.active);
    },
    hobby() {
      console.log("hobby", this.hobby);
    },
  },
};
</script>

 <style lang="less" scoped>
.row {
  margin-bottom: 15px;
  .tex-button {
    margin-right: 20px;
  }
}
</style>>
