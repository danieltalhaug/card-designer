<script setup lang="ts">
import { TresCanvas } from '@tresjs/core';
import { OrbitControls } from '@tresjs/cientos';

import { useSettingsOrbitControls } from '@/composables/useSettingsOrbitControls';
import { useSettingsGridHelper } from '@/composables/useSettingsGridHelper';
import { useSettingsScene } from '@/composables/useSettingsScene';
import { useSettingsGeometry } from '@/composables/useSettingsGeometry';

const { autoRotate, autoRotateSpeed } = useSettingsOrbitControls();
const { gridHelperPosition, gridHelperArgs } = useSettingsGridHelper();
const { colorScene, colorFloor } = useSettingsScene();
const { geometrySelected, geometryMeshMaterialSelected, geometryColor } = useSettingsGeometry();

</script>

<template>
    <TresCanvas :clear-color="`#${colorScene}`" shadows window-size>
        <TresMesh cast-shadow>
            <Component :is="geometrySelected.component" />
            <Component :is="geometryMeshMaterialSelected.component" :color="`#${geometryColor}`" />
        </TresMesh>
        <TresMesh
            :position="[0, -1, 0]"
            :rotation="[-1.571, 0, 0]"
            receive-shadow
        >
            <TresCircleGeometry :args="[40, 40]" />
            <TresMeshToonMaterial :color="`#${colorFloor}`" />
        </TresMesh>
        <TresPerspectiveCamera
            :position="[3, 3, 3]"
            :look-at="[0, 0, 0]"
        />
        <OrbitControls
            :auto-rotate
            :auto-rotate-speed
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