import {esc_dist} from './sol.mjs';
import {raio_terra} from './terra.mjs';
import {scene} from './cena.mjs';

// Dados de Netuno.
export const raio_net = 24764;
export const net_sol_dist = (esc_dist*(4515000000 + 696340 + 24764)/(149600000 + 696340 + 6378)); // 1802.67 = Distância entre os centros de Netuno e Sol.

//Construção de Netuno.
export function netunoTranslacao() {
    const net_loader = new THREE.TextureLoader().load('textures/net_tex.jpg');
    const geo_net = new THREE.SphereGeometry(raio_net / raio_terra, 32, 32); // Proporção Netuno / Terra = 3.88
    const material_net = new THREE.MeshBasicMaterial({map: net_loader});
    const netuno = new THREE.Mesh(geo_net, material_net);
    netuno.position.set(0, 0, 0);
    scene.add(netuno);
    return netuno;
}