<template>
    <Sider
            class="sider"
            collapsible
            :collapsed-width="78"
            v-model="isCollapsed"
    >
        <div class="logo">
            <Icon type="logo-xbox"/>
            <span>LOGO</span>
        </div>
        <Menu theme="dark" width="auto" accordion>
            <Submenu name="1">
                <template slot="title">
                    <Icon type="ios-paper" />
                    内容管理
                </template>
                <MenuItem name="1-1">文章管理</MenuItem>
                <MenuItem name="1-2">评论管理</MenuItem>
                <MenuItem name="1-3">举报管理</MenuItem>
            </Submenu>
            <Submenu name="2">
                <template slot="title">
                    <Icon type="ios-people" />
                    用户管理
                </template>
                <MenuItem name="2-1">新增用户</MenuItem>
                <MenuItem name="2-2">活跃用户</MenuItem>
            </Submenu>
            <Submenu name="3">
                <template slot="title">
                    <Icon type="ios-stats" />
                    统计分析
                </template>
                <MenuGroup title="使用">
                    <MenuItem name="3-1">新增和启动</MenuItem>
                    <MenuItem name="3-2">活跃分析</MenuItem>
                    <MenuItem name="3-3">时段分析</MenuItem>
                </MenuGroup>
                <MenuGroup title="留存">
                    <MenuItem name="3-4">用户留存</MenuItem>
                    <MenuItem name="3-5">流失用户</MenuItem>
                </MenuGroup>
            </Submenu>
        </Menu>
    </Sider>
</template>

<script>
    export default {
        name: "AlmSider",
        data() {
            return {
                isCollapsed: false
            }
        },
    computed: {
        menuitemClasses()
        {
            return [
                this.isCollapsed ? 'collapsed-menu' : ''
            ]
        }
    }
    }
</script>

<style scoped>
    .sider {
        position: fixed;
        left: 0;
        display: flex;
        flex-flow: column nowrap;
        height: 100vh;
        overflow-y: auto;
        z-index: 1;
    }
    .logo {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        height: 63px;
        background: #191a23;
        border-bottom: 1px solid #101117;
    }
    .menu::-webkit-scrollbar {
        width: 0;
    }

    .menu span {
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }

    .menu i {
        transform: translateX(0px);
        transition: all .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }

    .collapsed-menu span {
        width: 0;
        transition: width .2s ease;
    }

    .collapsed-menu i {
        transform: translateX(5px);
        transition: all .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }

</style>