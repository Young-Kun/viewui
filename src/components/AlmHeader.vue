<template>
    <Header class="header">
        <Menu mode="horizontal" theme="light">
            <div class="layout-logo">
            </div>
            <div class="layout-nav">
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
                <MenuItem name="4">
                    <Icon type="ios-paper"></Icon>
                    Item 4
                </MenuItem>
            </div>
        </Menu>
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
        width: calc(100% - 200px);
        left: 200px;
        background-color: #fff;
    }
</style>