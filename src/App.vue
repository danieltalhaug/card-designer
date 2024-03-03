<script setup lang="ts">
import Button from 'primevue/button';

</script>

<template>
    <main>
        <div class="card flex justify-content-center flex-wrap gap-3">
            <Button label="Primary" />
            <Button label="Secondary" severity="secondary" />
            <Button label="Success" severity="success" />
            <Button label="Info" severity="info" />
            <Button label="Warning" severity="warning" />
            <Button label="Help" severity="help" />
            <Button label="Danger" severity="danger" />
            <Button label="Contrast" severity="contrast" />
        </div>
    </main>
</template>

<style scoped>

</style>
