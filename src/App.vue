<script setup lang="ts">
import { ref } from 'vue';
import ToggleButton from 'primevue/togglebutton';
import CardEditor from '@/components/CardEditor.vue';
import { useSettingsOrbitControls } from '@/composables/useSettingsOrbitControls';
import { useSettingsGridHelper } from '@/composables/useSettingsGridHelper';

const { autoRotate } = useSettingsOrbitControls();
const { gridHelperPosition, toggleGridHelper } = useSettingsGridHelper();

const showSettings = ref<boolean>(false);
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
