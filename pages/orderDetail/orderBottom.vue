<script setup>
import { ref, computed, inject, onMounted } from "vue";
import dayjs from "dayjs";
import { getToken } from "@/utils/auth";
import abMiniButton from "../components/abMiniButton.vue";
import abEmpty from "../components/abEmpty.vue";
import addRecords from "./addRecords.vue";
import AbRadio from "../components/abRadio.vue";
import { onLoad, onBackPress } from "@dcloudio/uni-app";
import {
  orderApi,
  orderUpdateApi,
  orderAddApi,
  addFoodsApi,
  addRecordsApi,
  checkOrderStatusApi,
} from "@/utils/api";
const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
  isChange: {
    type: Boolean,
    default: false,
  },
  queryData: {
    type: Object,
    default: () => {},
  },
  allList: {
    type: Array,
    default: () => [],
  },
  backupData: {
    type: Array,
    default: () => [],
  },
});
const userOrderId = uni.getStorageSync("userOrderId");
console.log(userOrderId);
if (userOrderId) {
  checkOrderStatusApi({ id: userOrderId }).then((res) => {
    if (res) {
      uni.reLaunch({ url: "/pages/orderDetail/orderInfo" });
    } else {
      uni.removeStorageSync("userOrderId");
    }
  });
}
const deviceNo = ref("");
const btnStutas = inject("btnStutas");
const socket = inject("socket");
const emits = defineEmits([
  "clear",
  "updateClone",
  "initOrder",
  "setCloneData",
]);
// const isDisabled = com;
const totalMoney = computed(() => {
  let total = props.list.reduce((a, b) => {
    return a + b.price * b.count;
  }, 0);
  return parseFloat(total.toFixed(2));
});
const totalCount = computed(() => {
  let total = props.list.reduce((a, b) => {
    return a + b.count;
  }, 0);
  return total;
});
const submitOne = async () => {
  if (window?.Fingerprint2 && !getToken()) {
    let res = await getDeviceNo();
    deviceNo.value = res;
  }
  if (!props.isChange) {
    uni.showToast({
      title: "没有更改，无需提交",
      icon: "none",
    });
    return;
  }
  if (props.queryData.id) {
    let changeArr = [];
    props.list.forEach((element) => {
      const item = props.backupData.find((i) => i.id == element.id);
      if (element.count != item.count) {
        let changeItem = JSON.parse(JSON.stringify(element));
        changeItem.count = element.count - item.count;
        if (changeItem.count > 0) {
          changeArr.push({
            id: changeItem.id,
            count: changeItem.count,
            price: changeItem.price,
            name: changeItem.name,
          });
        }
      }
    });
    await orderUpdateApi({
      id: props.queryData.id,
      orderDetail: props.list.map((item) => {
        return {
          id: item.id,
          count: item.count,
          price: item.price,
          name: item.name,
        };
      }),
      totalMoney: totalMoney.value,
      totalCount: totalCount.value,
      recordsList: changeArr.length ? changeArr : "",
      isAdmin: true,
    });
    emits("setCloneData");
  } else {
    let time = dayjs().format("HH:mm");
    console.log(deviceNo.value);
    let res2 = await orderAddApi(
      {
        orderName: time + "-" + props.queryData.desk + "号桌",
        isPack: false,
        taste: Number(radioVal2.value),
        isFinish: false,
        totalCount: totalCount.value,
        totalMoney: totalMoney.value,
        orderDetail: props.list.filter((item) => item.count > 0),
        actualMoney: 0,
        desk: Number(props.queryData.desk) || "",
        userOperation: true,
        isRead: false,
        deviceNo: deviceNo.value,
      },
      true
    );
    console.log(res2);
    if (!getToken()) {
      btnStutas.value = true;
      socket.emit("message", {
        desk: props.queryData.desk,
        type: "submitted",
        orderId: res2.data,
      });
    }
    props.queryData.id = res2.data;
    if (res2.orderFlag) {
      uni.setStorageSync("orderId", res2.data);
      uni.setStorageSync("userOrderId", res2.data);
      uni.reLaunch({ url: "/pages/orderDetail/orderInfo" });
    }
    popupTwo.value.close();
  }
  emits("updateClone");
  uni.showToast({
    icon: "success",
    title: "已提交",
  });
};
const popupOne = ref(null);
const addData = ref([]);
const lookDetail = async () => {
  let res = await addRecordsApi({
    orderId: props.queryData.id || "234wert",
  });
  addData.value = res;
  popupOne.value.open();
};
onBackPress(() => {
  if (props.isChange) {
    uni.showModal({
      title: "提示",
      content: "订单未保存，是否保存",
      success: async ({ confirm, cancel }) => {
        if (confirm) {
          await submitOne();
          return true;
        } else {
          return true;
        }
      },
    });
  }
});
//清空
const clear = () => {
  uni.showModal({
    title: "提示",
    content: "确定要清空所有选项吗",
    showCancel: true,
    success: ({ confirm, cancel }) => {
      if (confirm) {
        emits("clear");
        uni.showToast({
          icon: "success",
        });
      }
    },
  });
};
const popupTwo = ref(null);
const radioVal2 = ref("1");
const popupConfirm2 = async () => {
  submitOne();
};
let cloneData = [];
const btnFlag = ref(false);
const addFood = () => {
  uni.showToast({
    title: "已重置菜单，请选择您要添加的菜品",
    icon: "none",
    mask: false,
  });
  cloneData = JSON.parse(JSON.stringify(props.allList));
  btnStutas.value = false;
  btnFlag.value = true;
  emits("clear");
};
const submitAddFood = async () => {
  let items = props.list.filter((item) => item.count > 0);
  await addFoodsApi({
    orderId: props.queryData.id,
    desk: props.queryData.desk,
    items: items,
    totalMoney: totalMoney.value,
    totalCount: totalCount.value,
  });
  let sendMsg = ``;
  items.forEach((item) => {
    sendMsg += ` ${item.name}  x ${item.count} \n`;
  });
  if (!getToken()) {
    socket.emit("message", {
      msg: sendMsg,
      desk: props.queryData.desk,
      type: "addFoods",
      orderId: props.queryData.id,
    });
  }
  uni.showModal({
    title: "提示",
    content: "提交成功，等待上菜吧",
    confirmText: "知道了",
    showCancel: false,
  });
  btnStutas.value = true;
  btnFlag.value = false;
  emits("initOrder");
};
const cancelAdd = () => {
  uni.showModal({
    title: "提示",
    content: "是否放弃本次加菜",
    showCancel: true,
    success: ({ confirm, cancel }) => {
      if (confirm) {
        btnStutas.value = true;
        btnFlag.value = false;
        emits("updateClone", cloneData);
      }
    },
  });
};
const currentDesk = ref(1);
const setDesk = async () => {
  uni.showModal({
    title: "设置桌号",
    content: currentDesk.value,
    editable: true,
    placeholderText: "请输入桌号",
    showCancel: true,
    success: async ({ confirm, cancel, content }) => {
      if (confirm) {
        await orderUpdateApi({
          id: props.queryData.id,
          desk: Number(content),
        });
        uni.showToast({
          title: "成功",
          icon: "success",
          mask: true,
        });
      }
    },
  });
};
socket.on("message", (data) => {
  if (props.queryData.desk && props.queryData.desk == data.desk) {
    if (data.type == "submitted") {
      uni.showModal({
        title: "提示",
        content: "您的同桌已经提交了订单",
        showCancel: false,
        confirmText: "知道了",
        success: () => {
          emits("initOrder");
        },
      });
      return;
    }
    if (!getToken()) {
      uni.showModal({
        title: "来自您同桌的加菜",
        content: data.msg,
        showCancel: false,
        confirmText: "知道了",
        success: () => {
          emits("initOrder");
        },
      });
    }
  }
});
// let dhDom = "";
// onLoad(() => {
//   if (!document.getElementById("dhDom")) {
//     dhDom = document.getElementById("dhDom");
//   }
// });
const onMove = () => {
  console.log(dhDom);
  dhDom.classList.remove("shake-top");
  setTimeout(() => {
    dhDom.classList.add("shake-top");
  }, 0);
};
uni.$on("shake", (data) => {
  onMove();
});
const getDeviceNo = () => {
  return new Promise((resolve, reject) => {
    Fingerprint2.get(function (components) {
      const values = components.map(function (component, index) {
        if (index === 0) {
          return component.value.replace(/\bNetType\/\w+\b/, "");
        }
        return component.value;
      });
      // 生成最终id murmur
      const murmur = Fingerprint2.x64hash128(values.join(""), 31);
      resolve(murmur);
    });
  });
};
</script>

