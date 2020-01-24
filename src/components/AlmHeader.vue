<template>
    <Header class="header">
        <div class="header-trigger">
            <Icon type="md-menu"></icon>
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
                <div style="padding: 0 15px">
                    <Icon type="md-person"/>
                    <span>User</span>
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
    export default {
        name: "AlmHeader"
    }
</script>

<style scoped>
    .header {
        position: fixed;
        left: 200px;
        width: calc(100% - 200px);
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
        padding: 0 15px;
    }

    .header-user {
        margin-left: auto;
        margin-right: 20px;
    }
</style>