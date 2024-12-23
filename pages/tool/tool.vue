<script setup>
import { ref, reactive } from "vue";
import AbButton from "../components/abButton.vue";
const playerList = reactive([
  // {name: "张三",result:0,onLine: true,id:1},
]);
const inputDialog = ref(null);
const addPlayer = () => {
  uni.showToast({
    title: "请输入玩家名字",
    icon: "none",
    mask: true,
  });
  //   inputDialog.value.open();
};
const dialogInputConfirm = (e) => {
  if (!e) {
    console.log(e);

    uni.showToast({
      title: "请输入玩家名字",
      icon: "none",
      mask: true,
    });
    return;
  }
};
</script>

<template>
  <div>
    <div class="flex">
      <div class="n-left">
        <ul>
          <li>张三</li>
          <li class="active">李四</li>
          <li>王麻子</li>
          <li>二哥</li>
          <li>大哥</li>
        </ul>
      </div>
      <div></div>
    </div>
    <div class="flex">
      <AbButton type="primary" @click="addPlayer">添加玩家</AbButton>
      <AbButton type="warn">删除玩家</AbButton>
      <AbButton type="default">重置游戏</AbButton>
    </div>
    <uni-popup ref="inputDialog" type="dialog">
      <uni-popup-dialog
        :before-close="true"
        ref="inputClose"
        mode="input"
        title="添加玩家"
        placeholder="请输入玩家名字"
        @close="inputDialog.close()"
        @confirm="dialogInputConfirm"
      ></uni-popup-dialog>
    </uni-popup>
  </div>
</template>

<style lang="scss" scoped>
.n-left {
  width: 20%;
  background: #ccc;
  font-size: 16px;
  li {
    height: 36px;
    line-height: 36px;
    cursor: pointer;
    &.active {
      background: #007aff;
    }
  }
}
</style>
