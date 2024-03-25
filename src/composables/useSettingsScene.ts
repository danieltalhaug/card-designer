import { ref } from "vue";

type hex = string;

const colorScene = ref<hex>('1e1e21');
const colorFloor = ref<hex>('2f2f36');

export function useSettingsScene() {
    return {
        colorScene,
        colorFloor,
    };
}