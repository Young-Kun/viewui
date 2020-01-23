<template>
    <Layout>
        <!--侧边导航-->
        <alm-sider/>
        <Layout class="layout-inside">
            <!--头部导航-->
            <alm-header/>
            <Layout class="layout-content">
                <!--主体内容-->
                <main>
                    <alm-content/>
                </main>
            </Layout>
            <!--底部-->
            <alm-footer/>
        </Layout>
    </Layout>
</template>

<script>
    import AlmSider from "@/components/AlmSider";
    import AlmHeader from "@/components/AlmHeader";
    import AlmContent from "@/components/AlmContent";
    import AlmFooter from "@/components/AlmFooter";

    export default {
        name: "AlmLayout",
        data() {
            return {
                siderWidth: '300px'
            }
        },
        components: {
            AlmSider,
            AlmHeader,
            AlmContent,
            AlmFooter
        }
    }
</script>

<style scoped>
    .layout-inside {
        overflow-x: hidden;
        min-height: 100vh;
        padding-left: 200px;
    }

    .layout-content {
        padding-top: 64px;
    }

    main {
        margin: 24px;
        background-color: #fff;
        flex: auto;
        border-radius: 5px;
        box-shadow: 0 1px 1px 0 rgba(0, 0, 0, .1);
    }
</style>