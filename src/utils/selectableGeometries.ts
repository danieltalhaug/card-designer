import type { position } from '@/types';

export type geometry = {
    name: string;
    component: string;
    position: position,
};

export const geometries = <geometry[]> [
    {
        name: 'Box Geometry',
        component: 'TresBoxGeometry',
        position: { x: 0, y: 0, z: 0 },
    },
    {
        name: 'Capsule Geometry',
        component: 'TresCapsuleGeometry',
        position: { x: 0, y: 0, z: 1 },
    },
    {
        name: 'Circle Geometry',
        component: 'TresCircleGeometry',
        position: { x: 0, y: 0, z: 0 },
    },
    {
        name: 'Cone Geometry',
        component: 'TresConeGeometry',
        position: { x: 0, y: 0, z: 0 },
    },
    {
        name: 'Cylinder Geometry',
        component: 'TresCylinderGeometry',
        position: { x: 0, y: 0, z: 0 },
    },
    {
        name: 'Dodecahedron Geometry',
        component: 'TresDodecahedronGeometry',
        position: { x: 0, y: 0, z: 0.3 },
    },
    {
        name: 'Edges Geometry',
        component: 'TresEdgesGeometry',
        position: { x: 0, y: 0, z: 0 },
    },
    {
        name: 'Extrude Geometry',
        component: 'TresExtrudeGeometry',
        position: { x: 0, y: 0, z: 0 },
    },
    {
        name: 'Icosahedron Geometry',
        component: 'TresIcosahedronGeometry',
        position: { x: 0, y: 0, z: 0.3 },
    },
    {
        name: 'Lathe Geometry',
        component: 'TresLatheGeometry',
        position: { x: 0, y: 0, z: -0.2 },
    },
    {
        name: 'Octahedron Geometry',
        component: 'TresOctahedronGeometry',
        position: { x: 0, y: 0, z: 0.4 },
    },
    {
        name: 'Plane Geometry',
        component: 'TresPlaneGeometry',
        position: { x: 0, y: 0, z: 0 },
    },
    {
        name: 'Polyhedron Geometry',
        component: 'TresPolyhedronGeometry',
        position: { x: 0, y: 0, z: 0 },
    },
    {
        name: 'Ring Geometry',
        component: 'TresRingGeometry',
        position: { x: 0, y: 0, z: 0.2 },
    },
    {
        name: 'Shape Geometry',
        component: 'TresShapeGeometry',
        position: { x: 0, y: 0, z: 0 },
    },
    {
        name: 'Sphere Geometry',
        component: 'TresSphereGeometry',
        position: { x: 0, y: 0, z: 0.3 },
    },
    {
        name: 'Tetrahedron Geometry',
        component: 'TresTetrahedronGeometry',
        position: { x: 0, y: 0, z: 0 },
    },
    {
        name: 'Torus Geometry',
        component: 'TresTorusGeometry',
        position: { x: 0, y: 0, z: 0.7 },
    },
    {
        name: 'Torus Knot Geometry',
        component: 'TresTorusKnotGeometry',
        position: { x: 0, y: 0, z: 1.1 },
    },
    {
        name: 'Tube Geometry',
        component: 'TresTubeGeometry',
        position: { x: 0, y: 0, z: 0.4 },
    },
    {
        name: 'Wireframe Geometry',
        component: 'TresWireframeGeometry',
        position: { x: 0, y: 0, z: 0 },
    },
];