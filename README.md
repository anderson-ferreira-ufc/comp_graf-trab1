# Sistema Solar
O projeto aqui presente tem como objetivo simular graficamente o comportamento dos corpos
celestes mais notórios do Sistema Solar, abrangendo aspectos como órbita, rotação, inclinação,
etc., com todos os dados extraídos da NASA. A ferramenta utilizada foi o Three JS, uma biblioteca
JavasCript que trabalha com o framework Node.JS.
Para realizar este cálculo, adotou-se como referência a distância do centro da Terra até

## Metodologia
A equipe decidiu representar fielmente o funcionamento do Sistema Solar, com dados extraídos da NASA.
As proporções de tamanho, órbita em torno do Sol, e rotação dos planetas estão em escala real,
com exceção das distância estes em relação ao Sol, em que aqui está representado em escala reduzida,
porém, ainda preservando a proporção das distâncias entre eles. Isso foi adotado para facilitar a
visualização dos objeto na cena, já que em escala realista, as distância entre impossibilitaria de
se ter uma visão panorâmica do sistema em funcionamento, pois a escala das distância entre eles
variam na casa dos milhares em relação ao diâmetro da Terra. No programa também é possível ajustar
a porcentagem do comprimento do raio do Sol, de 15% à 100%. Essa feature foi pensada com o intuito
de facilitar a visualização do comportamento dos planetas, pois nas proporções reais, o volume do
Sol em relação aos demais planetas pode variar de algumas centenas a até algumas centenas de milhões
de vezes o volume destes.
	
A tabela abaixo diz respeito as informações relacionadas aos planetas, no caso, o raio, duração da
rotação, período de translação e inclinação orbital.

| Corpo celeste 	| Raio (Km) 	| Translação (dias terrestres) | Rotação (dias terrestres) | Distância do Sol (Gigametro) | Inclinação do eixo orbital (°)|
|-----------------------|---------------|------------------------------|---------------------------|------------------------------|----------------------------|
| Sol			| 696 340	|			       |			   | 				  |
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

### Escala
Para fins de melhor visualização e navegação, adotou-se uma escala bastante reduzida, tendo
como base dessa escala o valor arbritário 60 armazenada na variável esc_dist presente no arquivo
"sol.mjs". Com isso é possível visualizar as distâncias dos planetas entre si, ao mesmo tempo
preservando as proporções.

### Distância dos centros planeta-Sol
Para realizar este cálculo, adotou-se como referência a distância do centro da Terra até
o centro do Sol, com isso, podendo calcular a distância dos demais planeta. Isso é feito através
da fórmula.
	pla_sol_dist = $esc_sol*(pla_sol_dist+sol_raio+pla_raio)/(terra_sol_dist+sol_raio+terra_raio)

## Como rodar

## Funcionalidades

## REFERÊNCIAS
https://nssdc.gsfc.nasa.gov/planetary/factsheet/
