//Construção do Sol.
export const geo_sol = new THREE.SphereGeometry(15, 32, 32);
export const material_sol = new THREE.MeshBasicMaterial({color:0xffe341});
export const sol = new THREE.Mesh(geo_sol, material_sol);