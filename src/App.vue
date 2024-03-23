<script setup lang="ts">
import ToggleButton from 'primevue/togglebutton';
import CardEditor from '@/components/CardEditor.vue';

</script>

<template>
    <main>
        <CardEditor />
        <section>
            <ToggleButton
                v-model="autoRotate"
                on-icon="pi pi-pause"
                off-icon="pi pi-play"
                on-label=""
                off-label=""
                aria-label="Toggle camera auto rotation"
            />
        </section>
    </main>
</template>

<style scoped>

</style>
