<template>
    <Sider
            class="sider"
            collapsible
            :collapsed-width="78"
            v-model="isCollapsed"
    >
        <!--LOGO-->
        <div class="logo" :style="{fontSize: isCollapsed?'xx-large':'x-large'}">
            <Icon type="logo-xbox"/>
            <span v-show="!isCollapsed">LOGO</span>
        </div>
        <!--侧边导航菜单：展开时候-->
        <Menu theme="dark" width="auto" accordion class="menu" v-if="!isCollapsed">
            <Submenu name="1">
                <template slot="title">
                    <Icon type="ios-paper"/>
                    <span>内容管理</span>
                </template>
                <MenuItem name="1-1">文章管理</MenuItem>
                <MenuItem name="1-2">评论管理</MenuItem>
                <MenuItem name="1-3">举报管理</MenuItem>
            </Submenu>
            <Submenu name="2">
                <template slot="title">
                    <Icon type="ios-people"/>
                    <span>用户管理</span>
                </template>
                <MenuItem name="2-1">新增用户</MenuItem>
                <MenuItem name="2-2">活跃用户</MenuItem>
            </Submenu>
            <Submenu name="3">
                <template slot="title">
                    <Icon type="ios-stats"/>
                    <span>统计分析</span>
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
            <menu-item name="4">
                <Icon type="md-alarm"/>
                <span>待办事项</span>
            </menu-item>
        </Menu>
        <!--侧边导航菜单：折叠时候-->
        <div style="color: white" v-if="isCollapsed">放dropdown和menu图标</div>
    </Sider>
</template>

<script>
    export default {
        name: "AlmSider",
        data() {
            return {
                isCollapsed: false
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
        z-index: 1;
        box-shadow: 2px 0 3px rgba(0,21,41,.35);
    }

    .menu {
        display: flex;
        flex: none;
        flex-flow: column nowrap;
        overflow-y: auto;
        height: calc(100vh - 64px);
    }

    .menu li {
        white-space: nowrap;
        overflow: hidden;
    }

    .menu::-webkit-scrollbar {
        display: none;
    }

    .logo {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        height: 63px;
        border-bottom: 1px solid #101117;
        color: #fff;
        transition: all .5s ease;
    }

    .menu span {
        display: inline-block;
        overflow: hidden;
        width: 70px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
    }
</style>