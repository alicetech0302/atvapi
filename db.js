
const Produto =[
    {
        id:1,
        nome:"Iphone 8 Plus",
        Quantidade:1,
        Preço: 1000.00
    },

    {
        id:1,
        nome:"celular",
        Quantidade:3,
        Preço: 5215.00    }
];


function consultarProdutos(){
    return clientes;
}

function consultarProduto(id){
    return clientes.find(c => c.id == id);
}

function inserirProduto(cliente){
    clientes.push(cliente);
}

function alteraProduto(id,){

}
function deletarProduto(cliente){
    const cliente = clientes.findIndex(c => c.id == id);
    cliente.splice(indice,1);
}

module.exports = {
    consultarProdutos,
    consultarProduto,
    inserirProduto,
    alteraProduto,
    deletarProduto
}
