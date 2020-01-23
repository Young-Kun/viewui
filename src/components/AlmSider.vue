<template>
    <Sider class="sider" collapsible :collapsed-width="78" v-model="isCollapsed">
        <Menu theme="dark" width="auto" class="menu" :class="menuitemClasses">
            <MenuItem name="1">
                <Icon type="ios-navigate"/>
                <span>Home</span>
            </MenuItem>
            <MenuItem name="2">
                <Icon type="ios-at"/>
                <span>Item 1</span>
            </MenuItem>
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
            menuitemClasses() {
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
    }
    .menu {
        height: calc(100vh - 64px);
        overflow-y: auto;
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