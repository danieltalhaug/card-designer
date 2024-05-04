import { ref } from "vue";
import type { geometry } from '@/utils/selectableGeometries';
import { geometries } from '@/utils/selectableGeometries';
import type { meshMaterial } from '@/utils/selectableMeshMaterials';
import { meshMaterials } from '@/utils/selectableMeshMaterials';

const heroGeometrySelected = ref<geometry>(geometries[0]);
const heroMeshMaterialSelected = ref<meshMaterial>(meshMaterials[0]);
const heroMaterialColor = ref<string>('FF0000');

export function useSettingsHero() {

    return {
        heroGeometrySelected,
        heroMeshMaterialSelected,
        heroMaterialColor,
    };
}