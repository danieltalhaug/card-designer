import type { position, rotation } from '@/types';

export type geometry = {
    name: string;
    component: string;
    position: position,
    rotation: rotation,
};

export const geometries = <geometry[]> [
    {
        name: 'Box Geometry',
        component: 'TresBoxGeometry',
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 0, z: 0 },
    },
    {
        name: 'Capsule Geometry',
        component: 'TresCapsuleGeometry',
        position: { x: 0, y: 0, z: 1 },
        rotation: { x: 0, y: 0, z: 0 },
    },
    {
        name: 'Circle Geometry',
        component: 'TresCircleGeometry',
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 0, z: 0 },
    },
    {
        name: 'Cone Geometry',
        component: 'TresConeGeometry',
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 0, z: 0 },
    },
    {
        name: 'Cylinder Geometry',
        component: 'TresCylinderGeometry',
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 0, z: 0 },
    },
    {
        name: 'Dodecahedron Geometry',
        component: 'TresDodecahedronGeometry',
        position: { x: 0, y: 0, z: 0.3 },
        rotation: { x: 0, y: 0, z: 0 },
    },
    {
        name: 'Edges Geometry',
        component: 'TresEdgesGeometry',
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 0, z: 0 },
    },
    {
        name: 'Extrude Geometry',
        component: 'TresExtrudeGeometry',
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 0, z: 0 },
    },
    {
        name: 'Icosahedron Geometry',
        component: 'TresIcosahedronGeometry',
        position: { x: 0, y: 0, z: 0.3 },
        rotation: { x: 0, y: 0, z: 0 },
    },
    {
        name: 'Lathe Geometry',
        component: 'TresLatheGeometry',
        position: { x: 0, y: 0, z: -0.2 },
        rotation: { x: 0, y: 0, z: 0 },
    },
    {
        name: 'Octahedron Geometry',
        component: 'TresOctahedronGeometry',
        position: { x: 0, y: 0, z: 0.4 },
        rotation: { x: 0, y: 0, z: 0 },
    },
    {
        name: 'Plane Geometry',
        component: 'TresPlaneGeometry',
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 0, z: 0 },
    },
    {
        name: 'Polyhedron Geometry',
        component: 'TresPolyhedronGeometry',
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 0, z: 0 },
    },
    {
        name: 'Ring Geometry',
        component: 'TresRingGeometry',
        position: { x: 0, y: 0, z: 0.2 },
        rotation: { x: 0, y: 0, z: 0 },
    },
    {
        name: 'Shape Geometry',
        component: 'TresShapeGeometry',
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 0, z: 0 },
    },
    {
        name: 'Sphere Geometry',
        component: 'TresSphereGeometry',
        position: { x: 0, y: 0, z: 0.3 },
        rotation: { x: 0, y: 0, z: 0 },
    },
    {
        name: 'Tetrahedron Geometry',
        component: 'TresTetrahedronGeometry',
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 0, z: 0 },
    },
    {
        name: 'Torus Geometry',
        component: 'TresTorusGeometry',
        position: { x: 0, y: 0, z: 0.7 },
        rotation: { x: 0, y: 0, z: 0 },
    },
    {
        name: 'Torus Knot Geometry',
        component: 'TresTorusKnotGeometry',
        position: { x: 0, y: 0, z: 1.1 },
        rotation: { x: 0, y: 0, z: 0 },
    },
    {
        name: 'Tube Geometry',
        component: 'TresTubeGeometry',
        position: { x: 0, y: 0, z: 0.4 },
        rotation: { x: 0, y: 0, z: 0 },
    },
    {
        name: 'Wireframe Geometry',
        component: 'TresWireframeGeometry',
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 0, z: 0 },
    },
];