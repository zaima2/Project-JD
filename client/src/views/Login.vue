<template>
  <div class="login-container">
    <div class="header">
      <div class="header-inner">
        <div class="title-box">
          <div class="logo-container">
            <img src="../assets/logo.png" alt="" />
          </div>
          <div class="login-text">欢迎登录</div>
        </div>
        <div class="tip">
          <Icon :type="StyleType.chat" />
          <span class="surver">登录页面，调查问卷 </span>
        </div>
      </div>
    </div>
    <div class="body">
      <div class="info">
        <Icon :type="StyleType.edit" />
        <span class="info-text">
          依据《网络安全法》，为保障您的账户安全和正常使用，请尽快完成手机号验证！
          新版《京东隐私政策》已上线，将更有利于保护您的个人隐私。
        </span>
      </div>
      <div class="login-container">
        <div class="login-box">
          <div class="tip">
            <Icon :type="StyleType.edit" />
            <span class="tip-text">京东不会以任何理由要求您转账汇款，谨防诈骗。</span>
          </div>
          <div class="title">用户登录</div>
          <div class="input-box">
            <div class="input username">
              <div class="icon">
                <Icon :size="30" :type="StyleType.chat" />
              </div>
              <input type="text" v-model="state.form.username" placeholder="用户名/手机号" />
            </div>
            <div class="input password">
              <div class="icon">
                <Icon :size="30" :type="StyleType.chat" />
              </div>
              <input v-model="state.form.password" type="password" placeholder="请输入密码" />
            </div>
            <div class="forgetPass">忘记密码</div>
          </div>
          <div class="login-button" @click="goLogin">
            <div class="button">登&nbsp;&nbsp;录</div>
          </div>
          <div class="footer">
            <div class="footer-inner">
              <div class="login-method">
                <Icon :type="StyleType.chat" />
                <span class="login-method-text">github</span>
              </div>
              <div class="register-indicator" @click="goRegister">
                <div class="icon">
                  <Icon :type="StyleType.arrowRightSmall" />
                </div>
                <span class="register-text">立即注册</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <Reference />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Icon from "../components/Icon.vue";
import { useRouter } from "vue-router";
import { StyleType } from "../types/enum";
import Reference from "../components/Reference/index.vue";
import { reactive, watchEffect } from "vue";
import { useStore } from "vuex";
const store = useStore();
const router = useRouter();

const state = reactive({
  form: {
    username: "",
    password: ""
  }
})

watchEffect(() => {
  if (store.state.user) {
    router.push("/")
  }
})


function goLogin() {
  store.dispatch("Login", state.form);
}



function goRegister() {
  router.push({
    name: "Register",
    query: {
      step: 1,
      type: "personal",
    },
  });
}
</script>

<style scoped lang="less">
.login-container {
  width: 100%;
  height: 100%;
  background-color: #fff;

  .header {
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    padding: 10px;
    display: flex;
    justify-content: center;

    .header-inner {
      width: 900px;
      height: 100%;
      display: flex;
      justify-content: space-between;

      .title-box {
        width: 400px;
        height: 100%;
        display: flex;
        align-items: center;

        .logo-container {
          width: 200px;
          height: 100%;

          img {
            width: 100%;
            height: 100%;
          }
        }

        .login-text {
          font-size: 30px;
        }
      }

      .tip {
        align-self: flex-end;
        display: flex;
        align-items: center;
        cursor: pointer;

        &:hover {
          color: @baseColor;
        }

        .surver {
          margin-left: 5px;
          color: inherit;
        }
      }
    }
  }

  .body {
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;

    .info {
      width: 100%;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #f8e4e4;

      .info-text {
        margin-left: 5px;
      }
    }

    .login-container {
      width: 100%;
      flex: 1 1 auto;
      background-image: url("../assets/loginBackground.png");
      background-repeat: no-repeat;
      background-size: cover;

      .login-box {
        width: 350px;
        height: 400px;
        background-color: #fff;
        margin-left: 60%;
        margin-top: 10px;
        display: flex;
        flex-direction: column;

        .tip {
          width: 100%;
          height: 30px;
          line-height: 30px;
          text-align: center;
          background-color: #f8e4e4;

          .tip-text {
            margin-left: 5px;
          }
        }

        .title {
          width: 100%;
          height: 80px;
          text-align: center;
          line-height: 80px;
          font-size: 20px;
          box-sizing: border-box;
          border-bottom: 1px solid #f0ebeb;
        }

        .input-box {
          width: 100%;
          height: 160px;
          box-sizing: border-box;
          padding: 10px;
          display: flex;
          flex-direction: column;

          .input {
            width: 100%;
            height: 50px;
            display: flex;
            align-items: center;
            box-sizing: border-box;
            border: 1px solid #f0ebeb;

            &.username {
              margin-bottom: 15px;
            }

            .icon {
              width: 50px;
              height: 100%;
              background-color: #ccc;
              display: flex;
              align-items: center;
              justify-content: center;
            }

            input {
              flex: 1;
              height: 100%;
              box-sizing: border-box;
              padding: 3px;
              border: none;
              outline: none;
              margin-left: 3px;
              font-size: 14px;
            }
          }

          .forgetPass {
            margin-bottom: 0;
            align-self: flex-end;
            flex: 1;
            display: flex;
            align-items: flex-end;

            &:hover {
              color: @baseColor;
              cursor: pointer;
            }
          }
        }

        .login-button {
          width: 100%;
          height: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
          padding: 10px;
          cursor: pointer;

          .button {
            width: 100%;
            height: 100%;
            background-color: @baseColor;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;
          }
        }

        .footer {
          margin-bottom: 0;
          display: flex;
          flex: 1;
          justify-self: flex-end;

          .footer-inner {
            width: 100%;
            height: 40px;
            align-self: flex-end;
            box-sizing: border-box;
            padding: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .login-method {
              font-size: 14px;
              cursor: pointer;

              &:hover {
                .login-method-text {
                  color: @baseColor;
                  text-decoration: underline;
                }
              }

              span {
                margin: 0px 2px;
                font-size: inherit;
              }
            }

            .register-indicator {
              display: flex;
              color: @baseColor;
              cursor: pointer;

              &:hover {
                .register-text {
                  text-decoration: underline;
                }
              }

              span {
                color: inherit;
              }

              .icon {
                width: 18px;
                height: 18px;
                background-color: @baseColor;
                color: #fff;
                border-radius: 50%;
                line-height: 18px;
                text-align: center;
                margin-right: 5px;
              }
            }
          }
        }
      }
    }
  }

  .footer {
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
