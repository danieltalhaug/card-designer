<script setup lang="ts">
import ToggleButton from 'primevue/togglebutton';
import CardEditor from '@/components/CardEditor.vue';
import { useSettingsGridHelper } from '@/composables/useSettingsGridHelper';

const { gridHelperPosition, toggleGridHelper } = useSettingsGridHelper();
</script>

<template>
    <main>
        <CardEditor />
        <section class="actions">
            <ToggleButton
                v-model="autoRotate"
                on-icon="pi pi-pause"
                off-icon="pi pi-play"
                on-label=""
                off-label=""
                aria-label="Toggle camera auto rotation"
            />
            <ToggleButton
                :value="gridHelperPosition[1] === -2"
                on-icon="pi pi-stop"
                off-icon="pi pi-table"
                on-label=""
                off-label=""
                aria-label="Toggle grid"
                @click="toggleGridHelper()"
            />
        </section>
    </main>
</template>

<style scoped>
.actions {
    display: flex;
    gap: 8px;
}
</style>
