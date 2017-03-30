<template>
    <div class="account">
        <div class="header-wrapper">
            <div class="DFicon- icon-logo "></div>
        </div>
        <div class="accountTab">
            <div class="tabItem"><router-link to="/user/baseIndo">基本信息</router-link></div>
            <div class="tabItem"><router-link to="/user/watchHistory">观看记录</router-link></div>
            <div class="tabItem"><router-link to="/user/servicePlan">服务套餐</router-link></div>
        </div>

    </div>
</template>
<script type="text/ecmascript-6">
    import baseInfo from 'components/user/baseInfo/baseInfo';

    export default {
        components: {
            'v-baseInfo': baseInfo
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../../common/stylus/mixins.styl"
    .account
        position: fixed
        top: 0
        left: 0
        width: 100%
        height:100%
        background: url(../../../img/epgBg.png)no-repeat
        background-size:cover
        overflow: hidden
    .header-wrapper
        height: 4.7rem;
        width: 100%;
        border-bottom: 0.0625rem solid #33C9FB;
        box-shadow: 1px 6px 11px rgba(0, 0, 0, 0.54);
        .icon-logo
            position: fixed
            display: inline-block
            font-size: 8rem
            left: 2.1rem
            top: -1rem
            font-size 8rem
    .accountTab
        width: 12.25rem
        height: 28.98rem
        border-right: 0.0625rem solid #33C9FB;
        float: left
        box-shadow: 7px 6px 17px rgba(0, 0, 0, 0.54)
        z-index: 2
        .tabItem
            float: left
            width: 96%
            height: 3.78125rem
            line-height: 3.78125rem
            text-align: center
            /*margin-left: 2%;*/
            border-radius: 0.7rem
            text-shadow: 1px 6px 11px rgba(0, 0, 0, 1)
            splitLine()


</style>
