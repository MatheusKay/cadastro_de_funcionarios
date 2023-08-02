document.addEventListener('DOMContentLoaded', function() {

    class Pessoa {

        constructor(nome, idade, telefone, sexo) {
            this.nome = nome;
            this.idade = idade;
            this.telefone = telefone;
            this.sexo = sexo
        }
        
    }
    
    class Cargos extends Pessoa{
    
        constructor(nome, idade, telefone, sexo ,nomeCargo, descricaoCargo, requisitosCargo) {
            super(nome, idade, telefone, sexo)
            this.nomeCargo = nomeCargo
            this.descricaoCargo = descricaoCargo
            this.requisitosCargo = requisitosCargo
        }
    
    }
    
    class Funcionario extends Cargos {
        
        constructor(nome, idade, endereco, telefone, email, sexo, nomeCargo, descricaoCargo, requisitosCargo) {
            super(nome, idade, telefone, sexo ,nomeCargo, descricaoCargo, requisitosCargo)
            this.endereco = endereco;
            this.email = email;
        }
    
    }
    
    
    const form = document.getElementById('form');
    const button = document.getElementById('cadastra')
    const idsAdicionados = []
    let linhas = ''
    let linha = ''
    let proximoId = 0
    
    const cargosDaEmpresa = [
        new Cargos("", "", "", "", "Gerente", "Responsável pela gestão do departamento", "Experiência mínima de 5 anos em gestão"),
        new Cargos("", "", "", "", "Assistente", "Auxilia em atividades administrativas", "Ensino Médio completo"),
        new Cargos("", "", "", "", "Vendedor", "Responsável por vender produtos ou serviços da empresa para clientes em potencial.", "Habilidades de comunicação e negociação, capacidade de fechar vendas."),
        new Cargos("", "", "", "", "Assistente Administrativo", "Auxilia em tarefas administrativas e de escritório para garantir o bom funcionamento da empresa.", "Habilidades organizacionais e de comunicação, conhecimento em ferramentas de escritório."),
        new Cargos("", "", "", "", "Analista de Recursos Humanos", " Gerencia processos de recrutamento, seleção e treinamento de funcionários", "Conhecimentos em RH, habilidades de comunicação e resolução de conflitos."),
        new Cargos("", "", "", "", "Contador", "Responsável por manter registros financeiros precisos e realizar análises contábeis.", "Formação em Contabilidade e conhecimentos em legislação fiscal."),
        new Cargos("", "", "", "", "Engenheiro", "Projetar e supervisionar projetos e processos técnicos.", "Formação em Engenharia e habilidades técnicas específicas para a área de atuação.")
    ] 
    
    form.addEventListener('submit', function(e) {
        
        e.preventDefault()
    
        adicionarFuncionario()
        atualizarTabela()
        
    })
    
    let pessoa;
    
    function adicionarFuncionario() {
        
        const nome = document.getElementById('nome').value;
        const idade = document.getElementById('idade').value;
        const endereco = document.getElementById('endereco').value;
        const numero = document.getElementById('numero').value;
        const email = document.getElementById('email').value;
        const sexo = document.getElementById('sexo').value;
        const cargoFuncionario = document.getElementById('selecao-de-cargo')
        const cargoSelecionado = cargoFuncionario.value
    
        console.log(cargoSelecionado)
        
        if (cargoSelecionado === cargosDaEmpresa[0].nomeCargo) {
    
            pessoa = new Funcionario(nome, idade, endereco, numero, email, sexo, cargosDaEmpresa[0].nomeCargo, cargosDaEmpresa[0].descricaoCargo, cargosDaEmpresa[0].requisitosCargo);
    
        } else if (cargoSelecionado === cargosDaEmpresa[1].nomeCargo) {
    
            pessoa = new Funcionario(nome, idade, endereco, numero, email, sexo, cargosDaEmpresa[1].nomeCargo, cargosDaEmpresa[1].descricaoCargo, cargosDaEmpresa[1].requisitosCargo);
    
    
        } else if (cargoSelecionado === cargosDaEmpresa[2].nomeCargo) {
    
            pessoa = new Funcionario(nome, idade, endereco, numero, email, sexo, cargosDaEmpresa[2].nomeCargo, cargosDaEmpresa[2].descricaoCargo, cargosDaEmpresa[2].requisitosCargo);
    
        } else if (cargoSelecionado === cargosDaEmpresa[3].nomeCargo) {
    
            pessoa = new Funcionario(nome, idade, endereco, numero, email, sexo, cargosDaEmpresa[3].nomeCargo, cargosDaEmpresa[3].descricaoCargo, cargosDaEmpresa[3].requisitosCargo);
    
        } else if (cargoSelecionado === cargosDaEmpresa[4].nomeCargo) {
    
            pessoa = new Funcionario(nome, idade, endereco, numero, email, sexo, cargosDaEmpresa[4].nomeCargo, cargosDaEmpresa[4].descricaoCargo, cargosDaEmpresa[4].requisitosCargo);
    
        } else if (cargoSelecionado === cargosDaEmpresa[5].nomeCargo) {
    
            pessoa = new Funcionario(nome, idade, endereco, numero, email, sexo, cargosDaEmpresa[5].nomeCargo, cargosDaEmpresa[5].descricaoCargo, cargosDaEmpresa[5].requisitosCargo);
    
        } else if (cargoSelecionado === cargosDaEmpresa[6].nomeCargo) {
    
            pessoa = new Funcionario(nome, idade, endereco, numero, email, sexo, cargosDaEmpresa[6].nomeCargo, cargosDaEmpresa[6].descricaoCargo, cargosDaEmpresa[6].requisitosCargo);
    
        }
    
        separadorFuncionarios()
    }
    
    function separadorFuncionarios() {
    
        let linha = `<tr class="linha">`;
    
        if ((pessoa.sexo == "Homem") || (pessoa.sexo == "homem")) {
    
            linha += '<td><img id="foto_funcionario" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-B3yxH5E7bDgZ5b258ASTMiNO_ZpaXwB0Fg&usqp=CAU" alt=""></td>';
        
        } else if ((pessoa.sexo == "Mulher") || (pessoa.sexo == "mulher")) {
    
            linha += '<td><img id="foto_funcionario" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu0aMJ7tjJflvFBm1lDrnQAjnoG1OFf1t9gw&usqp=CAU" alt=""></td>';
        
        } else {
    
            linha += '<td></td>'
        }
    
        linha += `<td><p class="info_funcionario"><span class="info_funcionario__negrito">Nome: </span>${pessoa.nome}</p></td>`;
        linha += `<td><p class="info_funcionario"><span class="info_funcionario__negrito">Idade: </span>${pessoa.idade}</p></td>`;
        linha += `<td><p class="info_funcionario"><span class="info_funcionario__negrito">Endereço: </span>${pessoa.endereco}</p></td>`;
        linha += `<td><p class="info_funcionario"><span class="info_funcionario__negrito">Telefone: </span>${pessoa.telefone}</p></td>`;
        linha += `<td><p class="info_funcionario"><span class="info_funcionario__negrito">Email: </span>${pessoa.email}</p></td>`;
        linha += `<td><p class="info_funcionario"><span class="info_funcionario__negrito">Gênero: </span>${pessoa.sexo}</p></td>`;
        linha += `<td><p class="info_funcionario"><span class="info_funcionario__negrito">Cargo: </span>${pessoa.nomeCargo}</p></td>`;
        linha += '</tr>';
    
        linhas += linha
    
    }
    
    function atualizarTabela() {
        
        const cargoFuncionario = document.getElementById('selecao-de-cargo')
        const cargoSelecionadoSeparador = cargoFuncionario.value
    
        const tabelaTodos = document.getElementById('tabela_todos')
        tabelaTodos.innerHTML = linhas
    
        const conteudoSeparado = linhas.split('</tr>')
    
        const elementosAgrupadosPorCargo = {
            "Gerente": [],
            "Assistente": [],
            "Vendedor": [],
            "Assistente Administrativo": [],
            "Analista de Recursos Humanos": [],
            "Contador": [],
            "Engenheiro": [],
            "Outros": []
        }
    
        for (let i = 0; i < conteudoSeparado.length - 1; i++) {
            const elemento = conteudoSeparado[i] + '</tr>'; // Adiciona o '</tr>' novamente ao elemento
            let cargo = "Outros"; // Por padrão, coloca em "Outros" se não encontrar o cargo
        
            // Verifica se o elemento contém um dos cargos conhecidos
            if (elemento.includes("Gerente")) {
                cargo = "Gerente";
            } else if (elemento.includes("Assistente")) {
                cargo = "Assistente";
            } else if (elemento.includes("Vendedor")) {
                cargo = "Vendedor";
            } else if (elemento.includes("Analista de Recursos Humanos")) {
                cargo = "Analista de Recursos Humanos";
            } else if (elemento.includes("Contador")) {
                cargo = "Contador";
            } else if (elemento.includes("Engenheiro")) {
                cargo = "Engenheiro";
            }
        
            elementosAgrupadosPorCargo[cargo].push(elemento); // Adiciona o elemento ao array correto
            console.log(elementosAgrupadosPorCargo)
        
        }

        if (cargoSelecionadoSeparador == "Gerente") {
    
            const corpoTabela = document.getElementById('tabela_gerentes');
    
            const conteudoFinal = elementosAgrupadosPorCargo['Gerente']

            // Definir o conteúdo da tabela
            corpoTabela.innerHTML = conteudoFinal;
    
        } else if (cargoSelecionadoSeparador == "Vendedor") {
            
            const corpoTabela = document.getElementById('tabela_vendedores');
    
            const conteudoFinal = elementosAgrupadosPorCargo['Vendedor']

            // Definir o conteúdo da tabela
            corpoTabela.innerHTML = conteudoFinal;
    
        } else if (cargoSelecionadoSeparador == "Assistente Administrativo") {
            
            const corpoTabela = document.getElementById('tabela_assistentes_administativos');
    
            const conteudoFinal = elementosAgrupadosPorCargo['Assistente']

            // Definir o conteúdo da tabela
            corpoTabela.innerHTML = conteudoFinal;
    
        } else if (cargoSelecionadoSeparador == "Analista de Recursos Humanos") {
            
            const corpoTabela = document.getElementById('tabela_analistas_recursos_humanos');
    
            const conteudoFinal = elementosAgrupadosPorCargo['Analista de Recursos Humanos']

            // Definir o conteúdo da tabela
            corpoTabela.innerHTML = conteudoFinal;
    
        } else if (cargoSelecionadoSeparador == "Contador") {
            
            const corpoTabela = document.getElementById('tabela_contadores');
    
            const conteudoFinal = elementosAgrupadosPorCargo['Contador']

            // Definir o conteúdo da tabela
            corpoTabela.innerHTML = conteudoFinal;
    
        } else if (cargoSelecionadoSeparador == "Engenheiro") {
            
            const corpoTabela = document.getElementById('tabela_engenheiros');
    
            const conteudoFinal = elementosAgrupadosPorCargo['Engenheiro']

            // Definir o conteúdo da tabela
            corpoTabela.innerHTML = conteudoFinal;
    
        } 
    
        const todasAsTbody = document.querySelectorAll('tbody'); // Obtém todas as ocorrências de <tbody> no documento
    
        todasAsTbody.forEach(tbody => {
            const conteudoTbody = tbody.innerHTML; // Obtém o conteúdo HTML dentro da tag <tbody>
            const conteudoSemVirgulas = conteudoTbody.replace(/,/g, ''); // Remove as vírgulas do conteúdo
            tbody.innerHTML = conteudoSemVirgulas; // Atualiza o conteúdo dentro da tag <tbody> sem as vírgulas
        });
    }    

})