# Decodificador-De-Textos-Challenge-Alura

Visão Geral
O Encript é uma aplicação web que desenvolvi para facilitar a criptografia e descriptografia de textos. O objetivo é transformar um texto simples em um formato criptografado e, depois, reverter para o original. Também incluí uma funcionalidade prática para copiar o texto processado para a área de transferência.

Funcionalidades
1. Criptografar Texto
Descrição: Esta função permite transformar o texto digitado em um formato criptografado.

Como Funciona:

Ao clicar no botão "Encriptar", o texto inserido é modificado. Letras específicas são substituídas por sequências de caracteres predefinidas.
Por exemplo, "hello" se transforma em "henterllober".
2. Descriptografar Texto
Descrição: Com esta função, você pode reverter um texto criptografado ao seu formato original.

Como Funciona:

Quando você clica em "Decriptar", o texto criptografado é convertido de volta, substituindo as sequências de caracteres por suas letras originais.
Por exemplo, "henterllober" volta a ser "hello".
3. Copiar Texto
Descrição: Esta funcionalidade permite copiar o texto criptografado ou descriptografado para a área de transferência.

Como Funciona:

O botão "Copiar" seleciona automaticamente o texto na caixa de mensagem e o copia para a área de transferência.
Utilizo o método navigator.clipboard.writeText() para garantir que a cópia seja feita de forma segura e eficiente.
Estrutura do Projeto
HTML
No HTML, configurei a estrutura básica da página:

Header: Inclui o logotipo da aplicação.
Main: Contém duas seções principais:
Input Section: Onde você pode digitar o texto e acessar os botões para criptografar, descriptografar e copiar.
Output Section: Exibe o texto após a criptografia ou descriptografia.
CSS
O CSS cuida do estilo e layout:

Animações: Adicionei animações para suavizar a entrada do cabeçalho e do conteúdo principal.
Layout Responsivo: O design se ajusta automaticamente para diferentes tamanhos de tela, garantindo uma boa aparência em dispositivos móveis e desktops.
Estilo dos Botões: Estilizei os botões para tornar a interface intuitiva e agradável.
JavaScript
No JavaScript, implementei a lógica para criptografia e descriptografia:

Criptografia: Modifico o texto substituindo caracteres específicos por sequências predefinidas.
Descriptografia: Revertendo as substituições para restaurar o texto original.
Cópia para a Área de Transferência: Utilizo a API de clipboard para copiar o texto da caixa de mensagem para a área de transferência.
Como Usar
Digite seu Texto: Insira o texto na caixa de entrada.
Clique em "Encriptar": Transforme o texto em seu formato criptografado.
Clique em "Decriptar": Reverter o texto criptografado para o original.
Clique em "Copiar": Copie o texto exibido para a área de transferência.
Compatibilidade
Navegadores: A aplicação funciona bem em navegadores modernos como Chrome, Firefox e Safari.
Dispositivos: O design é adaptado para desktop e dispositivos móveis.
Contribuições
Se você quiser contribuir para o projeto, fique à vontade para fazer um fork do repositório e enviar um pull request com suas melhorias. Estou sempre aberto a sugestões e colaborações!