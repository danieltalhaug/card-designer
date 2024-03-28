export type geometry = {
    name: string;
    component: string;
};

export const geometries = <geometry[]> [
    {name: 'Box Geometry', component: 'TresBoxGeometry'},
    {name: 'Capsule Geometry', component: 'TresCapsuleGeometry'},
    {name: 'Circle Geometry', component: 'TresCircleGeometry'},
    {name: 'Cone Geometry', component: 'TresConeGeometry'},
    {name: 'Cylinder Geometry', component: 'TresCylinderGeometry'},
    {name: 'Dodecahedron Geometry', component: 'TresDodecahedronGeometry'},
    {name: 'Edges Geometry', component: 'TresEdgesGeometry'},
    {name: 'Extrude Geometry', component: 'TresExtrudeGeometry'},
    {name: 'Icosahedron Geometry', component: 'TresIcosahedronGeometry'},
    {name: 'Lathe Geometry', component: 'TresLatheGeometry'},
    {name: 'Octahedron Geometry', component: 'TresOctahedronGeometry'},
    {name: 'Plane Geometry', component: 'TresPlaneGeometry'},
    {name: 'Polyhedron Geometry', component: 'TresPolyhedronGeometry'},
    {name: 'Ring Geometry', component: 'TresRingGeometry'},
    {name: 'Shape Geometry', component: 'TresShapeGeometry'},
    {name: 'Sphere Geometry', component: 'TresSphereGeometry'},
    {name: 'Tetrahedron Geometry', component: 'TresTetrahedronGeometry'},
    {name: 'Torus Geometry', component: 'TresTorusGeometry'},
    {name: 'Torus Knot Geometry', component: 'TresTorusKnotGeometry'},
    {name: 'Tube Geometry', component: 'TresTubeGeometry'},
    {name: 'Wireframe Geometry', component: 'TresWireframeGeometry'},
];