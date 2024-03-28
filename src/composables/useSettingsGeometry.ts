import { ref } from "vue";
import type { geometry } from '@/utils/selectableGeometries';
import { geometries } from '@/utils/selectableGeometries';

const geometrySelected = ref<geometry>(geometries[0]);
const geometryColor = ref<string>('FF0000');

export function useSettingsGeometry() {

    return {
        geometrySelected,
        geometryColor,
    };
}