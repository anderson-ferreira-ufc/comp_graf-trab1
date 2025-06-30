import { merc_sol_dist, mercurioTranslacao } from "./mercurio.mjs";
import { ven_sol_dist, venusTranslacao } from "./venus.mjs";
import {
  terra_sol_dist,
  terraTranslacao,
  lua_sol_dist,
  luaTranslacao,
} from "./terra.mjs";
import { mar_sol_dist, marteTranslacao } from "./marte.mjs";
import { jup_sol_dist, jupiterTranslacao } from "./jupiter.mjs";
import {
  sat_sol_dist,
  saturnoTranslacao,
  saturnoAnelTranslacao,
} from "./saturno.mjs";
import { ura_sol_dist, uranoTranslacao } from "./urano.mjs";
import { net_sol_dist, netunoTranslacao } from "./netuno.mjs";
import { plu_sol_dist, plutaoTranslacao } from "./plutao.mjs";
import { OrbitControls } from "https://esm.sh/three/addons/controls/OrbitControls.js";
//import { FirstPersonControls } from "https://esm.sh/three/addons/controls/FirstPersonControls.js";
import { scene, camera, renderer } from "./cena.mjs";
import { esc_dist, usr_inp, solProporcao } from "./sol.mjs";
import { trajetoriaMercurio } from "./mercurio.mjs";
import { trajetoriaVenus } from "./venus.mjs";
import { trajetoriaTerra, trajetoriaLua } from "./terra.mjs";
import { trajetoriaMarte } from "./marte.mjs";
import { trajetoriaJupiter } from "./jupiter.mjs";
import { trajetoriaSaturno } from "./saturno.mjs";
import { trajetoriaUrano } from "./urano.mjs";
import { trajetoriaNetuno } from "./netuno.mjs";
import { trajetoriaPlutao } from "./plutao.mjs";
import { universo } from "./universo.mjs";
// Importando as trajetórias dos planetas.
solProporcao(usr_inp);
universo();

let traj_mer,
  traj_ven,
  traj_terra,
  traj_lua,
  traj_mar,
  traj_jup,
  traj_sat,
  traj_ura,
  traj_net,
  traj_plu;

let animationSpeed = 1; // Velocidade de animação.
let tempo_terra = 0; // Variável utilizada como progressão de tempo.
let aux = 1; // variavel auxiliar de velocidade

renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.set(0, 50, 0);
camera.lookAt(0, 0, 0);
document.body.appendChild(renderer.domElement);
const controls = new OrbitControls(camera, renderer.domElement);
//fpcontrols.enabled = true;
//fpcontrols.verticalLook = false;
//scene.background = bg_loader.load('./textures/uni_tex1.png');

