<script setup lang="ts">
import ColorPicker from 'primevue/colorpicker';
import { useSettingsScene } from '@/composables/useSettingsScene';

const { colorScene, colorFloor } = useSettingsScene();
</script>

<template>
    <form class="settings-form">
        <section>
            <label for="color">Scene colour</label>
            <ColorPicker
                id="color"
                v-model="colorScene"
                :default-color="colorScene"
                format="hex"
            />
        </section>

        <section>
            <label for="color">Floor colour</label>
            <ColorPicker
                id="color"
                v-model="colorFloor"
                :default-color="`#${colorFloor}`"
                format="hex"
            />
        </section>
    </form>
</template>


<style scoped>

</style>