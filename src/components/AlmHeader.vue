<template>
    <Header class="header" :style="{height: headerHeight, width: 'calc(100% - ' + leftPadding + ')'}">
        <div class="header-trigger" @click="siderCollapseToggle" v-show="isCollapsed">
            <Icon type="ios-menu-outline"></icon>
        </div>
        <div class="header-trigger" @click="siderCollapseToggle" v-show="!isCollapsed">
            <Icon type="ios-menu"></icon>
        </div>
        <Menu mode="horizontal" theme="light">
            <MenuItem name="1">
                <Icon type="ios-navigate"></Icon>
                Item 1
            </MenuItem>
            <MenuItem name="2">
                <Icon type="ios-keypad"></Icon>
                Item 2
            </MenuItem>
            <MenuItem name="3">
                <Icon type="ios-analytics"></Icon>
                Item 3
            </MenuItem>
        </Menu>
        <div class="search-input">
            <Input search placeholder="Search..."/>
        </div>
        <div class="header-user">
            <Dropdown>
                <div class="user-dropdown">
                    <Icon type="md-person"/>
                    <span>ZhuYangkun</span>
                </div>
                <DropdownMenu slot="list">
                    <DropdownItem>修改资料</DropdownItem>
                    <DropdownItem>我的收藏</DropdownItem>
                    <DropdownItem divided>退出登录</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    </Header>
</template>

<script>
    import {mapState, mapActions, mapGetters} from 'vuex'

    export default {
        name: "AlmHeader",
        computed: {
            ...mapState([
                'headerHeight',
                "isCollapsed"
            ]),
            ...mapGetters([
                "leftPadding"
            ])
        },
        methods: {
            ...mapActions([
                'siderCollapseToggle'
            ])
        }
    }
</script>

<style scoped>
    .header {
        position: fixed;
        top: 0;
        background: #fff;
        box-shadow: 0 1px 6px rgba(0, 21, 41, .08);
        padding: 0;
        display: flex;
        flex-flow: row nowrap;
    }

    .header-trigger {
        width: auto;
        padding: 0 15px;
        display: flex;
    }

    .header-trigger:hover, .header-user:hover, .header .ivu-menu li:hover {
        background: #f8f8f9;
        cursor: pointer;
    }

    .header-trigger i {
        margin: auto;
        font-size: x-large;
    }

    .header .ivu-menu {
        height: auto;
        display: flex;
        flex-flow: row nowrap;
        line-height: normal;
    }

    .header .ivu-menu li {
        display: flex;
        flex-flow: row nowrap;
        width: 100px;
        align-items: center;
        background: #fff;
    }

    .search-input {
        display: flex;
        align-items: center;
        padding: 0 30px;
    }

    .header-user {
        display: flex;
        align-items: center;
        margin-left: auto;
    }

    .header-user i {
        padding: 0 5px;
    }

    .header-user span {
        max-width: 150px;
        overflow: hidden;
        text-overflow: ellipsis;
        padding-right: 15px;
    }

    .user-dropdown {
        display: flex;
        align-items: center;
        flex-flow: row nowrap;
    }
</style>