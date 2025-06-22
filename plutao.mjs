import {esc_dist} from './sol.mjs';
import {raio_terra} from './terra.mjs';
import {scene} from './cena.mjs';

// Dados de Plutão.
export const raio_plu = 1188;
export const plu_sol_dist = (esc_dist*(5906400000 + 696340 + 1188)/(149600000 + 696340 + 6378)); // 2358.11 = Distância entre os centros de Plutão e Sol.

//Construção de Plutão.
export function plutaoTranslacao() {
    const plu_loader = new THREE.TextureLoader().load('textures/plu_tex.png');
    const geo_plu = new THREE.SphereGeometry(raio_plu / raio_terra, 32, 32); // Proporção Plutão / Terra = 0.19
    const material_plu = new THREE.MeshBasicMaterial({map: plu_loader});
    const plutao = new THREE.Mesh(geo_plu, material_plu);
    plutao.position.set(0, 0, 0);
    scene.add(plutao);
    return plutao;
}