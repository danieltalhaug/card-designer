import { ref } from "vue";
import type { meshMaterial } from '@/utils/selectableMeshMaterials';
import { meshMaterials } from '@/utils/selectableMeshMaterials';

type hex = string;

const sceneColor = ref<hex>('1e1e21');
const sceneFloorMeshMaterial = ref<meshMaterial>(meshMaterials[0]);
const sceneFloorColor = ref<hex>('2f2f36');

export function useSettingsScene() {
    return {
        sceneColor,
        sceneFloorMeshMaterial,
        sceneFloorColor,
    };
}