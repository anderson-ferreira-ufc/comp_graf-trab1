import {scene} from './cena.mjs';

export const usr_inp = 0.15; //Proporção do Sol desejada pelo usuário (variar de 0.15 à 1).

// Construção do Sol.
export function solProporcao(proporcao){
    const geo_sol = new THREE.SphereGeometry(109.2*proporcao, 32, 32); // Proporção do raio do Sol em relação ao raio da Terra.
    const material_sol = new THREE.MeshBasicMaterial({color:0xffe341});
    const sol = new THREE.Mesh(geo_sol, material_sol);
    sol.position.set(0, 0, 0);
    scene.add(sol);
    return sol;
}

export const esc_dist = usr_inp * 109.2 / 0.2; // Valor arbiitrário base que será utilizado em cálculos para preservar a proporção real da distância entre os astros e o Sol, para facilitar a visualização.