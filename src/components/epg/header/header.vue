<template>
    <div id="header">
        <div class="header DFicon- icon-logo "></div>
        <div class="menu-wrapper">
            <div class="tab-item DFicon- icon-login" tabindex="-1" id="loginBtn">
                <router-link to="/user/login">登录</router-link>
            </div>
            <div class="tab-item DFicon- icon-promotion" tabindex="-1" id="promotionBtn">
                <router-link to="/user/account">我有优惠码</router-link>
            </div>
            <div class="tab-item DFicon- icon-continue" tabindex="-1" id="resumeBtn">
                <router-link to="/user/account">续订服务</router-link>
            </div>
            <div class="tab-item DFicon- icon-updateCard" tabindex="-1" id="updateCreditCardBtn">
                <router-link to="/user/account/update">更新信用卡</router-link>
            </div>
            <div class="tab-item DFicon- icon-record" tabindex="-1" id="historyBtn">
                <router-link to="/user/account/history">观看记录</router-link>
            </div>
            <div class="tab-item DFicon- icon-account" tabindex="-1" id="accountBtn">
                <router-link to="/user/account">我的账户</router-link>
            </div>
            <div class="tab-item DFicon- icon-logout" tabindex="-1" id="logoutBtn">
                <router-link to="/user/login">注销</router-link>
            </div>
            <!--<router-view></router-view>-->
        </div>
    </div>
</template>

<script type="text/ecmascript-6">

    export default {

    };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .icon-logo
        position: fixed
        display: inline-block
        font-size: 8rem
        left: 2.1rem
        top: -1rem
        font-size 8rem
    .menu-wrapper
        float: right
        .tab-item
            display: inline-block
        
</style>
