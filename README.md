# Sistema Solar
O projeto aqui presente tem como objetivo simular graficamente o comportamento dos corpos
celestes mais notórios do Sistema Solar, abrangendo aspectos como órbita, rotação, inclinação,
etc., com todos os dados extraídos da NASA. Foi utilizada a ferramenta Three JS, uma biblioteca
JavasCript que trabalha com o framework Node.JS.

## 1 Metodologia
A equipe decidiu representar fielmente o funcionamento do Sistema Solar, com base em informações
extraídos do site da NASA. As proporções de tamanho, órbita em torno do Sol, e rotação dos planetas estão 
em escala real, com exceção das distância destes em relação ao Sol, estando em escala reduzida,
porém, ainda preservando a proporção das distâncias entre si. Isso foi adotado para facilitar a
visualização dos objeto na cena, pois em escala realista, impossibilitaria a visão geral do sistema,
(a escala de distância poderia variar na casa dos milhares em relação ao diâmetro da Terra).
	
A tabela abaixo diz respeito as informações relacionadas aos planetas, que envolve o raio, período de translação,
duração da rotação, distância do Sol e inclinação orbital.

| Corpo celeste 	| Raio (Km) 	| Translação (dias terrestres) | Rotação (dias terrestres) | Distância do Sol (Gigametro) | Inclinação do eixo orbital (°)|
|-----------------------|---------------|------------------------------|---------------------------|------------------------------|-------------------------------|
| Sol			| 696 340	|			       |			   | 				  | |
| Mercúrio		| 2440		| 88			       | 58.65			   | 57.9                         | 0.034 |
| Vênus			| 6052		| 224.7			       | 243			   | 108.2                        | 177.4 |
| Terra			| 6378		| 365.25		       | 1			   | 149.6                        | 23.5 |
| Lua			| 1737.4	| 365.25		       | 27			   | 150                          | 6.7 |
| Marte			| 3396		| 687			       | 1.02			   | 228                          | 25.2| 
| Júpiter		| 71492		| 4331			       | 0.41			   | 778.5                        | 3.1 |
| Saturno		| 60268		| 10747			       | 0.45			   | 1432                         | 26.7 |
| Urano			| 25559		| 30589			       | -0.71			   | 2867                         | 97.8 |
| Netuno		| 24764		| 59800			       | 0.67			   | 4515                         | 28.3 |
| Plutão		| 1188		| 90560			       | -6.39                     | 5906.4                       | 119.5 |

### 1.1 Escala
Para fins de melhor visualização e navegação, adotou-se uma escala bastante reduzida, tendo
como base dessa escala o valor arbritário 60 armazenada na variável esc_dist presente no arquivo
"sol.mjs". Com isso é possível visualizar panoramicamente as distâncias dos planetas entre si,
ao mesmo tempo preservando as proporções.

### 1.2 Distância dos centros planeta-Sol
Para realizar o cálculo deste aspecto, adotou-se como referência a distância do centro da Terra ao
centro do Sol. Partindo disso, aplicamos a razão entre as distâncias centrais planeta-Sol por Terra-Sol,
multiplicado pela escala padrão. Essa metodologia permite preservar as proporções das distâncias. A
fórmula abaixo expressa o método:<br>

***LEGENDA***
* escDist = Escala padrão de distância (60);
* plaSolDist = Distância planeta-Sol;
* solRaio = Comprimento do raio do Sol;
* plaRaio = Comprimento do raio do planeta;
* terraSolDist = distância Terra-Sol;
* terraRaio = Comprimento do raio da Terra;<br><br>

$$
distCentro = escDist* \frac {(plaSolDist + solRaio + plaRaio)}{(terraSolDist + SolRaio + terraRaio)}
$$

### 1.3 Órbita dos planetas
Os planetas do Sistema Solar orbitam descrevendo um ciclo trigonométrico em torno do Sol, partindo
da visão acima do polo Norte da Terra. No ambiente Three JS, suas trajetórias de órbita são realizadas
através dos componentes eixos x e z, de dimensões sen(t) e cos(t) (t sendo o período de órbita),
multiplicado pela a distância do seu centro ao centro do Sol. As fórmulas abaixo descrevem o
comportamento conjunto dos componentes das órbitas dos planetas.

***LEGENDA***
* x = Componente do seno;
* z = Componente do cosseno;
* t = Período de órbita do planeta em proporção com o da Terra;
* plaSolDist = Distância do centro do planeta ao centro do Sol

$$
x = sen(t) * plaSolDist;
$$
$$
z = cos(t) * plaSolDist.
$$

### 1.4 Rotação dos planetas
Para se obter as a velocidade das rotações dos corpos celestes, adotamos como referência a da rotação
terrestre para poder realizar o cálculo das proporções Terra / planeta. Segue a fórmula abaixo:

***LEGENDA***
* velRot = Velocidade de rotação do planeta.
* rotTerra = Número de rotações realizadas da Terra em uma volta completa em torno do Sol;
* rotPlan = Número de rotações realizadas do planeta em uma volta completa em torno do Sol ;<br><br>
* tempoTerra = Variável de progressão de tempo da Terra.

$$
velRot = tempoTerra* \frac {(rotTerra)}{(rotPlan)}
$$

### 1.5 Inclinação de rotação
O corpos celestes rotacionam com uma determinada inclinação em relação ao seu plano orbital. No
projeto, o ângulo (em radianos) é ajustado na main.mjs, na função animate.

***LEGENDA***
* $\Theta$ = Ângulo de inclinação (radianos);
* incli = Inclinação da rotação;

$$
incli = \Theta
$$

## 2 Como rodar
Para executar este projeto localmente, siga os passos abaixo:

### 2.1 Pré-requisitos
Navegador com suporte a módulos ES6 (ex.: Chrome, Firefox, Edge)

Conexão à internet.

Servidor local para servir arquivos via HTTP ( Live Server no VS Code, http-server do Node.js, ou Python HTTP server)

Atenção: Abrir os arquivos diretamente com file:// não funcionará corretamente devido às restrições de módulos ES (import/export).

### 2.2 Clonando o Repositório
git clone https://github.com/anderson-ferreira-ufc/comp_graf-trab1.git
cd comp_graf-trab1

### 2.3 Iniciando um servidor local
Opção A: Usando VS Code com Live Server
Instale a extensão Live Server

Clique com o botão direito no arquivo index.html e selecione "Open with Live Server"

Opção B: Usando Node.js e http-server
npm install -g http-server
http-server .
Opção C: Usando Python 3
python -m http.server
###4. Acessando no Navegador
Abra o navegador e acesse:
http://localhost:8080


## 3 Funcionalidades

### 3.1 Visualização de trajetória dos planetas
Ao selecionar o planeta no painel lateral, sua órbita é destacada visualmente, possibilitando o acompanhamento da trajetória do corpo celeste.

### 3.2 Foco nos planetas

### 3.3 Controle de velocidade dos planetas
O sistema permite o ajuste da velocidade de dos corpos celestes por meio de comandos do teclado:
A tecla + incrementa a velocidade de animação.
A tecla - reduz a velocidade de animação.

## Equipe
Anderson Ferreira Almeida<br>
Ryan Gomes Magalhães Lima<br>
Antônio Benedito Moreira Júnior<br>
Arthur Vieira de Lacerda Fialho<br>
Juliana de Paiva Barboza<br>
Elizeu Sousa Duarte<br>
Eduardo Santos de Castro<br>
Jhonanthan Wyllyan Souza Silveira<br>
## 5 Link do vídeo de demonstração

## 6 REFERÊNCIAS
https://nssdc.gsfc.nasa.gov/planetary/factsheet/
