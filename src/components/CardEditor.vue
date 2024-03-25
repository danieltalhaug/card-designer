<script setup lang="ts">
import { TresCanvas } from '@tresjs/core';
import { OrbitControls } from '@tresjs/cientos';

import { useSettingsOrbitControls } from '@/composables/useSettingsOrbitControls';
import { useSettingsGridHelper } from '@/composables/useSettingsGridHelper';

const { autoRotate, autoRotateSpeed } = useSettingsOrbitControls();
const { gridHelperPosition, gridHelperArgs } = useSettingsGridHelper();

</script>

<template>
    <TresCanvas clear-color="#82DBC5" shadows window-size>
        <TresMesh cast-shadow>
            <TresTorusGeometry :args="[0.5, 0.25, 16, 64]" />
            <TresMeshToonMaterial color="orange" />
        </TresMesh>
        <TresMesh
            :position="[0, -1, 0]"
            :rotation="[-1.571, 0, 0]"
            receive-shadow
        >
            <TresCircleGeometry :args="[40, 40]" />
            <TresMeshToonMaterial color="#82DBC5" />
        </TresMesh>
        <TresPerspectiveCamera
            :position="[3, 3, 3]"
            :look-at="[0, 0, 0]"
        />
        <OrbitControls
            :auto-rotate
            :auto-rotate-speed
        />
        <TresAmbientLight :intensity="1" />
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