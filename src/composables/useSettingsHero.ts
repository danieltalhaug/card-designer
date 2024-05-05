import { ref } from "vue";
import type { hex, position } from '@/types';
import type { geometry } from '@/utils/selectableGeometries';
import { geometries } from '@/utils/selectableGeometries';
import type { meshMaterial } from '@/utils/selectableMeshMaterials';
import { meshMaterials } from '@/utils/selectableMeshMaterials';

const heroGeometrySelected = ref<geometry>(geometries[0]);
const heroMeshMaterialSelected = ref<meshMaterial>(meshMaterials[0]);
const heroMaterialColor = ref<hex>('FF0000');

export function useSettingsHero() {
    function resetHeroPosition() {
        heroGeometrySelected.value.position = {
            x: 0,
            y: 0,
            z: 0,
        };
    }

    function resetHeroRotation() {
        heroGeometrySelected.value.rotation = {
            x: 0,
            y: 0,
            z: 0,
        };
    }

    return {
        heroGeometrySelected,
        heroMeshMaterialSelected,
        heroMaterialColor,
        resetHeroPosition,
        resetHeroRotation,
    };
}