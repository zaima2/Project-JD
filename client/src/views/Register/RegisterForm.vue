<template>
    <div class="registerForm-container">
        <div class="prograss">
            <Prograss />
        </div>
        <div class="phoneNumber">
            <div class="country">中国(+86)</div>
            <input type="text" v-model="state.form.phone" placeholder="请输入手机号" @focus="phoneFocus" @blur="phoneBlur">
            <div class="icon center">
                <span v-if="state.tip">X</span>
                <span v-if="state.verify === 'true' && !state.tip">√</span>
            </div>
        </div>
        <p v-if="state.tip && !state.form.phone">
            <Icon :type="StyleType.edit" /><span>验证完成后，你可以使用该手机登录或找回密码</span>
        </p>
        <p v-if="state.verify === 'false' && state.form.phone">
            <Icon :type="StyleType.local" /><span>手机号格式有误，请检查后重试</span>
        </p>
        <div class="verify center">发送验证码</div>
        <div class="nextStep center" @click="nextStep">下一步</div>
        <div class="register-enterprise-indicator">
            <Icon :type="StyleType.chat" />
            <span>企业用户注册</span>
        </div>
    </div>
</template>


<script lang="ts" setup>
import Prograss from "../../components/Prograss/index.vue";
import Icon from "../../components/Icon.vue";
import { StyleType } from "../../types/enum";
import { reactive } from "vue";
import { useRouter, useRoute } from "vue-router";


const reg = /^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/;

const router = useRouter();
const route = useRoute();
const state = reactive({
    tip: false,
    verify: "",
    form: {
        phone: ""
    }
})

function phoneFocus() {
    state.tip = true;
}

function phoneBlur() {
    state.tip = false;
    if (reg.test(state.form.phone)) {
        state.verify = "true";
    } else {
        state.verify = "false";
    }

    console.log(state.verify);


}

function nextStep() {
    router.push({
        query: {
            ...route.query,
            step: 2
        }
    })
}

</script>


<style scoped lang="less">
.registerForm-container {
    width: 500px;
    height: 300px;
    // background-color: #fa0e0e;


    p {
        margin-top: 10px;

        span {
            margin-left: 10px;
        }
    }

    .prograss {
        width: 100%;
        height: 50px;
        background-color: #36fd04;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .phoneNumber {
        width: 100%;
        height: 50px;
        // background-color: aqua;
        margin-top: 20px;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        border: 1px solid #eeecec;

        .country {
            width: 100px;
            height: 100%;
            box-sizing: border-box;
            border-right: 1px solid #eeecec;
            display: flex;
            justify-content: center;
            align-items: center;
        }


        input {
            flex: 1 1 auto;
            border: none;
            outline: none;
            height: 100%;
            box-sizing: border-box;
            padding: 10px;
        }

        .icon {
            width: 50px;
            height: 100%;
        }
    }

    .verify {
        width: 100%;
        height: 60px;
        border: 1px solid #eeecec;
        box-sizing: border-box;
        cursor: pointer;
        margin-top: 20px;

        &:hover {
            border: 1px solid #999;
        }
    }

    .nextStep {
        width: 100%;
        height: 50px;
        background: @baseColor;
        color: #fff;
        font-size: 20px;
        margin-top: 25px;
        cursor: pointer;
    }

    .register-enterprise-indicator {
        margin-top: 20px;
        cursor: pointer;

        &:hover {
            span {
                color: @baseColor;
            }
        }

        span {
            margin-left: 10px;

        }
    }
}
</style>