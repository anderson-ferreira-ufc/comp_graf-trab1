import {merc_sol_dist, mercurioTranslacao, trajetoriaMercurio} from './mercurio.mjs';
import {ven_sol_dist, venusTranslacao, trajetoriaVenus} from './venus.mjs';
import {terra_sol_dist, terraTranslacao, lua_sol_dist, luaTranslacao, trajetoriaTerra, trajetoriaLua} from './terra.mjs';
import {mar_sol_dist, marteTranslacao, trajetoriaMarte} from './marte.mjs';
import {jup_sol_dist, jupiterTranslacao, trajetoriaJupiter} from './jupiter.mjs';
import {sat_sol_dist, satAnel_sol_dist, saturnoTranslacao, saturnoAnelTranslacao, trajetoriaSaturno} from './saturno.mjs';
import {ura_sol_dist, uranoTranslacao, trajetoriaUrano} from './urano.mjs';
import {net_sol_dist, netunoTranslacao, trajetoriaNetuno} from './netuno.mjs';
import {plu_sol_dist, plutaoTranslacao, trajetoriaPlutao} from './plutao.mjs';
import { OrbitControls } from "https://esm.sh/three/addons/controls/OrbitControls.js";
import {scene, camera, renderer, loader} from './cena.mjs';
import {esc_dist, solProporcao, usr_inp} from './sol.mjs';

//let percent_escala_sol = 1; //Porcentagem da escala real do raio do Sol (deve ir d 0.2 à 1)
solProporcao(usr_inp);

let animationSpeed = 1; // Velocidade de animação.
let tempo_terra = 0; // Variável utilizada como progressão de tempo.

renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.set(0, 100 + esc_dist * 0.2, 0);
camera.lookAt(0, 0, 0);
const controls = new OrbitControls(camera, renderer.domElement);
document.body.appendChild(renderer.domElement);
//scene.background = loader.load('textures/uni_tex2.jpg');

// Eixo x, y e z.
const axesHelper = new THREE.AxesHelper(500);
//scene.add( axesHelper );

// Grid de apoio.
function createGrid(size = 1300, divisions = 1000) {
    const gridHelper = new THREE.GridHelper(size, divisions);
    return gridHelper;
}

const mercurio = mercurioTranslacao();
const venus = venusTranslacao();
const terra = terraTranslacao();
const lua = luaTranslacao();
const marte = marteTranslacao();
const jupiter = jupiterTranslacao();
const saturno = saturnoTranslacao();
const saturnoAnel = saturnoAnelTranslacao();
const urano = uranoTranslacao();
const netuno = netunoTranslacao();
const plutao = plutaoTranslacao();

/*const traj_mer = trajetoriaMercurio();
const traj_ven = trajetoriaVenus();
const traj_terra = trajetoriaTerra();
const traj_lua = trajetoriaLua();
const traj_mar = trajetoriaMarte();
const traj_jup = trajetoriaJupiter();
const traj_sat = trajetoriaSaturno();
const traj_ura = trajetoriaUrano();
const traj_net = trajetoriaNetuno();
const traj_plu = trajetoriaPlutao();*/

//scene.add(createGrid());

