import { ref } from "vue";
import type { geometry } from '@/utils/selectableGeometries';
import { geometries } from '@/utils/selectableGeometries';
import type { meshMaterial } from '@/utils/selectableMeshMaterials';
import { meshMaterials } from '@/utils/selectableMeshMaterials';

const geometrySelected = ref<geometry>(geometries[0]);
const geometryMeshMaterialSelected = ref<meshMaterial>(meshMaterials[0]);
const geometryColor = ref<string>('FF0000');

export function useSettingsGeometry() {

    return {
        geometrySelected,
        geometryMeshMaterialSelected,
        geometryColor,
    };
}