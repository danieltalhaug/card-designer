/**
 * Settings for the Cientos orbit control wrapper
 * https://cientos.tresjs.org/guide/controls/orbit-controls.html#props
 */
import { ref } from "vue";

const autoRotate = ref<boolean>(true);
const autoRotateSpeed = ref<number>(2);

export function useSettingsOrbitControls() {

    return {
        autoRotate,
        autoRotateSpeed,
    };
}