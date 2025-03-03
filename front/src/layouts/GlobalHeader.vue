<template>
  <a-row :wrap="false">
    <a-col flex="200px">
      <RouterLink to="/">
        <div class="title-bar">
          <img alt="logo" class="logo" src="../assets/logo.png" />
          <div class="title">智能云图库</div>
        </div>
      </RouterLink>
    </a-col>
    <a-col flex="auto">
      <a-menu
        v-model:selectedKeys="current"
        :items="items"
        mode="horizontal"
        @click="doMenuClick"
      />
    </a-col>
    <a-col flex="120px">
      <!--      <div class="user-login-status">-->
      <!--        <a-button type="primary" href="/user/login">登录</a-button>-->
      <!--      </div>-->

      <div class="user-login-status">
        <div v-if="loginUserStore.loginUser.id">
          {{ loginUserStore.loginUser.userName?? "无名" }}
        </div>
        <div v-else>
          <a-button href="/user/login" type="primary">登录</a-button>
        </div>
      </div>
    </a-col>
  </a-row>
</template>
<script lang="ts" setup>
import { h, ref } from "vue";
import { HomeOutlined } from "@ant-design/icons-vue";
import { MenuProps } from "ant-design-vue";
import { useRouter } from "vue-router";
import { useLoginUserStore } from "@/stores/useLoginUserStore";

const loginUserStore = useLoginUserStore();
loginUserStore.fetchLoginUser();

// 当前选中菜单
const current = ref<string[]>(["home"]);
const items = ref<MenuProps["items"]>([
  {
    key: "/",
    icon: () => h(HomeOutlined),
    label: "主页",
    title: "主页",
  },
  {
    key: "/about",
    label: "关于",
    title: "关于",
  },
  {
    key: "others",
    label: h(
        "a",
        { href: "https://www.baidu.com", target: "_blank" },
        "百度一下"
    ),
    title: "百度一下",
  },
]);

const router = useRouter();

// 路由跳转事件
const doMenuClick = ({ key }: { key: string }) => {
  router.push({
    path: key,
  });
};

// 监听路由变化，更新当前选中菜单
router.afterEach((to, from, next) => {
  current.value = [to.path];
});
</script>


<style scoped>
.title-bar {
  display: flex;
  align-items: center;
}

.title {
  color: black;
  font-size: 18px;
  margin-left: 16px;
}

/*.logo {*/
/*  transform: scale(0.2); !* 调整为你需要的缩放比例 *!*/
/*  transform-origin: top left; !* 设置缩放的基准点 *!*/
/*}*/

.logo {
  max-width: 30px; /* 调整为你需要的最大宽度 */
  max-height: 30px; /* 调整为你需要的最大高度 */
}
</style>