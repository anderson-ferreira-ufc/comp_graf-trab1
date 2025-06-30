import { scene } from "./cena.mjs";

export function universo(){
    const uni_loader = new THREE.TextureLoader().load('textures/uni_tex1.png');
    const geo_sol = new THREE.SphereGeometry(100000, 32, 32); // Proporção do raio do Sol em relação ao raio da Terra.
    const material_sol = new THREE.MeshBasicMaterial({map: uni_loader, side: THREE.BackSide});
    const uni = new THREE.Mesh(geo_sol, material_sol);
    uni.position.set(0, 0, 0);
    scene.add(uni);
    return uni;
}