<template>
  <div class="person-pannel-container">
    <div class="user-brand">
      <div class="user-info">
        <div class="avatar">
          <div class="img">
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
          <div class="level">铜牌</div>
        </div>
        <div class="username">
          {{ store.state.user && store.state.user.username }}
        </div>
        <div class="asset">
          <span>京享值 {{ 1000 }}</span>
          <span>小白守约 {{ 755 }} 分</span>
        </div>
      </div>
      <div class="vip-ad">
        <div class="tip">
          <div class="title">开通PLUS会员尊享</div>
          <div class="title-attach">全年360元运费券礼包</div>
        </div>
        <div class="btn">立即开通</div>
      </div>
    </div>
    <div class="user-asset"></div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import Avatar from "../../../../../components/Avatar.vue";
const store = useStore();
</script>

<style scoped lang="less">
.person-pannel-container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  position: relative;
  align-items: center;

  .user-brand {
    width: 260px;
    height: 100%;
    background-color: @baseColor;
    position: absolute;
    transform: scale(1.1);
    background-image: url("/src/assets/userPannelBg.png");
    background-repeat: no-repeat;
    background-size: 100% 50px;
    display: flex;
    flex-direction: column;

    .user-info {
      flex: 1 1 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      .avatar {
        width: 100px;
        margin-top: 20px;
        flex: 1 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        .img {
          width: 75px;
          height: 75px;
          cursor: pointer;
        }
        .level {
          padding: 1px 5px;
          background-color: #ccc;
          border-radius: 10px;
          margin-top: -10px;
        }
      }

      .username {
        color: #fff;
        font-weight: bolder;
        font-size: 16px;
        flex: 1 0 auto;
        width: 100%;
        text-align: center;
      }

      .asset {
        width: 100%;
        display: flex;
        justify-content: space-around;
        margin-top: -10px;
        flex: 1 0 auto;
        box-sizing: border-box;
        padding: 0px 36px;
        align-items: center;
        span {
          padding: 3px;
          color: #fff;
          height: fit-content;
          border: 1px solid #fff;
          border-radius: 10px;
          cursor: pointer;
          &:hover {
            background-color: #fff;
            color: @baseColor;
          }
        }
      }
    }
    .vip-ad {
      width: 100%;
      height: 50px;
      background-color: rgb(20, 18, 54);
      display: flex;
      justify-content: center;
      align-items: center;
      .tip {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-right: 40px;
        color: @dgold;
        .title {
          font-weight: bold;
          font-size: 14px;
        }
        .title,
        .title-attach {
          color: inherit;
        }
      }
      .btn {
        width: 70px;
        height: 25px;
        text-align: center;
        line-height: 25px;
        background-color: @dgold;
        color: rgb(69, 63, 63);
        border-radius: 12px;
        cursor: pointer;
        &:hover {
          background-color: #fff;
        }
      }
    }
  }
  .user-asset {
    flex: 1 1 auto;
    box-sizing: border-box;
    padding-left: 320px;
    height: 100%;
  }
}
</style>