// Função de animação dos objetos da cena.
function animate() {

    renderer.render(scene, camera);
    requestAnimationFrame(animate);

    tempo_terra += 0.001 * animationSpeed;

    let orbita_merc = tempo_terra * (365.25 / 88); // Ano Terrestre (dias) / Órbita de Mercúrio (dias terrestre)
    // Parâmetros de transformação do Mercúrio.
    mercurio.position.x = Math.sin(orbita_merc) * merc_sol_dist;
    mercurio.position.z = Math.cos(orbita_merc) * merc_sol_dist;
    mercurio.rotation.y = tempo_terra * (365.25 / 58.65); // Ano Terrestre (dias) / Rotação de Mercúrio (dias terrestre)
    mercurio.rotation.x = 0; // Inclinação do eixo de rotação de Mercúrio (0.034°)
    //traj_mer.rotation.x = Math.PI/2;

    let orbita_ven = tempo_terra * (365.25 / 224.7); // Ano Terrestre (dias) / Órbita de Vênus (dias terrestre)
    // Parâmetros de transformação de Vênus.
    venus.position.x = Math.sin(orbita_ven) * ven_sol_dist;
    venus.position.z = Math.cos(orbita_ven) * ven_sol_dist;
    venus.rotation.y = tempo_terra * (365.25 / 243); // Ano Terrestre (dias) / Rotação de Vênus (dias terrestre)
    venus.rotation.x = 3.1; // Inclinação do eixo de rotação de Vênus (177.4°)
    //traj_ven.rotation.x = Math.PI/2;

    // Parâmetros de transformação da Terra.
    let orbita_terra = tempo_terra * (365.25 / 365.25); 
    terra.position.x = Math.sin(orbita_terra) * terra_sol_dist;
    terra.position.z = Math.cos(orbita_terra) * terra_sol_dist;
    terra.rotation.y = tempo_terra * (365.25 / 1); // Ano Terrestre (dias) / Rotação da Terra (dias terrestre)
    terra.rotation.x = 0.41; // Inclinação do eixo de rotação da Terra (23.5°)
    //traj_terra.rotation.x = Math.PI/2;

    // Parâmetros de transformação da Lua.
    let orbita_lua = tempo_terra * (365.25 / 365.25); 
    lua.position.x = Math.sin(orbita_lua) * lua_sol_dist + Math.cos(13.37*orbita_lua) * 6;
    lua.position.z = Math.cos(orbita_lua) * lua_sol_dist + Math.sin(13.37*orbita_lua) * 6;
    lua.rotation.y = tempo_terra * (365.25 / (-27.3)); // Ano Terrestre (dias) / Rotação da Lua (dias terrestre)
    lua.rotation.x = 0.12; // Inclinação do eixo de rotação da Lua (6.7°)
    // traj_lua.position.x = Math.sin(orbita_lua) * terra_sol_dist;
    // traj_lua.position.z = Math.cos(orbita_lua) * terra_sol_dist;
    //traj_lua.rotation.x = Math.PI/2;

    // Parâmetros de transformação de Marte.
    let orbita_mar = tempo_terra * (365.25 / 687); // Ano Terrestre (dias) / Órbita de Marte (dias terrestre)
    marte.position.x = Math.sin(orbita_mar) * mar_sol_dist;
    marte.position.z = Math.cos(orbita_mar) * mar_sol_dist; 
    marte.rotation.y = tempo_terra * (365.25 / 1.02); // Ano Terrestre (dias) / Rotação de Marte (dias terrestre)
    marte.rotation.x = 0.44; // Inclinação do eixo de rotação de Marte (25.2°)
    //traj_mar.rotation.x = Math.PI/2;

    // Parâmetros de transformação de Júpiter.
    let orbita_jup = tempo_terra * (365.25 / 4331); // Ano Terrestre (dias) / Órbita de Júpiter (dias terrestre)
    jupiter.position.x = Math.sin(orbita_jup) * jup_sol_dist;
    jupiter.position.z = Math.cos(orbita_jup) * jup_sol_dist; 
    jupiter.rotation.y = tempo_terra * (365.25 / 0.41); // Ano Terrestre (dias) / Rotação de Júpiter (dias terrestre)
    jupiter.rotation.x = 0.05; // Inclinação do eixo de rotação de Júpiter (3.1°)
    //traj_jup.rotation.x = Math.PI/2;

    // Parâmetros de transformação de Saturno.
    let orbita_sat = tempo_terra * (365.25 / 10747); // Ano Terrestre (dias) / Órbita de Saturno (dias terrestre)
    saturno.position.x = Math.sin(orbita_sat) * sat_sol_dist;
    saturno.position.z = Math.cos(orbita_sat) * sat_sol_dist; 
    saturno.rotation.y = tempo_terra * (365.25 / 0.45); // Ano Terrestre (dias) / Rotação de Saturno (dias terrestre)
    saturno.rotation.x = 0.47; // Inclinação do eixo de rotação Saturno (26.7°)
    //traj_sat.rotation.x = Math.PI/2;

    // Parâmetros de transformação do anel de Saturno.
    let orbita_satAnel = tempo_terra * (365.25 / 10747); // Ano Terrestre (dias) / Órbita de Saturno (dias terrestre)
    saturnoAnel.position.x = Math.sin(orbita_satAnel) * satAnel_sol_dist;
    saturnoAnel.position.z = Math.cos(orbita_satAnel) * satAnel_sol_dist; 
    saturnoAnel.rotation.x = 2.04; // Inclinação do eixo de rotação Saturno (206.7°)

    // Parâmetros de transformação de Urano.
    let orbita_ura = tempo_terra * (365.25 / 30589); // Ano Terrestre (dias) / Órbita de Urano (dias terrestre)
    urano.position.x = Math.sin(orbita_ura) * ura_sol_dist;
    urano.position.z = Math.cos(orbita_ura) * ura_sol_dist; 
    urano.rotation.y = tempo_terra * (365.25 / (-0.71)); // Ano Terrestre (dias) / Rotação de Urano (dias terrestre)
    urano.rotation.x = 1.71; // Inclinação do eixo de rotação de Urano (97.8°)
    //traj_ura.rotation.x = Math.PI/2;

    // Parâmetros de transformação de Netuno.
    let orbita_net = tempo_terra * (365.25 / 59800); // Ano Terrestre (dias) / Órbita de Netuno (dias terrestre)
    netuno.position.x = Math.sin(orbita_net) * net_sol_dist;
    netuno.position.z = Math.cos(orbita_net) * net_sol_dist; 
    netuno.rotation.y = tempo_terra * (365.25 / (0.67)); // Ano Terrestre (dias) / Rotação de Netuno (dias terrestre)
    netuno.rotation.x = 0.49; // Inclinação do eixo de rotação de Netuno (28.3°)
    //traj_net.rotation.x = Math.PI/2;

    // Parâmetros de transformação de Plutão.
    let orbita_plu = tempo_terra * (365.25 / 90560); // Ano Terrestre (dias) / Órbita de Plutão (dias terrestre)
    plutao.position.x = Math.sin(orbita_plu) * plu_sol_dist;
    plutao.position.z = Math.cos(orbita_plu) * plu_sol_dist; 
    plutao.rotation.y = tempo_terra * (365.25 / (-6.39)); // Ano Terrestre (dias) / Rotação de Plutão (dias terrestre)
    plutao.rotation.x = 2.09; // Inclinação do eixo de rotação de Plutão (119.5°)
    //traj_plu.rotation.x = Math.PI/2;

    controls.update();
}
animate();