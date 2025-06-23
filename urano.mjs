import {esc_dist} from './sol.mjs';
import {raio_terra} from './terra.mjs';
import {scene} from './cena.mjs';

// Dados de Urano.
export const raio_ura = 25559;
export const ura_sol_dist = (esc_dist*(2867000000 + 696340 + 25559)/(149600000 + 696340 + 6378)); // 1144.80 = Distância entre os centros de Urano e Sol.

//Construção de Urano.
export function uranoTranslacao() {
    const ura_loader = new THREE.TextureLoader().load('textures/ura_tex.jpg');
    const geo_ura = new THREE.SphereGeometry(raio_ura / raio_terra, 32, 32); // Proporção Urano / Terra = 4.01
    const material_ura = new THREE.MeshBasicMaterial({map: ura_loader});
    const urano = new THREE.Mesh(geo_ura, material_ura);
    urano.position.set(0, 0, 0);
    scene.add(urano);
    return urano;
}

export function trajetoriaUrano() {
    const curve = new THREE.EllipseCurve(
    0, 0,            // x e y do centro
    ura_sol_dist, ura_sol_dist,           // raioX e raioY
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