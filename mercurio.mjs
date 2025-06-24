import {esc_dist} from './sol.mjs';
import {raio_terra} from './terra.mjs';
import {scene} from './cena.mjs';
// Dados de Mercúrio.
//export var orbita_merc = 0; // Inicializando o parâmetro da órbita.
export const raio_merc = 2440;
export const merc_sol_dist = (esc_dist*(57900000 + 696340 + 2440)/(149600000 + 696340 + 6378)); // 23.39 = Distância entre os centros de Mercúrio e Sol.

// Construção de Mercúrio.
export function mercurioTranslacao() {
    const merc_loader = new THREE.TextureLoader().load('textures/merc_tex.jpg');
    const geo_merc = new THREE.SphereGeometry(raio_merc / raio_terra, 32, 32); // Proporção Mercúrio / Terra = 0.38
    const material_merc = new THREE.MeshBasicMaterial({map: merc_loader});
    const mercurio = new THREE.Mesh(geo_merc, material_merc);
    mercurio.position.set(0, 0, 0);
    scene.add(mercurio);
    return mercurio;
}

// Trajetória do Mercúrio
export function trajetoriaMercurio() {
    const curve = new THREE.EllipseCurve(
    0, 0,            // x e y do centro
    merc_sol_dist, merc_sol_dist,           // raioX e raioY
    0, 2 * Math.PI,  // ângulo inicial e final
    false,           // sentido horário (false = anti-horário)
    0               // rotação da elipse
    );

    const points2D = curve.getPoints(100);

    const points3D = points2D.map(p => new THREE.Vector3(p.x, p.y, 0));

    const geometry = new THREE.BufferGeometry().setFromPoints(points3D);
    const material = new THREE.LineBasicMaterial({ color: 0xee0808 });

    const ellipse = new THREE.Line(geometry, material);
    scene.add(ellipse);
    return ellipse;
}