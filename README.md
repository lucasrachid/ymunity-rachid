# Versão do Angular utilizada foi a 17.

Para rodar o projeto, basta cloná-lo e rodar o comando "npm i", responsável por baixar e instalar as dependências necessárias e posteriormente "npm start".

Como está utilizando a versão 17 do Angular, precisará ter o node atualizado.


# Bibliotecas Utilizadas: 

- Tailwhind: https://tailwindcss.com/; 
- Primefaceng: https://primeng.org/;

# Estrutura do Projeto:

- Components: Componentes que serão reutilizado em vários lugares, como em outras páginas etc.

- Models: Onde será criado as classes para representar e tipar os objetos de busca etc.

- Pages: Componentes que serão responsáveis por renderizar o conteúdo principal da rota, sendo que dentro de pacientes por exemplo, foi realizado a mitigação do componente em mais sub-componentes, dividindo sua responsabilidade, como listar, cadastrar, etc...

- Services: Onde irá armazenar os arquivos services responsáveis tanto pelas requisições quanto transicionamento de dados entre componentes.

- Foi criado um json, fake-api, com dados mocados para a busca e apresentação em tela.


# Observações:

- Dentro de components, foi criado um componente loader, responsável por apresentar o loader da biblioteca, isso porque, caso algum dia seja necessário alterar o loader do projeto, não seria necessário a alteração de todos os componentes que o utilizam. Alteraria apenas no app-loader, já iria refletir as alterações no projeto todo. Porém, lógico que cada um teria sua particularidade, como tamanho, cor etc... Precisando passar parâmetros e personalizá-lo.



# Débitos Técnicos:

- Na tabela, ao clicar nos 3 pontos, o menu de Ativo e Inativo, está "quebrando" o layout. Sendo necessário escolher uma opção e clicar fora para que ele feche.

- O span no nome do paciente, foi aplicado ellipsis, porém não está apresentando as reticências, falta verificar o por que desse comportamento e corrigir.

- Botão de cadastrar paciente, está com a cor incorreta, deve ser alterado.

- Botões da tabela de ordenação, não está como o do protótipo, foi utilizado o padrão da tabela do Primeng.

- Embora tenha sido criado os componentes para ser redirecionado para as rotas, ainda não foi feito o redirecionamento efetivo para esses componentes a partir da sidenav, porém caso digite a url, será redirecionado.

- Ao clicar em cadastrar Paciente, o mesmo irá apresentar um modal, que seria onde faria o componente para o cadastro.

- O Hover nos números da paginação, ainda não foram feitos.

- Não foi desenvolvida a sidenave.
