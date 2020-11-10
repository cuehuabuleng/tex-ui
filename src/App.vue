<template>
  <div class="row">
    <tex-button type="primary" @click="fn">删除</tex-button>
    <tex-button type="success">删除</tex-button>
    <tex-button type="info">删除</tex-button>
    <tex-button type="waring">删除</tex-button>
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
    <tex-button plain round icon="tex-icon-delete" type="primary">删除</tex-button>
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
    <tex-button @click="fn" plain circle icon="tex-icon-delete" disabled type="danger"></tex-button>
  </div>
</template>

<script>
export default {
  methods: {
    fn(e){
      e.preventDefault();
      
      console.log(1)
    }
  },
};

/*
macrostack


microstack

*/
</script>

 <style lang="less" scoped>
.row {
  margin-bottom: 15px;
  .tex-button {
    margin-right: 20px;
  }
}
</style>>
