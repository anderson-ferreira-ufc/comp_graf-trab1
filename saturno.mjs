import {esc_dist} from './sol.mjs';
import {raio_terra} from './terra.mjs';
import {scene} from './cena.mjs';

// Dados de Saturno.
export let orbita_sat = 0; // Inicializando o parâmetro da órbita.
export const raio_sat = 60268;
export const sat_sol_dist = (esc_dist*(1432000000 + 696340 + 60268)/(149600000 + 696340 + 6378)); // 571.95 = Distância entre os centros de Saturno e Sol.

//Construção de Saturno.
export function saturnoTranslacao() {
    const sat_loader = new THREE.TextureLoader().load('textures/sat_tex.jpg');
    const geo_sat = new THREE.SphereGeometry(raio_sat / raio_terra, 32, 32); // Proporção Saturno / Terra = 9.45
    const material_sat = new THREE.MeshBasicMaterial({map: sat_loader});
    const saturno = new THREE.Mesh(geo_sat, material_sat);
    saturno.position.set(0, 0, 0);
    scene.add(saturno);
    return saturno;
}