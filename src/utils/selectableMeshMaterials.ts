export type meshMaterial = {
    name: string;
    component: string;
};

export const meshMaterials = <meshMaterial[]> [
    {name: 'Basic Material', component: 'TresMeshBasicMaterial'},
    {name: 'Standard Material', component: 'TresMeshStandardMaterial'},
    {name: 'Toon Material', component: 'TresMeshToonMaterial'},
    {name: 'Physical Material', component: 'TresMeshPhysicalMaterial'},
    {name: 'Lambert Material', component: 'TresMeshLambertMaterial'},
    {name: 'Matcap Material', component: 'TresMeshMatcapMaterial'},
    {name: 'Phong Material', component: 'TresMeshPhongMaterial'},
    {name: 'Depth Material', component: 'TresMeshDepthMaterial'},
    {name: 'Normal Material', component: 'TresMeshNormalMaterial'},
];