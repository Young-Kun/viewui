<template>
    <alm-layout>
        <template v-slot:sider>
            <alm-sider/>
        </template>
        <template v-slot:header>
            <alm-header/>
        </template>
        <template v-slot:content>
            <alm-content/>
        </template>
        <template v-slot:footer>
            <alm-footer/>
        </template>
    </alm-layout>
</template>

<script>
    import AlmLayout from "@/components/AlmLayout";
    import AlmSider from "@/components/AlmSider";
    import AlmHeader from "@/components/AlmHeader";
    import AlmContent from "@/components/AlmContent";
    import AlmFooter from "@/components/AlmFooter";

    export default {
        name: "AlmIndex",
        components: {
            AlmLayout,
            AlmSider,
            AlmHeader,
            AlmContent,
            AlmFooter
        }
    }
</script>

<style scoped>

</style>