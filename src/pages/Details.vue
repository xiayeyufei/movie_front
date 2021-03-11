<template>
    <div>
        <NavBar></NavBar>
        <router-view/>
    </div>
</template>
<script>
    import NavBar from "@/components/NavBar";

    export default {
        name: "Details",
        components: {NavBar}

    }
</script>
<style scoped>

</style>
