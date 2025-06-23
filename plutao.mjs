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

export function trajetoriaPlutao() {
    const curve = new THREE.EllipseCurve(
    0, 0,            // x e y do centro
    plu_sol_dist, plu_sol_dist,           // raioX e raioY
    0, 2 * Math.PI,  // ângulo inicial e final
    false,           // sentido horário (false = anti-horário)
    0               // rotação da elipse
    );

    const points2D = curve.getPoints(100);

    const points3D = points2D.map(p => new THREE.Vector3(p.x, p.y, 0));

    const geometry = new THREE.BufferGeometry().setFromPoints(points3D);
    const material = new THREE.LineBasicMaterial({ color: 0xfffff0 });

    const ellipse = new THREE.Line(geometry, material);
    scene.add(ellipse);
    return ellipse;
}