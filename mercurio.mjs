import {esc_dist} from './sol.mjs';
// Dados de Mercúrio.
export let orbita_merc = 0; // Inicializando o parâmetro da órbita.
export const raio_merc = 2440;
export const merc_sol_dist = (esc_dist*(57900000 + 696340 + 2440)/(149600000 + 696340 + 6378)); // 23.39 = Distância entre os centros de Mercúrio e Sol.