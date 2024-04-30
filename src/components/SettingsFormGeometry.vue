<script setup lang="ts">
import Dropdown from 'primevue/dropdown';
import ColorPicker from 'primevue/colorpicker';
import { useSettingsGeometry } from '@/composables/useSettingsGeometry';
import { geometries } from '@/utils/selectableGeometries';
import { meshMaterials } from '@/utils/selectableMeshMaterials';

const { geometrySelected, geometryMeshMaterialSelected, geometryColor } = useSettingsGeometry();
</script>

<template>
    <form class="settings-form">
        <section>
            <label for="geometrySelected">Geometry</label>
            <Dropdown
                id="geometrySelected" 
                v-model="geometrySelected"
                :options="geometries"
                option-label="name"
            />
        </section>

        <section>
            <label for="geometryMesh">Geometry mesh material</label>
            <Dropdown
                id="geometryMesh" 
                v-model="geometryMeshMaterialSelected"
                :options="meshMaterials"
                option-label="name"
            />
        </section>

        <section>
            <label for="geometryColor">Geometry colour</label>
            <ColorPicker
                id="geometryColor" 
                v-model="geometryColor"
                :default-color="geometryColor"
                format="hex"
            />
        </section>
    </form>
</template>

<style scoped>

</style>