// Eixo x, y e z.
const axesHelper = new THREE.AxesHelper(15);
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
const satAnel = saturnoAnelTranslacao();
const urano = uranoTranslacao();
const netuno = netunoTranslacao();
const plutao = plutaoTranslacao()

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
  //camera.position.set(Math.sin(orbita_merc) * merc_sol_dist - 1.5*Math.cos(orbita_merc + Math.PI/2), 0, Math.cos(orbita_merc) * merc_sol_dist + 1.5*Math.sin(orbita_merc + Math.PI/2));

  let orbita_ven = tempo_terra * (365.25 / 224.7); // Ano Terrestre (dias) / Órbita de Vênus (dias terrestre)
  // Parâmetros de transformação de Vênus.
  venus.position.x = Math.sin(orbita_ven) * ven_sol_dist;
  venus.position.z = Math.cos(orbita_ven) * ven_sol_dist;
  venus.rotation.y = tempo_terra * (365.25 / 243); // Ano Terrestre (dias) / Rotação de Vênus (dias terrestre)
  venus.rotation.x = 3.1; // Inclinação do eixo de rotação de Vênus (177.4°)
  //camera.position.set(Math.sin(orbita_ven) * ven_sol_dist - 5*Math.cos(orbita_ven + Math.PI/2), 0, Math.cos(orbita_ven) * ven_sol_dist + 5*Math.sin(orbita_ven + Math.PI/2));

  // Parâmetros de transformação da Terra.
  let orbita_terra = tempo_terra * (365.25 / 365.25);
  terra.position.x = Math.sin(orbita_terra) * terra_sol_dist;
  terra.position.z = Math.cos(orbita_terra) * terra_sol_dist;
  terra.rotation.y = tempo_terra * (365.25 / 1); // Ano Terrestre (dias) / Rotação da Terra (dias terrestre)
  terra.rotation.x = 0.41; // Inclinação do eixo de rotação da Terra (23.5°)
  //camera.position.set(Math.sin(orbita_terra) * terra_sol_dist - 10*Math.cos(orbita_terra + Math.PI/2), 0, Math.cos(orbita_terra) * terra_sol_dist + 10*Math.sin(orbita_terra + Math.PI/2));

  // Parâmetros de transformação da Lua.
  let orbita_lua = tempo_terra * (365.25 / 365.25);
  lua.position.x =
    Math.sin(orbita_lua) * lua_sol_dist +
    Math.cos(13.37 * orbita_lua) * lua_sol_dist * 0.1;
  lua.position.z =
    Math.cos(orbita_lua) * lua_sol_dist +
    Math.sin(13.37 * orbita_lua) * lua_sol_dist * 0.1;
  lua.rotation.y = Math.PI + tempo_terra * (365.25 / -27.3); // Ano Terrestre (dias) / Rotação da Lua (dias terrestre), com a face visível da Lua pela Terra.
  lua.rotation.x = 0.12; // Inclinação do eixo de rotação da Lua (6.7°)

  // Parâmetros de transformação de Marte.
  let orbita_mar = tempo_terra * (365.25 / 687); // Ano Terrestre (dias) / Órbita de Marte (dias terrestre)
  marte.position.x = Math.sin(orbita_mar) * mar_sol_dist;
  marte.position.z = Math.cos(orbita_mar) * mar_sol_dist;
  marte.rotation.y = tempo_terra * (365.25 / 1.02); // Ano Terrestre (dias) / Rotação de Marte (dias terrestre)
  marte.rotation.x = 0.44; // Inclinação do eixo de rotação de Marte (25.2°)
  //camera.position.set(Math.sin(orbita_mar) * mar_sol_dist - 2*Math.cos(orbita_mar + Math.PI/2), 0, Math.cos(orbita_mar) * mar_sol_dist + 2*Math.sin(orbita_mar + Math.PI/2));

  // Parâmetros de transformação de Júpiter.
  let orbita_jup = tempo_terra * (365.25 / 4331); // Ano Terrestre (dias) / Órbita de Júpiter (dias terrestre)
  jupiter.position.x = Math.sin(orbita_jup) * jup_sol_dist;
  jupiter.position.z = Math.cos(orbita_jup) * jup_sol_dist;
  jupiter.rotation.y = tempo_terra * (365.25 / 0.41); // Ano Terrestre (dias) / Rotação de Júpiter (dias terrestre)
  jupiter.rotation.x = 0.05; // Inclinação do eixo de rotação de Júpiter (3.1°)
  //camera.position.set(Math.sin(orbita_jup) * jup_sol_dist - 30*Math.cos(orbita_jup + Math.PI/2), 0, Math.cos(orbita_jup) * jup_sol_dist + 30*Math.sin(orbita_jup + Math.PI/2));

  // Parâmetros de transformação de Saturno.
  let orbita_sat = tempo_terra * (365.25 / 10747); // Ano Terrestre (dias) / Órbita de Saturno (dias terrestre)
  saturno.position.x = Math.sin(orbita_sat) * sat_sol_dist;
  saturno.position.z = Math.cos(orbita_sat) * sat_sol_dist;
  saturno.rotation.y = tempo_terra * (365.25 / 0.45); // Ano Terrestre (dias) / Rotação de Saturno (dias terrestre)
  saturno.rotation.x = 0.47; // Inclinação do eixo de rotação Saturno (26.7°)
  //camera.position.set(Math.sin(orbita_sat) * sat_sol_dist - 40*Math.cos(orbita_sat + Math.PI/2), 0, Math.cos(orbita_sat) * sat_sol_dist + 40*Math.sin(orbita_sat + Math.PI/2));

  // Parâmetros de transformação de Saturno.
  let orbita_satAnel = tempo_terra * (365.25 / 10747); // Ano Terrestre (dias) / Órbita de Saturno (dias terrestre)
  satAnel.position.x = Math.sin(orbita_satAnel) * sat_sol_dist;
  satAnel.position.z = Math.cos(orbita_satAnel) * sat_sol_dist;
  satAnel.rotation.x = 2.04; // Inclinação do eixo de rotação Saturno (206.7°)

  // Parâmetros de transformação de Urano.
  let orbita_ura = tempo_terra * (365.25 / 30589); // Ano Terrestre (dias) / Órbita de Urano (dias terrestre)
  urano.position.x = Math.sin(orbita_ura) * ura_sol_dist;
  urano.position.z = Math.cos(orbita_ura) * ura_sol_dist;
  urano.rotation.y = tempo_terra * (365.25 / -0.71); // Ano Terrestre (dias) / Rotação de Urano (dias terrestre)
  urano.rotation.x = 1.71; // Inclinação do eixo de rotação de Urano (97.8°)
  //camera.position.set(Math.sin(orbita_ura) * ura_sol_dist - 15*Math.cos(orbita_ura + Math.PI/2), 0, Math.cos(orbita_ura) * ura_sol_dist + 15*Math.sin(orbita_ura + Math.PI/2));

  // Parâmetros de transformação de Netuno.
  let orbita_net = tempo_terra * (365.25 / 59800); // Ano Terrestre (dias) / Órbita de Netuno (dias terrestre)
  netuno.position.x = Math.sin(orbita_net) * net_sol_dist;
  netuno.position.z = Math.cos(orbita_net) * net_sol_dist;
  netuno.rotation.y = tempo_terra * (365.25 / 0.67); // Ano Terrestre (dias) / Rotação de Netuno (dias terrestre)
  netuno.rotation.x = 0.49; // Inclinação do eixo de rotação de Netuno (28.3°)
  //camera.position.set(Math.sin(orbita_net) * net_sol_dist - 15*Math.cos(orbita_net + Math.PI/2), 0, Math.cos(orbita_net) * net_sol_dist + 15*Math.sin(orbita_net + Math.PI/2));

  // Parâmetros de transformação de Plutão.
  let orbita_plu = tempo_terra * (365.25 / 90560); // Ano Terrestre (dias) / Órbita de Plutão (dias terrestre)
  plutao.position.x = Math.sin(orbita_plu) * plu_sol_dist;
  plutao.position.z = Math.cos(orbita_plu) * plu_sol_dist;
  plutao.rotation.y = tempo_terra * (365.25 / -6.39); // Ano Terrestre (dias) / Rotação de Plutão (dias terrestre)
  plutao.rotation.x = 2.09; // Inclinação do eixo de rotação de Plutão (119.5°)
  //camera.position.set(Math.sin(orbita_plu) * plu_sol_dist - 1*Math.cos(orbita_plu + Math.PI/2), 0, Math.cos(orbita_plu) * plu_sol_dist + 1*Math.sin(orbita_plu + Math.PI/2));
  controls.update();
}