<template>
  <div>
    <div class="h-[40px] flex items-center px-[10px]">
      <span
        class="flex items-center text-text3 text-16 font-bold"
        @click="onMove"
      >
        <div ref="dhDom" id="dhDom">
          <uni-icons type="cart" color="" size="24" class="mr-[2px]" />
        </div>

        {{ totalMoney.toFixed(2) }}</span
      >
      <view class="ml-auto mr-[10px]"
        ><abMiniButton type="warn" @click="clear" icon="close"
          >清空</abMiniButton
        ></view
      >
      <view class="mr-[10px]" v-if="getToken()"
        ><abMiniButton @click="setDesk">设置桌号</abMiniButton></view
      >
      <view class="mr-[10px]"
        ><abMiniButton @click="lookDetail">查看明细</abMiniButton></view
      >
      <view class="mr-[10px]" v-if="queryData.desk && btnStutas"
        ><abMiniButton @click="addFood">我要加菜</abMiniButton></view
      >
      <view class="mr-[10px]" v-if="!btnStutas && btnFlag"
        ><abMiniButton @click="cancelAdd">取消</abMiniButton></view
      >
      <view
        class="mr-[10px]"
        v-if="!btnStutas && btnFlag && !list.every((i) => i.count == 0)"
        ><abMiniButton type="warn" icon="plusempty" @click="submitAddFood"
          >选好了</abMiniButton
        ></view
      >
      <view class="" v-if="queryData.id && !queryData.desk"
        ><abMiniButton type="warn" @click="submitOne">提交</abMiniButton></view
      >

      <view class="" v-if="!queryData.id"
        ><abMiniButton type="warn" @click="popupTwo.open()"
          >提交</abMiniButton
        ></view
      >
    </div>
    <uni-popup ref="popupOne" type="bottom">
      <view class="bg-bg3 p-[12px]">
        <div class="flex justify-center items-center px-[10px]">
          <span class="text-16 font-bold text-text2 ml-auto">订单汇总</span>
          <uni-icons
            class="ml-auto"
            type="closeempty"
            @click="popupOne.close()"
            color="#ccc"
            size="24"
          />
        </div>
        <scroll-view scroll-y="true" style="max-height: 80vh">
          <div v-if="list.length">
            <ul>
              <li class="grid grid-cols-4 text-center py-[4px] font-bold">
                <span>名称</span><span>单价</span><span>数量</span
                ><span>小记</span>
              </li>
              <li
                v-for="item in list"
                :key="item.id"
                class="grid grid-cols-4 text-center py-[4px]"
                style="border-bottom: 1px solid var(--border_c)"
              >
                <span>{{ item.name }}</span>
                <span>{{ item.price.toFixed(2) }}</span>
                <span>{{ item.count }}</span>
                <span class="text-text3">{{
                  (item.price * item.count).toFixed(2)
                }}</span>
              </li>
            </ul>

            <div class="mt-[12px] flex justify-center">
              <span class="text-text3 font-bold mr-[10px]"
                >总数量:{{ totalCount }}</span
              >
              <span class="text-text3 font-bold">总计:{{ totalMoney }}</span>
            </div>
          </div>
          <abEmpty v-else text="暂无数据" />
          <addRecords
            :recordsList="addData"
            v-if="addData.length > 1"
          ></addRecords>
        </scroll-view>
      </view>
    </uni-popup>
    <uni-popup ref="popupTwo" type="dialog">
      <uni-popup-dialog
        title="添加订单"
        :duration="2000"
        :before-close="true"
        @close="popupTwo.close()"
        @confirm="popupConfirm2"
      >
        <div class="w-full">
          <AbRadio
            v-model="radioVal2"
            :list="[
              { label: '正常辣', value: '1' },
              { label: '微辣', value: '2' },
              { label: '特辣', value: '3' },
            ]"
          ></AbRadio>
        </div>
      </uni-popup-dialog>
    </uni-popup>
  </div>
