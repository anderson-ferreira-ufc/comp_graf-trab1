import {esc_dist} from './sol.mjs';
import {raio_terra} from './terra.mjs';
import {scene} from './cena.mjs';

// Dados da Lua.
export const raio_lua = 1737.4;
export const lua_sol_dist = (esc_dist*(149600000 + 696340 + 6378)/(149600000 + 696340 + 6378)); // 60 = Fixando o centro da Lua com o da Terra (concêntrico).

// Construção de Lua.
export function luaTranslacao() {
    const lua_loader = new THREE.TextureLoader().load('textures/lua_tex.jpg');
    const geo_lua = new THREE.SphereGeometry(raio_lua / raio_terra, 32, 32); // Proporção Lua / Terra = 0.27
    const material_lua = new THREE.MeshBasicMaterial({map: lua_loader});
    const lua = new THREE.Mesh(geo_lua, material_lua);
    lua.position.set(0, 0, 0);
    scene.add(lua);
    return lua;
}

// Construção da Lua.
export function luaTranslacao() {
    const lua_loader = new THREE.TextureLoader().load('textures/lua_tex.jpg');
    const geo_lua = new THREE.SphereGeometry(raio_lua / raio_terra, 32, 32); // Proporção Lua / Terra = 0.27
    const material_lua = new THREE.MeshBasicMaterial({map: lua_loader});
    const lua = new THREE.Mesh(geo_lua, material_lua);
    lua.position.set(0, 0, 0);
    scene.add(lua);
    return lua;
}