//event listener para apertar botões
// ajeitar multiplicação que ocorre
window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "+":
      if (animationSpeed < 9.9) {
        animationSpeed += 0.1; // aumenta velocidade
        aux = animationSpeed;
        //document.getElementById("velocidade").innerHTML = aux; // mostrar na tela velocidade atual
        document.getElementById("velocidade").innerHTML = aux.toFixed(1);
      }
      break;
    case "-":
      if (animationSpeed > 0.1) {
        // evita velocidade menor que 0
        animationSpeed -= 0.1; // diminui velocidade
        aux = animationSpeed;
        //document.getElementById("velocidade").innerHTML = aux;
        document.getElementById("velocidade").innerHTML = aux.toFixed(1);
      }
      break;
    case " ":
      animationSpeed = 5; // velocidade volta ao inicial
      aux = 1;
      //document.getElementById("velocidade").innerHTML = aux;
      document.getElementById("velocidade").innerHTML =
        animationSpeed.toFixed(1);
      break;
    case "p":
      if (animationSpeed == 0) {
        // se ja estiver pausado despausa e volta ao inicio
        animationSpeed = 1; // despausar
        //aux = 1;
      } else {
        animationSpeed = 0; // pausa
        aux = 0;
      }
      //document.getElementById("velocidade").innerHTML = aux;
      document.getElementById("velocidade").innerHTML =
        animationSpeed.toFixed(1);
      break;
  }
});
document.getElementById("traj_merc").addEventListener("change", function (e) {
  if (e.target.checked) {
    traj_mer = trajetoriaMercurio();
  } else {
    scene.remove(traj_mer);
  }
});

