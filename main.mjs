import { OrbitControls } from "https://esm.sh/three/addons/controls/OrbitControls.js";

let esc_dist = 60; // Valor base que será utilizado em cálculos para preservar a proporção real da distância entre os astros e o Sol.

// Criando a cena
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.set(0, 100, 0);
camera.lookAt(0, 0, 0);
const controls = new OrbitControls(camera, renderer.domElement);
document.body.appendChild(renderer.domElement);

let tempo_terra = 0; // Variável utilizada como progressão de tempo.
let animationSpeed = 1; // Velocidade de animação.

// Dados de Mercúrio.
let orbita_merc = 0; // Inicializando o parâmetro da órbita.
const raio_merc = 2440;
const merc_sol_dist = (esc_dist*(57900000 + 696340 + 2440)/(149600000 + 696340 + 6378)); // 23.39 = Distância entre os centros de Mercúrio e Sol.

// Dados de Vênus.
let orbita_ven = 0; // Inicializando o parâmetro da órbita.
const raio_ven = 6052;
const ven_sol_dist = (esc_dist*(108200000 + 696340 + 6052)/(149600000 + 696340 + 6378)); // 43.47 = Distância entre os centros de Vênus e Sol.

// Dados da Terra.
let orbita_terra = 0; // Inicializando o parâmetro da órbita.
const raio_terra = 6378;
const terra_sol_dist = (esc_dist*(149600000 + 696340 + 6378)/(149600000 + 696340 + 6378)); // 60 = Distância entre os centros da Terra e Sol.

// Dados da Lua.
let orbita_lua = 0; // Inicializando o parâmetro da órbita.
const raio_lua = 1737.4;
const lua_sol_dist = (esc_dist*(149600000 + 696340 + 6378)/(149600000 + 696340 + 6378)); // 60 = Fixando o centro da Lua com o da Terra (concêntrico).

// Dados de Marte.
let orbita_mar = 0; // Inicializando o parâmetro da órbita.
const raio_mar = 3396;
const mar_sol_dist = (esc_dist*(228000000 + 696340 + 3396)/(149600000 + 696340 + 6378)); // 91.29 = Distância entre os centros de Marte e Sol.

// Dados de Júpiter.
let orbita_jup = 0; // Inicializando o parâmetro da órbita.
const raio_jup = 71492; // Inicializando o parâmetro da órbita.
const jup_sol_dist = (esc_dist*(778500000 + 696340 + 71492)/(149600000 + 696340 + 6378)); // 311.08 = Distância entre os centros de Júpiter e Sol.

// Dados de Saturno.
let orbita_sat = 0; // Inicializando o parâmetro da órbita.
const raio_sat = 60268;
const sat_sol_dist = (esc_dist*(1432000000 + 696340 + 60268)/(149600000 + 696340 + 6378)); // 571.95 = Distância entre os centros de Saturno e Sol.

// Dados de Urano.
let orbita_ura = 0; // Inicializando o parâmetro da órbita.
const raio_ura = 25559;
const ura_sol_dist = (esc_dist*(2867000000 + 696340 + 25559)/(149600000 + 696340 + 6378)); // 1144.80 = Distância entre os centros de Urano e Sol.

// Dados de Netuno.
let orbita_net = 0; // Inicializando o parâmetro da órbita.
const raio_net = 24764;
const net_sol_dist = (esc_dist*(4515000000 + 696340 + 24764)/(149600000 + 696340 + 6378)); // 1802.67 = Distância entre os centros de Netuno e Sol.

// Dados de Plutão.
let orbita_plu = 0; // Inicializando o parâmetro da órbita.
const raio_plu = 1188;
const plu_sol_dist = (esc_dist*(5906400000 + 696340 + 1188)/(149600000 + 696340 + 6378)); // 2358.11 = Distância entre os centros de Plutão e Sol.

//Construção do Sol.
const geo_sol = new THREE.SphereGeometry(15, 32, 32);
const material_sol = new THREE.MeshBasicMaterial({color:0xffe341});
const sol = new THREE.Mesh(geo_sol, material_sol);
scene.add(sol);

