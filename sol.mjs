//Construção do Sol.
let percent_escala_sol = 1; //Porcentagem da escala real do raio do Sol (deve ir d 0.2 à 1)

const raio_sol = 109.2 * percent_escala_sol; // Proporção do raio do Sol em relação ao raio da Terra.

export const geo_sol = new THREE.SphereGeometry(raio_sol, 32, 32);
export const material_sol = new THREE.MeshBasicMaterial({color:0xffe341});
export const sol = new THREE.Mesh(geo_sol, material_sol);

export const esc_dist = raio_sol / 0.2; // Valor arbiitrário base que será utilizado em cálculos para preservar a proporção real da distância entre os astros e o Sol.