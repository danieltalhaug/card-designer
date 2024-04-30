<script setup lang="ts">
import ColorPicker from 'primevue/colorpicker';
import Dropdown from 'primevue/dropdown';
import { useSettingsScene } from '@/composables/useSettingsScene';
import { meshMaterials } from '@/utils/selectableMeshMaterials';

const { sceneColor, sceneFloorMeshMaterial, sceneFloorColor } = useSettingsScene();
</script>

<template>
    <form class="settings-form">
        <section>
            <label for="color">Scene colour</label>
            <ColorPicker
                id="color"
                v-model="sceneColor"
                :default-color="sceneColor"
                format="hex"
            />
        </section>

        <section>
            <label for="floorMeshMaterial">Scene mesh material</label>
            <Dropdown
                id="floorMeshMaterial"
                v-model="sceneFloorMeshMaterial"
                :options="meshMaterials"
                option-label="name"
            />
        </section>

        <section>
            <label for="color">Floor colour</label>
            <ColorPicker
                id="color"
                v-model="sceneFloorColor"
                :default-color="`#${sceneFloorColor}`"
                format="hex"
            />
        </section>
    </form>
</template>


<style scoped>

</style>