// Eixo x, y e z.
const axesHelper = new THREE.AxesHelper(15);
//scene.add( axesHelper );

// Grid de apoio.
function createGrid(size = 1300, divisions = 1000) {
    const gridHelper = new THREE.GridHelper(size, divisions);
    return gridHelper;
}

// Construção de Mercúrio.
function mercurioTranslacao() {
    const merc_loader = new THREE.TextureLoader().load('textures/merc_tex.jpg');
    const geo_merc = new THREE.SphereGeometry(raio_merc / raio_terra, 32, 32); // Proporção Mercúrio / Terra = 0.38
    const material_merc = new THREE.MeshBasicMaterial({map: merc_loader});
    const mercurio = new THREE.Mesh(geo_merc, material_merc);
    mercurio.position.set(0, 0, 0);
    scene.add(mercurio);
    return mercurio;
}

// Construção de Vênus.
function venusTranslacao() {
    const ven_loader = new THREE.TextureLoader().load('textures/ven_tex.jpg');
    const geo_ven = new THREE.SphereGeometry(raio_ven / raio_terra, 32, 32); // Proporção Vênus / Terra = 0.95
    const material_ven = new THREE.MeshBasicMaterial({map: ven_loader});
    const venus = new THREE.Mesh(geo_ven, material_ven);
    venus.position.set(0, 0, 0);
    scene.add(venus);
    return venus;
}

// Construção da Terra.
function terraTranslacao() {
    const terra_loader = new THREE.TextureLoader().load('textures/terra_tex.jpg');
    const geo_terra = new THREE.SphereGeometry(raio_terra / raio_terra, 32, 32); // Proporção Terra / Terra = 1
    const material_terra = new THREE.MeshBasicMaterial({map: terra_loader});
    const terra = new THREE.Mesh(geo_terra, material_terra);
    terra.position.set(0, 0, 0);
    scene.add(terra);
    return terra;
}

// Construção da Lua.
function luaTranslacao() {
    const lua_loader = new THREE.TextureLoader().load('textures/lua_tex.jpg');
    const geo_lua = new THREE.SphereGeometry(raio_lua / raio_terra, 32, 32); // Proporção Lua / Terra = 0.27
    const material_lua = new THREE.MeshBasicMaterial({map: lua_loader});
    const lua = new THREE.Mesh(geo_lua, material_lua);
    lua.position.set(0, 0, 0);
    scene.add(lua);
    return lua;
}

//Construção de Marte.
function marteTranslacao() {
    const mar_loader = new THREE.TextureLoader().load('textures/mar_tex.jpg');
    const geo_mar = new THREE.SphereGeometry(raio_mar / raio_terra, 32, 32); // Proporção Marte / Terra = 0.53
    const material_mar = new THREE.MeshBasicMaterial({map: mar_loader});
    const marte = new THREE.Mesh(geo_mar, material_mar);
    marte.position.set(0, 0, 0);
    scene.add(marte);
    return marte;
}

//Construção de Júpiter.
function jupiterTranslacao() {
    const jup_loader = new THREE.TextureLoader().load('textures/jup_tex.jpg');
    const geo_jup = new THREE.SphereGeometry(raio_jup / raio_terra, 32, 32); // Proporção Júpiter / Terra = 11.21
    const material_jup = new THREE.MeshBasicMaterial({map: jup_loader});
    const jupiter = new THREE.Mesh(geo_jup, material_jup);
    jupiter.position.set(0, 0, 0);
    scene.add(jupiter);
    return jupiter;
}

//Construção de Saturno.
function saturnoTranslacao() {
    const sat_loader = new THREE.TextureLoader().load('textures/sat_tex.jpg');
    const geo_sat = new THREE.SphereGeometry(raio_sat / raio_terra, 32, 32); // Proporção Saturno / Terra = 9.45
    const material_sat = new THREE.MeshBasicMaterial({map: sat_loader});
    const saturno = new THREE.Mesh(geo_sat, material_sat);
    saturno.position.set(0, 0, 0);
    scene.add(saturno);
    return saturno;
}

