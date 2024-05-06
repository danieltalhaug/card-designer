import { ref } from "vue";
import type { position } from '@/types';
type size = number;
type segments = number;

const gridHelperPosition = ref<position>({
    x: 0,
    y: -2,
    z: 0,
});
const gridHelperArgs = ref<[size, segments]>([40, 40]);

export function useSettingsGridHelper() {

    /**
     * I couldn't figure out how to hide/show the helper grid in a reasonable way
     * without triggering errors so we'll cheat and just move it in and out of view :)
     */
    function toggleGridHelper(): void {
        if (gridHelperPosition.value.y === -2) {
            gridHelperPosition.value.y = -0.99;
        } else {
            gridHelperPosition.value.y = -2;
        }
    }
    return {
        gridHelperPosition,
        gridHelperArgs,
        toggleGridHelper,
    };
}