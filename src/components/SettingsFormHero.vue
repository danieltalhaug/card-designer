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
    resetHeroPosition,
    resetHeroRotation,
} = useSettingsHero();

const axises = ['x', 'y', 'z'];

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
                <span v-for="axis in axises" :key="axis">
                    <label :for="`heroPosition${axis}`">
                        {{ axis.toUpperCase() }}
                    </label>
                    <Slider
                        v-model="heroGeometrySelected.position[axis]"
                        :id="`heroPosition${axis}`"
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

        <section>
            <label for="heroRotation">Rotation</label>
            <div id="heroRotation" class="position-sliders">
                <span v-for="axis in axises" :key="axis">
                    <label :for="`heroRotation${axis}`">
                        {{ axis.toUpperCase() }}
                    </label>
                    <Slider
                        v-model="heroGeometrySelected.rotation[axis]"
                        :id="`heroRotation${axis}`"
                        :min="-360"
                        :max="360"
                        :step="1"
                    />
                </span>
                <Button
                    class="action"
                    label="Reset"
                    icon="pi pi-replay"
                    severity="secondary"
                    @click="resetHeroRotation()"
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