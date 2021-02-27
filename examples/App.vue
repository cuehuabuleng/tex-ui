<template>
  <h2>button</h2>
  <div class="row">
    <tex-button @click="handleClik">删除</tex-button>
    <tex-button type="primary" @click="handleClik">删除</tex-button>
    <tex-button type="success">删除</tex-button>
    <tex-button type="info">删除</tex-button>
    <tex-button type="warning">删除</tex-button>
    <tex-button type="danger">删除</tex-button>
  </div>
  <div class="row">
    <tex-button plain type="primary">删除</tex-button>
    <tex-button plain type="success">删除</tex-button>
    <tex-button plain type="info">删除</tex-button>
    <tex-button plain type="warning">删除</tex-button>
    <tex-button plain type="danger">删除</tex-button>
  </div>
  <div class="row">
    <tex-button plain round icon="tex-icon-delete" type="primary"
      >删除</tex-button
    >
    <tex-button plain round type="success">删除</tex-button>
    <tex-button plain round type="info">删除</tex-button>
    <tex-button plain round type="warning">删除</tex-button>
    <tex-button plain round type="danger">删除</tex-button>
  </div>
  <div class="row">
    <tex-button plain circle type="primary">删除</tex-button>
    <tex-button plain circle type="success">删除</tex-button>
    <tex-button plain circle type="info">删除</tex-button>
    <tex-button plain circle type="warning">删除</tex-button>
    <tex-button plain circle type="danger">删除</tex-button>
  </div>
  <div class="row">
    <tex-button plain circle icon="tex-icon-delete" type="primary"></tex-button>
    <tex-button plain circle icon="tex-icon-delete" type="success"></tex-button>
    <tex-button plain circle icon="tex-icon-delete" type="info"></tex-button>
    <tex-button plain circle icon="tex-icon-delete" type="warning"></tex-button>
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
  <tex-button plain type="primary" @click="visible = true"
    >点击打开dialog</tex-button
  >
  <tex-dialog
    title="输入账号"
    width="30%"
    top="200px"
    v-model:visible="visible"
  >
    <tex-form :model="form" label-width="100px">
      <tex-form-item label="用户名">
        <tex-input
          palceholder="请输入用户名"
          v-model="form.username"
          clearable
        ></tex-input>
      </tex-form-item>
      <tex-form-item label="密码">
        <tex-input
          palceholder="请输入密码"
          v-model="form.password"
          showPassword
        ></tex-input>
      </tex-form-item>
    </tex-form>
    <template v-slot:footer>
      <tex-button type="primary" @click="visible = false">取消</tex-button>
      <tex-button @click="visible = false">确认</tex-button>
    </template>
  </tex-dialog>
  <h2>input</h2>
  <tex-input v-model="inputValue" placeholder="value" clearable></tex-input>
  <span>{{ inputValue }}</span>
  <tex-input
    placeholder="enterpassword"
    v-model="inputValue"
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
  <tex-radio label="1" v-model:value="value" @change="handleChange"></tex-radio>
  <tex-radio label="0" v-model:value="value"></tex-radio>

  <h2>radiogroup</h2>
  <tex-radiogroup v-model:value="value" @change="handleChange">
    <tex-radio label="1"></tex-radio>
    <tex-radio label="0"></tex-radio>
  </tex-radiogroup>

  <h2>checkbox</h2>
  <tex-checkbox v-model:value="active" @change="handelCheck"> 是否選中 </tex-checkbox>

  <h2>checkbox-group</h2>
  <tex-checkgroup v-model:value="hobby">
    <tex-checkbox label="抽烟"></tex-checkbox>
    <tex-checkbox label="喝酒"></tex-checkbox>
    <tex-checkbox label="烫头"></tex-checkbox>
  </tex-checkgroup>
  <h2>form</h2>
  <tex-form :model="form" label-width="100px">
    <tex-form-item label="用户名">
      <tex-input
        palceholder="请输入用户名"
        v-model="form.username"
        clearable
      ></tex-input>
    </tex-form-item>
    <tex-form-item label="密码">
      <tex-input
        palceholder="请输入密码"
        v-model="form.password"
        showPassword
      ></tex-input>
    </tex-form-item>
    <tex-form-item label="记住密码">
      <tex-switch v-model:modleActive="form.remenber"></tex-switch>
    </tex-form-item>
    <tex-form-item label="性别">
      <tex-radiogroup v-model:value="form.sex">
        <tex-radio label="1">男</tex-radio>
        <tex-radio label="2">女</tex-radio>
      </tex-radiogroup>
    </tex-form-item>
    <tex-form-item label="兴趣">
      <tex-checkgroup v-model:value="form.hobby">
        <tex-checkbox label="篮球"></tex-checkbox>
        <tex-checkbox label="足球"></tex-checkbox>
        <tex-checkbox label="乒乓球"></tex-checkbox>
      </tex-checkgroup>
    </tex-form-item>
    <tex-form-item>
      <tex-button @click="handleSubmit">提交</tex-button>
    </tex-form-item>
  </tex-form>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      inputValue: "zhangsan",
      modleActive: false,
      value: "1",
      active: true,
      hobby: ["抽烟", "喝酒", "烫头"],
      form: {
        username: "132",
        password: "",
        remenber: false,
        hobby: ["篮球", "足球", "乒乓球"],
        sex: "1",
      },
    };
  },
  methods: {
    handleSwitch() {
      console.log("change");
    },
    handleClik(e) {
      console.log("1", e);
    },
    handleSubmit() {
      console.log("submit", this.form);
    },
    handleChange(val){
      console.log('radiochange', val)
    },
    handelCheck(val){
      console.log('handelcheck', val)
    }
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