</template>

<style lang="scss" scoped>
.shake-top {
  -webkit-animation: shake-top 0.8s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
  animation: shake-top 0.8s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
}
/* ----------------------------------------------
 * Generated by Animista on 2024-1-5 12:38:59
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation shake-top
 * ----------------------------------------
 */
@-webkit-keyframes shake-top {
  0%,
  100% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transform-origin: 50% 0;
    transform-origin: 50% 0;
  }
  10% {
    -webkit-transform: rotate(2deg) scale(0.8);
    transform: rotate(2deg) scale(0.8);
  }
  20%,
  40%,
  60% {
    -webkit-transform: rotate(-4deg);
    transform: rotate(-4deg);
  }
  30%,
  50%,
  70% {
    -webkit-transform: rotate(4deg);
    transform: rotate(4deg);
  }
  80% {
    -webkit-transform: rotate(-2deg);
    transform: rotate(-2deg);
  }
  90% {
    -webkit-transform: rotate(2deg) scale(1.2);
    transform: rotate(2deg) scale(1.2);
  }
}
@keyframes shake-top {
  0%,
  100% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transform-origin: 50% 0;
    transform-origin: 50% 0;
  }
  10% {
    -webkit-transform: rotate(2deg) scale(1.3);
    transform: rotate(2deg) scale(1.3);
  }
  20%,
  40% {
    -webkit-transform: rotate(-4deg);
    transform: rotate(-4deg);
  }
  30%,
  50% {
    -webkit-transform: rotate(4deg);
    transform: rotate(4deg);
  }
  80% {
    -webkit-transform: rotate(-2deg);
    transform: rotate(-2deg);
  }
  90% {
    -webkit-transform: rotate(2deg);
    transform: rotate(2deg);
  }
}
</style>
