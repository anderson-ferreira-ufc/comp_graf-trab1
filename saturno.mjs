import {esc_dist} from './sol.mjs';
import {raio_terra} from './terra.mjs';
import {scene} from './cena.mjs';

// Dados de Saturno.
export const raio_sat = 60268;
export const sat_sol_dist = (esc_dist*(1432000000 + 696340 + 60268)/(149600000 + 696340 + 6378)); // 571.95 = Distância entre os centros de Saturno e Sol.

export const raio_satAnel = 137000;
export const satAnel_sol_dist = (esc_dist*(1432000000 + 696340 + 60268)/(149600000 + 696340 + 6378)); // 571.95 = Distância entre os centros de Saturno e Sol.

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

//Construção de Saturno.
export function saturnoAnelTranslacao() {
    const satAnel_loader = new THREE.TextureLoader().load('textures/sat_anel_tex.jpg');
    const geo_satAnel = new THREE.TorusGeometry(raio_satAnel / raio_terra, 7, 2, 100); // Proporção anel de Saturno / Terra = 21.48
    const material_satAnel = new THREE.MeshBasicMaterial({map: satAnel_loader});
    const saturno_anel = new THREE.Mesh(geo_satAnel, material_satAnel);
    saturno_anel.position.set(0, 0, 0);
    scene.add(saturno_anel);
    return saturno_anel;
}

export function trajetoriaSaturno() {
    const curve = new THREE.EllipseCurve(
    0, 0,            // x e y do centro
    sat_sol_dist, sat_sol_dist,           // raioX e raioY
    0, 2 * Math.PI,  // ângulo inicial e final
    false,           // sentido horário (false = anti-horário)
    0               // rotação da elipse
    );

    const points2D = curve.getPoints(100);

    const points3D = points2D.map(p => new THREE.Vector3(p.x, p.y, 0));

    const geometry = new THREE.BufferGeometry().setFromPoints(points3D);
    const material = new THREE.LineBasicMaterial({ color:0x00ff62 });

    const ellipse = new THREE.Line(geometry, material);
    scene.add(ellipse);
    return ellipse;
}