//Construção de Urano.
function uranoTranslacao() {
    const ura_loader = new THREE.TextureLoader().load('textures/ura_tex.jpg');
    const geo_ura = new THREE.SphereGeometry(raio_ura / raio_terra, 32, 32); // Proporção Urano / Terra = 4.01
    const material_ura = new THREE.MeshBasicMaterial({map: ura_loader});
    const urano = new THREE.Mesh(geo_ura, material_ura);
    urano.position.set(0, 0, 0);
    scene.add(urano);
    return urano;
}

//Construção de Netuno.
function netunoTranslacao() {
    const net_loader = new THREE.TextureLoader().load('textures/net_tex.jpg');
    const geo_net = new THREE.SphereGeometry(raio_net / raio_terra, 32, 32); // Proporção Netuno / Terra = 3.88
    const material_net = new THREE.MeshBasicMaterial({map: net_loader});
    const netuno = new THREE.Mesh(geo_net, material_net);
    netuno.position.set(0, 0, 0);
    scene.add(netuno);
    return netuno;
}

//Construção de Plutão.
function plutaoTranslacao() {
    const plu_loader = new THREE.TextureLoader().load('textures/plu_tex.png');
    const geo_plu = new THREE.SphereGeometry(raio_plu / raio_terra, 32, 32); // Proporção Plutão / Terra = 0.19
    const material_plu = new THREE.MeshBasicMaterial({map: plu_loader});
    const plutao = new THREE.Mesh(geo_plu, material_plu);
    plutao.position.set(0, 0, 0);
    scene.add(plutao);
    return plutao;
}

const mercurio = mercurioTranslacao();
const venus = venusTranslacao();
const terra = terraTranslacao();
const lua = luaTranslacao();
const marte = marteTranslacao();
const jupiter = jupiterTranslacao();
const saturno = saturnoTranslacao();
const urano = uranoTranslacao();
const netuno = netunoTranslacao();
const plutao = plutaoTranslacao();

//scene.add(createGrid());

