<template>
  <div class="user-container">
    <div class="user-info">
      <div class="user-avatar">
        <Avatar
          :src="
            store.state.user
              ? store.state.user.avatar
                ? store.state.user.avatar
                : '/src/assets/userDefaultAvatar.jpeg'
              : '/src/assets/userAvatar.png'
          "
        />
      </div>
      <div class="user-login-and-register">
        <div class="title">
          Hi~
          <span v-if="!store.state.user">欢迎逛京东!</span>
          <span v-else>{{ store.state.user.username }}</span>
        </div>
        <div class="login-box" v-if="!store.state.user">
          <a href="">登录</a>
          <span>|</span>
          <a href="">注册</a>
        </div>
        <div class="loginout" v-else>退出</div>
      </div>
    </div>
    <div v-if="!store.state.user" class="user-attach">
      <div class="button newer">新人福利</div>
      <div class="button plus">PLUS会员</div>
    </div>
    <div class="vipIndicator" v-if="store.state.user && !store.state.user.vip">
      开通PLUS, 平均省1210元/年
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from "vuex";
import Avatar from "../../../../components/Avatar.vue";
const store = useStore();
</script>

<style scoped lang="less">
.user-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .user-info {
    width: 100%;
    height: 50px;
    // background-color: tomato;
    display: flex;
    align-items: center;
    .user-avatar {
      width: 40px;
      height: 40px;
      box-sizing: border-box;
      padding: 5px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 10px;
      img {
        width: 100%;
        height: 100%;
        border-radius: inherit;
      }
    }
  }
  .user-attach {
    display: flex;
    height: 100%;
    flex: 1;
    justify-content: center;
    align-items: center;
    .button {
      padding: 5px 8px;
      background: yellow;
      margin: 0 5px;
      outline: none;
      color: #fff;
      cursor: pointer;
      border-radius: 10px;
      transition: 0.3s;
      &.newer {
        background-color: @baseColor;
      }
      &.plus {
        background-color: #7c6262;
        color: rgb(231, 200, 162);

        &:hover {
          background-color: @baseColor;
          color: #fff;
        }
      }
    }
  }
  .vipIndicator {
    padding: 5px;
    box-sizing: border-box;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 10px;
    margin-top: 10px;
    color: @baseColor;
    &:hover {
      background-color: @baseColor;
      color: #fff;
      cursor: pointer;
    }
  }
}
</style>
