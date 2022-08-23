# Explorando Marte :rocket:

<br>

📺 Preview: https://astroonauta.github.io/explorando-marte

<hr>

**Teste de Lógica de Programação**  
[Repositório Teste](https://docs.google.com/document/d/1_6wd670MLuso-_NR1YkNHUfxemPfC4I8DxMZQfVPmUQ/edit 'Clique Aqui')

## Objetivo

Um conjunto de sondas foi enviado pela NASA ao planeta Marte. Estas irão pousar em um planalto retangular. Este deve ser explorado pelas sondas para que suas câmeras embutidas consigam ter uma visão completa da área e enviar as imagens de volta para a Terra.
A posição e direção de uma sonda são representadas por uma combinação de coordenadas x-y e uma letra representando a direção cardinal para qual a sonda aponta, seguindo a rosa dos ventos em inglês.
Para controlar as sondas, a NASA envia uma simples sequência de letras. As letras possíveis são "L", "R" e "M", e também a letra “P”. Destas, "L" e "R" fazem a sonda virar 90 graus para a esquerda ou direita, respectivamente, sem mover a sonda. "M" faz com que a sonda mova-se para a frente um ponto da malha, mantendo a mesma direção, a letra P aciona a câmera para fotografar o planície exatamente na posição em que a sonda está apontada.
Nesta malha o ponto ao norte de (x,y) é sempre (x, y+1).
Você deve fazer um programa que processe uma série de instruções enviadas para as sondas que estão explorando este planalto. O formato da entrada e saída deste programa segue abaixo.
Forma de _entrada_ e _saída_ é livre.

### Entrada

A primeira linha da entrada de dados é a coordenada do ponto superior-direito da malha do planalto. Lembrando que a inferior esquerda sempre será (0,0).
O resto da entrada será informação das sondas que foram implantadas. Cada sonda é representada por duas linhas. A primeira indica sua posição inicial e a segunda uma série de instruções indicando para a sonda como ela deverá explorar o planalto.
A posição é representada por dois inteiros e uma letra separados por espaços, correspondendo à coordenada X-Y e à direção da sonda. Cada sonda será controlada sequencialmente, o que quer dizer que a segunda sonda só irá se movimentar após que a primeira tenha terminado suas instruções.

## Saída

A saída deverá contar uma linha para cada sonda, na mesma ordem de entrada, indicando sua coordenada final e direção.
