import { OrbitControls } from "https://esm.sh/three/addons/controls/OrbitControls.js";

// Criando a cena
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.set(0, 50, 0);
camera.lookAt(0, 0, 0);
const controls = new OrbitControls(camera, renderer.domElement);
document.body.appendChild(renderer.domElement);

let tempo_terra = 0;

let orbita_merc = 0;
const raio_merc = 2440;
const merc_sol_dist = 28;

let orbita_ven = 0;
const raio_ven = 6052;
const ven_sol_dist = 40;

let orbita_terra = 0;
const raio_terra = 6378;
const terra_sol_dist = 60;

let orbita_mar = 0;
const raio_mar = 3396;
const mar_sol_dist = 80;

let orbita_jup = 0;
const raio_jup = 71492;
const jup_sol_dist = 100;

let orbita_sat = 0;
const raio_sat = 60268;
const sat_sol_dist = 130;

let orbita_ura = 0;
const raio_ura = 25559;
const ura_sol_dist = 160;

let orbita_net = 0;
const raio_net = 24764;
const net_sol_dist = 180;

let orbita_plu = 0;
const raio_plu = 1188;
const plu_sol_dist = 200;

const animationSpeed = 0.5; // Velocidade de animação.

//Sol
const geo_sol = new THREE.SphereGeometry(20, 32, 32);
const material_sol = new THREE.MeshBasicMaterial({color:0xffe341});
const sol = new THREE.Mesh(geo_sol, material_sol);
scene.add(sol);

// Eixo x, y e z.
const axesHelper = new THREE.AxesHelper( 15 );
//scene.add( axesHelper );

// Grid de apoio.
function createGrid(size = 1300, divisions = 1000) {
    const gridHelper = new THREE.GridHelper(size, divisions);
    return gridHelper;
}

// Construção de Vênus.
function mercurioTranslacao() {
    //Mercúrio
    const merc_loader = new THREE.TextureLoader().load('textures/merc_tex.jpg');
    const geo_merc = new THREE.SphereGeometry(raio_merc / raio_terra, 32, 32);
    const material_merc = new THREE.MeshBasicMaterial({map: merc_loader});
    const mercurio = new THREE.Mesh(geo_merc, material_merc);
    mercurio.position.set(0, 0, 0);
    scene.add(mercurio);
    return mercurio;
}

// Construção de Vênus.
function venusTranslacao() {
    const ven_loader = new THREE.TextureLoader().load('textures/ven_tex.jpg');
    const geo_ven = new THREE.SphereGeometry(raio_ven / raio_terra, 32, 32);
    const material_ven = new THREE.MeshBasicMaterial({map: ven_loader});
    const venus = new THREE.Mesh(geo_ven, material_ven);
    venus.position.set(0, 0, 0);
    scene.add(venus);
    return venus;
}

function terraTranslacao() {
    const terra_loader = new THREE.TextureLoader().load('textures/terra_tex.jpg');
    const geo_terra = new THREE.SphereGeometry(raio_terra / raio_terra, 32, 32);
    const material_terra = new THREE.MeshBasicMaterial({map: terra_loader});
    const terra = new THREE.Mesh(geo_terra, material_terra);
    terra.position.set(0, 0, 0);
    scene.add(terra);
    return terra;
}

function marteTranslacao() {
    const mar_loader = new THREE.TextureLoader().load('textures/mar_tex.jpg');
    const geo_mar = new THREE.SphereGeometry(raio_mar / raio_terra, 32, 32);
    const material_mar = new THREE.MeshBasicMaterial({map: mar_loader});
    const marte = new THREE.Mesh(geo_mar, material_mar);
    marte.position.set(0, 0, 0);
    scene.add(marte);
    return marte;
}

function jupiterTranslacao() {
    const jup_loader = new THREE.TextureLoader().load('textures/jup_tex.jpg');
    const geo_jup = new THREE.SphereGeometry(raio_jup / raio_terra, 32, 32);
    const material_jup = new THREE.MeshBasicMaterial({map: jup_loader});
    const jupiter = new THREE.Mesh(geo_jup, material_jup);
    jupiter.position.set(0, 0, 0);
    scene.add(jupiter);
    return jupiter;
}

function saturnoTranslacao() {
    const sat_loader = new THREE.TextureLoader().load('textures/sat_tex.jpg');
    const geo_sat = new THREE.SphereGeometry(raio_sat / raio_terra, 32, 32);
    const material_sat = new THREE.MeshBasicMaterial({map: sat_loader});
    const saturno = new THREE.Mesh(geo_sat, material_sat);
    saturno.position.set(0, 0, 0);
    scene.add(saturno);
    return saturno;
}

function uranoTranslacao() {
    const ura_loader = new THREE.TextureLoader().load('textures/ura_tex.jpg');
    const geo_ura = new THREE.SphereGeometry(raio_ura / raio_terra, 32, 32);
    const material_ura = new THREE.MeshBasicMaterial({map: ura_loader});
    const urano = new THREE.Mesh(geo_ura, material_ura);
    urano.position.set(0, 0, 0);
    scene.add(urano);
    return urano;
}