// Função de animação dos objetos da cena.
function animate() {

    renderer.render(scene, camera);
    requestAnimationFrame(animate);

    tempo_terra += 0.001 * animationSpeed;

    orbita_merc = tempo_terra * (365.25 / 88); // Ano Terrestre (dias) / Órbita de Mercúrio (dias terrestre)
    // Parâmetros de transformação do Mercúrio.
    mercurio.position.x = Math.sin(orbita_merc) * merc_sol_dist;
    mercurio.position.z = Math.cos(orbita_merc) * merc_sol_dist;
    mercurio.rotation.y = tempo_terra * (365.25 / 58.65); // Ano Terrestre (dias) / Rotação de Mercúrio (dias terrestre)
    mercurio.rotation.x = 0; // Inclinação do eixo de rotação de Mercúrio (0.034°)

    orbita_ven = tempo_terra * (365.25 / 224.7); // Ano Terrestre (dias) / Órbita de Vênus (dias terrestre)
    // Parâmetros de transformação de Vênus.
    venus.position.x = Math.sin(orbita_ven) * ven_sol_dist;
    venus.position.z = Math.cos(orbita_ven) * ven_sol_dist;
    venus.rotation.y = tempo_terra * (365.25 / 243); // Ano Terrestre (dias) / Rotação de Vênus (dias terrestre)
    venus.rotation.x = 3.1; // Inclinação do eixo de rotação de Vênus (177.4°)

    // Parâmetros de transformação da Terra.
    orbita_terra = tempo_terra * (365.25 / 365.25); 
    terra.position.x = Math.sin(orbita_terra) * terra_sol_dist;
    terra.position.z = Math.cos(orbita_terra) * terra_sol_dist;
    terra.rotation.y = tempo_terra * (365.25 / 1); // Ano Terrestre (dias) / Rotação da Terra (dias terrestre)
    terra.rotation.x = 0.41; // Inclinação do eixo de rotação da Terra (23.5°)

    // Parâmetros de transformação da Lua.
    orbita_lua = tempo_terra * (365.25 / 365.25); 
    lua.position.x = Math.sin(orbita_lua) * lua_sol_dist + Math.cos(13.37*orbita_lua) * lua_sol_dist * 0.1;
    lua.position.z = Math.cos(orbita_lua) * lua_sol_dist + Math.sin(13.37*orbita_lua) * lua_sol_dist * 0.1;
    lua.rotation.y = tempo_terra * (365.25 / (-27.3)); // Ano Terrestre (dias) / Rotação da Lua (dias terrestre)
    lua.rotation.x = 0.12; // Inclinação do eixo de rotação da Lua (6.7°)

    // Parâmetros de transformação de Marte.
    orbita_mar = tempo_terra * (365.25 / 687); // Ano Terrestre (dias) / Órbita de Marte (dias terrestre)
    marte.position.x = Math.sin(orbita_mar) * mar_sol_dist;
    marte.position.z = Math.cos(orbita_mar) * mar_sol_dist; 
    marte.rotation.y = tempo_terra * (365.25 / 1.02); // Ano Terrestre (dias) / Rotação de Marte (dias terrestre)
    marte.rotation.x = 0.44; // Inclinação do eixo de rotação de Marte (25.2°)

    // Parâmetros de transformação de Júpiter.
    orbita_jup = tempo_terra * (365.25 / 4331); // Ano Terrestre (dias) / Órbita de Júpiter (dias terrestre)
    jupiter.position.x = Math.sin(orbita_jup) * jup_sol_dist;
    jupiter.position.z = Math.cos(orbita_jup) * jup_sol_dist; 
    jupiter.rotation.y = tempo_terra * (365.25 / 0.41); // Ano Terrestre (dias) / Rotação de Júpiter (dias terrestre)
    jupiter.rotation.x = 0.05; // Inclinação do eixo de rotação de Júpiter (3.1°)
    
    // Parâmetros de transformação de Saturno.
    orbita_sat = tempo_terra * (365.25 / 10747); // Ano Terrestre (dias) / Órbita de Saturno (dias terrestre)
    saturno.position.x = Math.sin(orbita_sat) * sat_sol_dist;
    saturno.position.z = Math.cos(orbita_sat) * sat_sol_dist; 
    saturno.rotation.y = tempo_terra * (365.25 / 0.45); // Ano Terrestre (dias) / Rotação de Saturno (dias terrestre)
    saturno.rotation.x = 0.47; // Inclinação do eixo de rotação Saturno (26.7°)

    // Parâmetros de transformação de Urano.
    orbita_ura = tempo_terra * (365.25 / 30589); // Ano Terrestre (dias) / Órbita de Urano (dias terrestre)
    urano.position.x = Math.sin(orbita_ura) * ura_sol_dist;
    urano.position.z = Math.cos(orbita_ura) * ura_sol_dist; 
    urano.rotation.y = tempo_terra * (365.25 / (-0.71)); // Ano Terrestre (dias) / Rotação de Urano (dias terrestre)
    urano.rotation.x = 1.71; // Inclinação do eixo de rotação de Urano (97.8°)

    // Parâmetros de transformação de Netuno.
    orbita_net = tempo_terra * (365.25 / 59800); // Ano Terrestre (dias) / Órbita de Netuno (dias terrestre)
    netuno.position.x = Math.sin(orbita_net) * net_sol_dist;
    netuno.position.z = Math.cos(orbita_net) * net_sol_dist; 
    netuno.rotation.y = tempo_terra * (365.25 / (0.67)); // Ano Terrestre (dias) / Rotação de Netuno (dias terrestre)
    netuno.rotation.x = 0.49; // Inclinação do eixo de rotação de Netuno (28.3°)

    // Parâmetros de transformação de Plutão.
    orbita_plu = tempo_terra * (365.25 / 90560); // Ano Terrestre (dias) / Órbita de Plutão (dias terrestre)
    plutao.position.x = Math.sin(orbita_plu) * plu_sol_dist;
    plutao.position.z = Math.cos(orbita_plu) * plu_sol_dist; 
    plutao.rotation.y = tempo_terra * (365.25 / (-6.39)); // Ano Terrestre (dias) / Rotação de Plutão (dias terrestre)
    plutao.rotation.x = 2.09; // Inclinação do eixo de rotação de Plutão (119.5°)

    controls.update();
}
animate();