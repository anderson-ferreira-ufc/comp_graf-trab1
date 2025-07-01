import {scene} from './cena.mjs';

export const usr_inp = 0.15; //Proporção do Sol desejada pelo usuário (variar de 0.15 à 1).

// Construção do Sol.
export function solProporcao(proporcao){
    const sol_loader = new THREE.TextureLoader().load("textures/sol_tex.jpg");
    const geo_sol = new THREE.IcosahedronGeometry(15, 4); // Proporção do raio do Sol em relação ao raio da Terra.
    const material_sol = new THREE.MeshBasicMaterial({color: 0xffe341});
    const sol = new THREE.Mesh(geo_sol, material_sol);
    sol.position.set(0, 0, 0);
    scene.add(sol);

    // Criando uma fonte de luz na origem do sol
    const corDaLuz = 0xffffff; // Cor da luz
    const intensidade = 3;     // Intensidade
    const distancia = 4000;    // Alcance da luz
    const luzDoSol = new THREE.PointLight(corDaLuz, intensidade, distancia);

    // Abilitando as sombras que essa luz forma
    luzDoSol.castShadow = true;
    sol.add(luzDoSol);

    return sol;
}

export const esc_dist = usr_inp * 109.2 / 0.2; // Valor arbiitrário base que será utilizado em cálculos para preservar a proporção real da distância entre os astros e o Sol, para facilitar a visualização.