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
let raio_merc = 2440;
const merc_sol_dist = 28;

let orbita_ven = 0;
let raio_ven = 6052;
const ven_sol_dist = 40;

let orbita_terra = 0;
let raio_terra = 6378;
const terra_sol_dist = 60;

let orbita_mar = 0;
let raio_mar = 3396;
const mar_sol_dist = 80;

let orbita_jup = 0;
let raio_jup = 71492;
const jup_sol_dist = 100;

let orbita_sat = 0;
let raio_sat = 60268;
const sat_sol_dist = 130;


//Sol
const geo_sol = new THREE.SphereGeometry(20, 32, 32);
const material_sol = new THREE.MeshBasicMaterial({color:0xffe341});
const sol = new THREE.Mesh(geo_sol, material_sol);
scene.add(sol);

// Eixo x, y e z.
const axesHelper = new THREE.AxesHelper( 15 );
scene.add( axesHelper );

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

const mercurio = mercurioTranslacao();
const venus = venusTranslacao();
const terra = terraTranslacao();
const marte = marteTranslacao();
const jupiter = jupiterTranslacao();
const saturno = saturnoTranslacao();

const animationSpeed = 1; // Velocidade de animação.

scene.add(createGrid());

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
    orbita_sat = tempo_terra * (365 / 10747); // Ano Terrestre (dias) / Órbita de Júpiter (dias terrestre)
    saturno.position.x = Math.sin(orbita_sat) * sat_sol_dist;
    saturno.position.z = Math.cos(orbita_sat) * sat_sol_dist; 
    saturno.rotation.y = tempo_terra * (365 / 1); // Ano Terrestre (dias) / Rotação de Júpiter (dias terrestre)

    controls.update();
}
animate();