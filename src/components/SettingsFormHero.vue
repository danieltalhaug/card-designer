<script setup lang="ts">
import Dropdown from 'primevue/dropdown';
import ColorPicker from 'primevue/colorpicker';
import Slider from 'primevue/slider';
import Button from 'primevue/button';
import { useSettingsHero } from '@/composables/useSettingsHero';
import { geometries } from '@/utils/selectableGeometries';
import { meshMaterials } from '@/utils/selectableMeshMaterials';

const {
    heroGeometrySelected,
    heroMeshMaterialSelected,
    heroMaterialColor,
    heroPosition,
    resetHeroPosition,
} = useSettingsHero();

</script>

<template>
    <form class="settings-form">
        <section>
            <label for="heroSelected">Hero</label>
            <Dropdown
                id="heroSelected" 
                v-model="heroGeometrySelected"
                :options="geometries"
                option-label="name"
            />
        </section>

        <section>
            <label for="heroMesh">Geometry mesh material</label>
            <Dropdown
                id="heroMesh" 
                v-model="heroMeshMaterialSelected"
                :options="meshMaterials"
                option-label="name"
            />
        </section>

        <section>
            <label for="heroColor">Geometry colour</label>
            <ColorPicker
                id="heroColor" 
                v-model="heroMaterialColor"
                :default-color="heroMaterialColor"
                format="hex"
            />
        </section>

        <section>
            <label for="heroPosition">Position</label>
            <div id="heroPosition" class="position-sliders">
                <span>
                    <label for="heroPositionX">X</label>
                    <Slider
                        v-model="heroPosition.x"
                        id="heroPositionX"
                        :min="-30"
                        :max="30"
                        :step="0.1"
                    />
                </span>
                <span>
                    <label for="heroPositionY">Y</label>
                    <Slider
                        v-model="heroPosition.y"
                        id="heroPositionY"
                        :min="-30"
                        :max="30"
                        :step="0.1"
                    />
                </span>
                <span>
                    <label for="heroPositionZ">Z</label>
                    <Slider
                        v-model="heroPosition.z"
                        id="heroPositionZ"
                        :min="-30"
                        :max="30"
                        :step="0.1"
                    />
                </span>
                <Button
                    class="action"
                    label="Reset"
                    icon="pi pi-replay"
                    severity="secondary"
                    @click="resetHeroPosition()"
                />
            </div>
        </section>
    </form>
</template>

<style scoped>

.position-sliders {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.position-sliders span {
    display: flex;
    align-items: center;
    gap: 16px;
}

.position-sliders span .p-slider {
    width: 100%;
}
.position-sliders .action {
    align-self: end;
}
</style>