function netunoTranslacao() {
    const net_loader = new THREE.TextureLoader().load('textures/net_tex.jpg');
    const geo_net = new THREE.SphereGeometry(raio_net / raio_terra, 32, 32);
    const material_net = new THREE.MeshBasicMaterial({map: net_loader});
    const netuno = new THREE.Mesh(geo_net, material_net);
    netuno.position.set(0, 0, 0);
    scene.add(netuno);
    return netuno;
}

function plutaoTranslacao() {
    const plu_loader = new THREE.TextureLoader().load('textures/plu_tex.png');
    const geo_plu = new THREE.SphereGeometry(raio_plu / raio_terra, 32, 32);
    const material_plu = new THREE.MeshBasicMaterial({map: plu_loader});
    const plutao = new THREE.Mesh(geo_plu, material_plu);
    plutao.position.set(0, 0, 0);
    scene.add(plutao);
    return plutao;
}

const mercurio = mercurioTranslacao();
const venus = venusTranslacao();
const terra = terraTranslacao();
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
    mercurio.rotation.y = tempo_terra * (365 / 58.65);

    orbita_ven = tempo_terra * (365.25 / 224.7); // Ano Terrestre (dias) / Órbita de Vênus (dias terrestre)
    // Parâmetros de transformação de Vênus.
    venus.position.x = Math.sin(orbita_ven) * ven_sol_dist;
    venus.position.z = Math.cos(orbita_ven) * ven_sol_dist;
    venus.rotation.y = tempo_terra * (365.25 / 243); // Ano Terrestre (dias) / Rotação de Mercúrio (dias terrestre)

    // Parâmetros de transformação da Terra.
    orbita_terra = tempo_terra * (365 / 365); 
    terra.position.x = Math.sin(orbita_terra) * terra_sol_dist;
    terra.position.z = Math.cos(orbita_terra) * terra_sol_dist;
    terra.rotation.y = tempo_terra * (365 / 1); // Ano Terrestre (dias) / Rotação de Mercúrio (dias terrestre)

    // Parâmetros de transformação de Marte.
    orbita_mar = tempo_terra * (365 / 687); // Ano Terrestre (dias) / Órbita de Marte (dias terrestre)
    marte.position.x = Math.sin(orbita_mar) * mar_sol_dist;
    marte.position.z = Math.cos(orbita_mar) * mar_sol_dist; 
    marte.rotation.y = tempo_terra * (365 / 1.02); // Ano Terrestre (dias) / Rotação de Marte (dias terrestre)

    // Parâmetros de transformação de Júpiter.
    orbita_jup = tempo_terra * (365 / 4331); // Ano Terrestre (dias) / Órbita de Júpiter (dias terrestre)
    jupiter.position.x = Math.sin(orbita_jup) * jup_sol_dist;
    jupiter.position.z = Math.cos(orbita_jup) * jup_sol_dist; 
    jupiter.rotation.y = tempo_terra * (365 / 0.43); // Ano Terrestre (dias) / Rotação de Júpiter (dias terrestre)
    
    // Parâmetros de transformação de Saturno.
    orbita_sat = tempo_terra * (365 / 10747); // Ano Terrestre (dias) / Órbita de Saturno (dias terrestre)
    saturno.position.x = Math.sin(orbita_sat) * sat_sol_dist;
    saturno.position.z = Math.cos(orbita_sat) * sat_sol_dist; 
    saturno.rotation.y = tempo_terra * (365 / 1); // Ano Terrestre (dias) / Rotação de Saturno (dias terrestre)

    // Parâmetros de transformação de Urano.
    orbita_ura = tempo_terra * (365 / 30589); // Ano Terrestre (dias) / Órbita de Urano (dias terrestre)
    urano.position.x = Math.sin(orbita_ura) * ura_sol_dist;
    urano.position.z = Math.cos(orbita_ura) * ura_sol_dist; 
    urano.rotation.y = tempo_terra * (365 / (-0.71)); // Ano Terrestre (dias) / Rotação de Urano (dias terrestre)

    // Parâmetros de transformação de Netuno.
    orbita_net = tempo_terra * (365 / 59800); // Ano Terrestre (dias) / Órbita de Netuno (dias terrestre)
    netuno.position.x = Math.sin(orbita_net) * net_sol_dist;
    netuno.position.z = Math.cos(orbita_net) * net_sol_dist; 
    netuno.rotation.y = tempo_terra * (365 / (-0.67)); // Ano Terrestre (dias) / Rotação de Netuno (dias terrestre)

    // Parâmetros de transformação de Plutão.
    orbita_plu = tempo_terra * (365 / 90560); // Ano Terrestre (dias) / Órbita de Plutão (dias terrestre)
    plutao.position.x = Math.sin(orbita_plu) * plu_sol_dist;
    plutao.position.z = Math.cos(orbita_plu) * plu_sol_dist; 
    plutao.rotation.y = tempo_terra * (365 / (-6.39)); // Ano Terrestre (dias) / Rotação de Plutão (dias terrestre)

    controls.update();
}
animate();