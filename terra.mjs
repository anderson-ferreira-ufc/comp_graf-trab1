import {esc_dist} from './sol.mjs';
import {scene} from './cena.mjs';
// Dados da Terra.

//export let orbita_terra = 0;
// // Inicializando o parâmetro da órbita.
export const raio_terra = 6378;
export const terra_sol_dist = (esc_dist*(149600000 + 696340 + 6378)/(149600000 + 696340 + 6378)); // 60 = Distância entre os centros da Terra e Sol.

// Construção da Terra.
export function terraTranslacao() {
    const terra_loader = new THREE.TextureLoader().load('textures/terra_tex.jpg');
    const geo_terra = new THREE.SphereGeometry(raio_terra / raio_terra, 32, 32); // Proporção Terra / Terra = 1
    const material_terra = new THREE.MeshBasicMaterial({map: terra_loader});
    const terra = new THREE.Mesh(geo_terra, material_terra);
    terra.position.set(0, 0, 0);
    scene.add(terra);
    return terra;
}