import { ref } from "vue";
type size = number;
type segments = number;

const gridHelperPosition = ref<Number[]>([0, -2, 0]);
const gridHelperArgs = ref<[size, segments]>([40, 40]);

export function useSettingsGridHelper() {

    /**
     * I couldn't figure out how to hide/show the helper grid in a reasonable way
     * without triggering errors so we'll cheat and just move it in and out of view :)
     */
    function toggleGridHelper(): void {
        if (gridHelperPosition.value[1] === -2) {
            gridHelperPosition.value[1] = -0.99;
        } else {
            gridHelperPosition.value[1] = -2;
        }
    }
    return {
        gridHelperPosition,
        gridHelperArgs,
        toggleGridHelper,
    };
}