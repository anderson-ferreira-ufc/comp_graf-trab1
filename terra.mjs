import { esc_dist } from "./sol.mjs";
import { scene } from "./cena.mjs";
// Dados da Terra.

// // Inicializando o parâmetro da órbita.
export const raio_terra = 6378;
export const terra_sol_dist =
  (esc_dist * (149600000 + 696340 + 6378)) / (149600000 + 696340 + 6378); // Distância entre os centros da Terra e Sol.

// Construção da Terra.
export function terraTranslacao() {
  const terra_loader = new THREE.TextureLoader().load("textures/terra_tex.jpg");
  const geo_terra = new THREE.SphereGeometry(raio_terra / raio_terra, 32, 32); // Proporção Terra / Terra = 1
  const material_terra = new THREE.MeshPhongMaterial({ map: terra_loader });
  const terra = new THREE.Mesh(geo_terra, material_terra);
  terra.position.set(0, 0, 0);

  terra.castShadow = true;
  terra.receiveShadow = true;

  scene.add(terra);
  return terra;
}

// Dados da Lua.
export const raio_lua = 1737.4;
export const lua_sol_dist =
  (esc_dist * (149600000 + 696340 + 6378)) / (149600000 + 696340 + 6378); // Fixando o centro da Lua com o da Terra (concêntrico).

// Construção da Lua.
export function luaTranslacao() {
  const lua_loader = new THREE.TextureLoader().load("textures/lua_tex.jpg");
  const geo_lua = new THREE.SphereGeometry(raio_lua / raio_terra, 32, 32); // Proporção Lua / Terra = 0.27
  const material_lua = new THREE.MeshPhongMaterial({ map: lua_loader });
  const lua = new THREE.Mesh(geo_lua, material_lua);
  lua.position.set(0, 0, 0);

  lua.castShadow = true;
  lua.receiveShadow = true;

  scene.add(lua);
  return lua;
}

export function trajetoriaTerra() {
  const curve = new THREE.EllipseCurve(
    0,
    0, // x e y do centro
    terra_sol_dist,
    terra_sol_dist, // raioX e raioY
    0,
    2 * Math.PI, // ângulo inicial e final
    false, // sentido horário (false = anti-horário)
    0 // rotação da elipse
  );

  const points2D = curve.getPoints(100);

  const points3D = points2D.map((p) => new THREE.Vector3(p.x, 0, p.y));

  const geometry = new THREE.BufferGeometry().setFromPoints(points3D);
  const material = new THREE.LineBasicMaterial({ color: 0xffc100 });

  const ellipse = new THREE.Line(geometry, material);
  scene.add(ellipse);
  return ellipse;
}

export function trajetoriaLua() {
  const curve = new THREE.EllipseCurve(
    0,
    0, // x e y do centro
    raio_lua,
    raio_lua, // raioX e raioY
    0,
    2 * Math.PI, // ângulo inicial e final
    false, // sentido horário (false = anti-horário)
    0 // rotação da elipse
  );

  const points2D = curve.getPoints(100);

  const points3D = points2D.map((p) => new THREE.Vector3(p.x, 0, p.y));

  const geometry = new THREE.BufferGeometry().setFromPoints(points3D);
  const material = new THREE.LineBasicMaterial({ color: 0xfffff0 });

  const ellipse = new THREE.Line(geometry, material);
  
  scene.add(ellipse);

  return ellipse;
}
