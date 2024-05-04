<script setup lang="ts">
// Libs
import { ref } from 'vue';

// Components
import Sidebar from 'primevue/sidebar';
import Button from 'primevue/button';
import ToggleButton from 'primevue/togglebutton';
import CardEditor from '@/components/CardEditor.vue';
import SettingsSidebarContent from '@/components/SettingsSidebarContent.vue';

// Composables
import { useSettingsOrbitControls } from '@/composables/useSettingsOrbitControls';
import { useSettingsGridHelper } from '@/composables/useSettingsGridHelper';
import { useSettingsHero } from '@/composables/useSettingsHero';

const { autoRotate } = useSettingsOrbitControls();
const { gridHelperPosition, toggleGridHelper } = useSettingsGridHelper();
const { heroPosition } = useSettingsHero();

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
                title="Toggle camera auto rotation"
            />
            <Button
                severity="secondary"
                :icon="gridHelperPosition[1] === -2 ? 'pi pi-table' : 'pi pi-stop'"
                aria-label="Toggle grid"
                title="Toggle grid"
                @click="toggleGridHelper()"
            />
            <Button
                severity="secondary"
                icon="pi pi-cog"
                aria-label="Toggle settings"
                title="Toggle settings"
                :aria-controls="showSettings ? 'settings' : undefined"
                :aria-expanded="showSettings"
                @click="showSettings = true"
            />
        </section>
        <section class="hero-details" title="Hero position">
            <i class="pi pi-box" />
            {{ `x ${heroPosition.x}, y ${heroPosition.y}, x ${heroPosition.z}` }}
        </section>
    </main>
    <aside>
        <Sidebar
            id="sbar"
            v-model:visible="showSettings"
            position="right"
            role="settings"
        >
            <SettingsSidebarContent />
        </Sidebar>
    </aside>
</template>

<style scoped>
.actions {
    display: flex;
    gap: 8px;
}

.hero-details {
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    z-index: 1;
    padding: 16px;
    gap: 16px;
}
</style>
