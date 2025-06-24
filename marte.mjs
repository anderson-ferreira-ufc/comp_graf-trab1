import {esc_dist} from './sol.mjs';
import {raio_terra} from './terra.mjs';
import {scene} from './cena.mjs';

// Dados de Marte.
export const raio_mar = 3396;
export const mar_sol_dist = (esc_dist*(228000000 + 696340 + 3396)/(149600000 + 696340 + 6378)); // 91.29 = Distância entre os centros de Marte e Sol.

//Construção de Marte.
export function marteTranslacao() {
    const mar_loader = new THREE.TextureLoader().load('textures/mar_tex.jpg');
    const geo_mar = new THREE.SphereGeometry(raio_mar / raio_terra, 32, 32); // Proporção Marte / Terra = 0.53
    const material_mar = new THREE.MeshBasicMaterial({map: mar_loader});
    const marte = new THREE.Mesh(geo_mar, material_mar);
    marte.position.set(0, 0, 0);
    scene.add(marte);
    return marte;
}

export function trajetoriaMarte() {
    const curve = new THREE.EllipseCurve(
    0, 0,            // x e y do centro
    mar_sol_dist, mar_sol_dist,           // raioX e raioY
    0, 2 * Math.PI,  // ângulo inicial e final
    false,           // sentido horário (false = anti-horário)
    0               // rotação da elipse
    );

    const points2D = curve.getPoints(100);

    const points3D = points2D.map(p => new THREE.Vector3(p.x, p.y, 0));

    const geometry = new THREE.BufferGeometry().setFromPoints(points3D);
    const material = new THREE.LineBasicMaterial({ color:0xa6ff00 });
    //8abf14
    const ellipse = new THREE.Line(geometry, material);
    scene.add(ellipse);
    return ellipse;
}