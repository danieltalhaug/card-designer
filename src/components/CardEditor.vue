<script setup lang="ts">
import { TresCanvas } from '@tresjs/core';
import { OrbitControls } from '@tresjs/cientos';

import { useSettingsOrbitControls } from '@/composables/useSettingsOrbitControls';
import { useSettingsGridHelper } from '@/composables/useSettingsGridHelper';
import { useSettingsScene } from '@/composables/useSettingsScene';
import { useSettingsHero } from '@/composables/useSettingsHero';

const { autoRotate, autoRotateSpeed } = useSettingsOrbitControls();
const { gridHelperPosition, gridHelperArgs } = useSettingsGridHelper();
const { sceneColor, sceneFloorMeshMaterial, sceneFloorColor } = useSettingsScene();
const { heroGeometrySelected, heroMeshMaterialSelected, heroMaterialColor } = useSettingsHero();

</script>

<template>
    <TresCanvas :clear-color="`#${sceneColor}`" shadows window-size>
        <TresMesh cast-shadow>
            <Component :is="heroGeometrySelected.component" />
            <Component :is="heroMeshMaterialSelected.component" :color="`#${heroMaterialColor}`" />
        </TresMesh>
        <TresMesh
            :position="[0, -1, 0]"
            :rotation="[-1.571, 0, 0]"
            receive-shadow
        >
            <TresCircleGeometry :args="[40, 40]" />
            <Component :is="sceneFloorMeshMaterial.component" :color="`#${sceneFloorColor}`" />
        </TresMesh>
        <TresPerspectiveCamera
            :position="[3, 3, 3]"
            :look-at="[0, 0, 0]"
        />
        <OrbitControls
            :auto-rotate
            :auto-rotate-speed
            :max-polar-angle="Math.PI / 2"
            :max-distance="15"
        />
        <TresAmbientLight
            :intensity="1"
            color="white" 
        />
        <TresDirectionalLight
            color="white"
            :position="[0, 50, 0]"
            :intensity="1"
            cast-shadow
        />
        <TresGridHelper
            :position="[...gridHelperPosition]"
            :args="gridHelperArgs"
        />
    </TresCanvas>
</template>

<style scoped>

</style>