document.getElementById("traj_ven").addEventListener("change", function (e) {
  if (e.target.checked) {
    traj_ven = trajetoriaVenus();
  } else {
    scene.remove(traj_ven);
  }
});

document.getElementById("traj_terra").addEventListener("change", function (e) {
  if (e.target.checked) {
    traj_terra = trajetoriaTerra();
  } else {
    scene.remove(traj_terra);
  }
});

document.getElementById("traj_lua").addEventListener("change", function (e) {
  if (e.target.checked) {
    traj_lua = trajetoriaLua();
  } else {
    scene.remove(traj_lua);
  }
});

document.getElementById("traj_mar").addEventListener("change", function (e) {
  if (e.target.checked) {
    traj_mar = trajetoriaMarte();
  } else {
    scene.remove(traj_mar);
  }
});

document.getElementById("traj_jup").addEventListener("change", function (e) {
  if (e.target.checked) {
    traj_jup = trajetoriaJupiter();
  } else {
    scene.remove(traj_jup);
  }
});

document.getElementById("traj_sat").addEventListener("change", function (e) {
  if (e.target.checked) {
    traj_sat = trajetoriaSaturno();
  } else {
    scene.remove(traj_sat);
  }
});

document.getElementById("traj_ura").addEventListener("change", function (e) {
  if (e.target.checked) {
    traj_ura = trajetoriaUrano();
  } else {
    scene.remove(traj_ura);
  }
});

document.getElementById("traj_net").addEventListener("change", function (e) {
  if (e.target.checked) {
    traj_net = trajetoriaNetuno();
  } else {
    scene.remove(traj_net);
  }
});

document.getElementById("traj_plu").addEventListener("change", function (e) {
  if (e.target.checked) {
    traj_plu = trajetoriaPlutao();
  } else {
    scene.remove(traj_plu);
  }
});
/*
document.getElementById("traj_todos").addEventListener("change", function (e) {
  if (e.target.checked) {
    traj_mer = trajetoriaMercurio();
    traj_ven = trajetoriaVenus();
    traj_terra = trajetoriaTerra();
    traj_lua = trajetoriaLua();
    traj_mar = trajetoriaMarte();
    traj_jup = trajetoriaJupiter();
    traj_sat = trajetoriaSaturno();
    traj_ura = trajetoriaUrano();
    traj_net = trajetoriaNetuno();
    traj_plu = trajetoriaPlutao();
  } else {
    scene.remove(traj_mer);
    scene.remove(traj_ven);
    scene.remove(traj_terra);
    scene.remove(traj_lua);
    scene.remove(traj_mar);
    scene.remove(traj_jup);
    scene.remove(traj_sat);
    scene.remove(traj_ura);
    scene.remove(traj_net);
    scene.remove(traj_plu);
  }
});*/
animate();
