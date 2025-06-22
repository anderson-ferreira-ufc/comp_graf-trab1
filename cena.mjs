export const scene = new THREE.Scene();
export const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100000);
export const renderer = new THREE.WebGLRenderer({ antialias: true });