<template>
    <div class="personal-page-container">
        <div class="user">
            <User />
        </div>
        <div class="news">
            <News />
        </div>
        <div class="funcMenu"></div>
    </div>
</template>


<script lang="ts" setup>
import User from './User.vue';
import News from './News.vue';
</script>


<style scope lang="less">
.personal-page-container {
    width:100%;
    height:100%;
    background-color: #fff;
    padding:10px 5px;
    .user {
        width:100%;
        height:80px;
        // background-color: #f70202;
        display:flex;
        align-items: center;
        justify-content: center;
    }
}

</style>