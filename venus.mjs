import {esc_dist} from './sol.mjs';
import {raio_terra} from './terra.mjs';
import {scene} from './cena.mjs';
// Dados de Vênus.

export const raio_ven = 6052;
export const ven_sol_dist = (esc_dist*(108200000 + 696340 + 6052)/(149600000 + 696340 + 6378)); // 43.47 = Distância entre os centros de Vênus e Sol.

// Construção de Vênus.
export function venusTranslacao() {
    const ven_loader = new THREE.TextureLoader().load('textures/ven_tex.jpg');
    const geo_ven = new THREE.SphereGeometry(raio_ven / raio_terra, 32, 32); // Proporção Vênus / Terra = 0.95
    const material_ven = new THREE.MeshBasicMaterial({map: ven_loader});
    const venus = new THREE.Mesh(geo_ven, material_ven);
    venus.position.set(0, 0, 0);
    scene.add(venus);
    return venus;
}

// Trajetória de Vênus.
export function trajetoriaVenus() {
    const curve = new THREE.EllipseCurve(
    0, 0,            // x e y do centro
    ven_sol_dist, ven_sol_dist,           // raioX e raioY
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