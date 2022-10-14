<svelte:head>
    <title>Assigner</title>

    <link rel="icon" href="/favicon.png">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Kanit:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"> 
</svelte:head>

<script lang="ts">
    import Head from "$lib/components/Head.svelte";
</script>

<div class="app">
    <Head />
</div>

<style lang="scss">
    .app {
        position: fixed;
        top: 0;
        left: 0;

        width: 100vw;
        height: 100vh;

        background-color: #14161b;

        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>