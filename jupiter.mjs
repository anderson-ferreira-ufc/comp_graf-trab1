import {esc_dist} from './sol.mjs';
import {raio_terra} from './terra.mjs';
import {scene} from './cena.mjs';

// Dados de Júpiter.
export const raio_jup = 71492; // Inicializando o parâmetro da órbita.
export const jup_sol_dist = (esc_dist*(778500000 + 696340 + 71492)/(149600000 + 696340 + 6378)); // 311.08 = Distância entre os centros de Júpiter e Sol.

//Construção de Júpiter.
export function jupiterTranslacao() {
    const jup_loader = new THREE.TextureLoader().load('textures/jup_tex.jpg');
    const geo_jup = new THREE.SphereGeometry(raio_jup / raio_terra, 32, 32); // Proporção Júpiter / Terra = 11.21
    const material_jup = new THREE.MeshBasicMaterial({map: jup_loader});
    const jupiter = new THREE.Mesh(geo_jup, material_jup);
    jupiter.position.set(0, 0, 0);
    scene.add(jupiter);
    return jupiter;
}