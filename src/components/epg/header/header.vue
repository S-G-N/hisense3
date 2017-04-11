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
                <router-link to="/user/account/servicePlan">续订服务</router-link>
            </div>
            <div class="tab-item DFicon- icon-updateCard" tabindex="-1" id="updateCreditCardBtn">
                <router-link to="/user/account/baseInfo">更新信用卡</router-link>
            </div>
            <div class="tab-item DFicon- icon-record" tabindex="-1" id="historyBtn">
                <router-link to="/user/account/watchHistory">观看记录</router-link>
            </div>
            <div class="tab-item DFicon- icon-account" tabindex="-1" id="accountBtn">
                <router-link to="/user/account/baseInfo">我的账户</router-link>
            </div>
            <div class="tab-item DFicon- icon-logout" tabindex="-1" id="logoutBtn">
                <router-link to="/user/login">注销</router-link>
            </div>
            <!--<router-view></router-view>-->
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    const Foo = {
        beforeRouteEnter (to, from, next) {
            console.log('beforeRouteEnter')
            // 在渲染该组件的对应路由被 confirm 前调用
            // 不！能！获取组件实例 `this`
            // 因为当钩子执行前，组件实例还没被创建
        },
        beforeRouteUpdate (to, from, next) {
            console.log('beforeRouteUpdate');
            // 在当前路由改变，但是该组件被复用时调用
            // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
            // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
            // 可以访问组件实例 `this`
        },
        beforeRouteLeave (to, from, next) {
            console.log('beforeRouteLeave');
            // 导航离开该组件的对应路由时调用
            // 可以访问组件实例 `this`
        }
    }
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
        margin-top: 1.31rem
        .tab-item
            display: inline-block
            padding: 0 0.43rem
            /*height: 1.87rem*/
            line-height: 1.87rem
            border-radius: 0.3rem
        
</style>
