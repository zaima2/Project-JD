<template>
    <div class="user-container">
        <div class="user-info">
            <div class="user-avatar">
                <img src="../../../../assets/userAvatar.png" alt="">
            </div>
            <div class="user-login-and-register">
                <div class="title">
                    Hi~欢迎逛京东!
                </div>
                <div class="login-box">
                    <a href="">登录</a>
                    <span>|</span>
                    <a href="">注册</a>
                </div>
            </div>
        </div>
        <div class="user-attach">
            <div class="button newer">新人福利</div>
            <div class="button plus">PLUS会员</div>
        </div>
    </div>
</template>


<script lang="ts" setup>


</script>


<style scope lang="less">
    .user-container {
        width:100%;
        height:100%;
        display:flex;
        flex-direction: column;
        .user-info {
            width:100%;
            height:50px;
            // background-color: tomato;
            display:flex;
            align-items: center;
            .user-avatar {
                width:40px;
                height:40px;
                box-sizing: border-box;
                padding:5px;
                border-radius: 50%;
                overflow: hidden;
                margin-right:10px;
                img {
                    width:100%;
                    height:100%;
                    border-radius:inherit
                }
            }
        }
        .user-attach {
            display: flex;
            height:100%;
            flex:1;
            justify-content: center;
            align-items:center;
            .button {
                padding:5px 8px;
                background:yellow;
                margin:0 5px;
                outline:none;
                color:#fff;
                cursor: pointer;
                border-radius:10px;
                transition:.3s;
                &.newer {
                    background-color: @baseColor;
                }
                &.plus {
                    background-color: #7c6262;
                    color:rgb(231, 200, 162);
                    
                    &:hover {
                        background-color:@baseColor;
                        color:#fff;
                    }
                }
            }
        }
    }
</style>