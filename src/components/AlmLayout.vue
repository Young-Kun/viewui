<template>
    <Layout class="layout">
        <slot name="sider"/>
        <Layout class="layout-inside">
            <slot name="header"/>
            <Layout class="layout-content">
                <main>
                    <slot name="content"/>
                </main>
            </Layout>
            <slot name="footer"/>
        </Layout>
    </Layout>
</template>

<script>
    export default {
        name: "AlmLayout"
    }
</script>

<style scoped>
    .layout-inside {
        overflow-x: hidden;
        padding-left: 200px;
        min-height: 100vh;
    }
    .layout-content {
        padding-top: 64px;
    }
    main {
        margin: 24px;
        background-color: #fff;
        flex: auto;
        border-radius: 5px;
        box-shadow: 0 1px 1px 0 rgba(0,0,0,.1);
    }
</style>