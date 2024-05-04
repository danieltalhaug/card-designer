<script setup lang="ts">
import Dropdown from 'primevue/dropdown';
import ColorPicker from 'primevue/colorpicker';
import { useSettingsHero } from '@/composables/useSettingsHero';
import { geometries } from '@/utils/selectableGeometries';
import { meshMaterials } from '@/utils/selectableMeshMaterials';

const { heroGeometrySelected, heroMeshMaterialSelected, heroMaterialColor } = useSettingsHero();
</script>

<template>
    <form class="settings-form">
        <section>
            <label for="geometrySelected">Geometry</label>
            <Dropdown
                id="geometrySelected" 
                v-model="heroGeometrySelected"
                :options="geometries"
                option-label="name"
            />
        </section>

        <section>
            <label for="geometryMesh">Geometry mesh material</label>
            <Dropdown
                id="geometryMesh" 
                v-model="heroMeshMaterialSelected"
                :options="meshMaterials"
                option-label="name"
            />
        </section>

        <section>
            <label for="geometryColor">Geometry colour</label>
            <ColorPicker
                id="geometryColor" 
                v-model="heroMaterialColor"
                :default-color="heroMaterialColor"
                format="hex"
            />
        </section>
    </form>
</template>

<style scoped>

</style>