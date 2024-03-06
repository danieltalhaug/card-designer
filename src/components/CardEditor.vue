<script setup lang="ts">
import { TresCanvas } from '@tresjs/core';
import { OrbitControls } from '@tresjs/cientos';

import { useSettingsOrbitControls } from '@/composables/useSettingsOrbitControls';

const { autoRotate, autoRotateSpeed } = useSettingsOrbitControls();

</script>

<template>
    <TresCanvas clear-color="#82DBC5" window-size>
        <TresMesh>
            <TresTorusGeometry :args="[1, 0.5, 16, 32]" />
            <TresMeshBasicMaterial color="orange" />
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
        <TresGridHelper />
    </TresCanvas>
</template>

<style scoped>

</style>