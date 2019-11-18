const express = require('express');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
    host:'mysql-container',
    user:'root',
    password:'toro',
    database:'torodata'
});

connection.connect();

//Lista Usuarios
app.get('/usuarios', function(req, res){
    connection.query('SELECT * FROM usuario', function(error, results){
        if(error)
        {
            throw error
        };
        
        res.send(results.map(item => ({nome: item.nome, usuario: item.usuario, senha: item.senha })));
    });
});

//Lista contas
app.get('/contas', function(req, res){
    connection.query('SELECT * FROM conta', function(error, results){
        if(error)
        {
            throw error
        };
        
        res.send(results.map(item => ({valor: item.valor_total})));
    });
});

//Inserir operação aporte ou retirada
app.post('/operacao', function (req, res) {
    var id_conta = req.param('id_conta');
    var valor = req.param('valor');
    var data_operacao = req.param('data');
    var tipo = req.param('tipo');  
    
    //Inseri o registro na tabela operação
    var query = String.concat('INSERT INTO operacao VALUES(0,',id_conta,',',valor,',',data_operacao,',',tipo,')');
    connection.query(query, function(error, results){
        if(error)
        {
            throw error
        };
    });

    //Busca o saldo atual da conta
    var querySaldo =  String.concat('SELECT valor_total FROM conta WHERE id = ', id_conta);
    var valorSaldo;
    var valorFinal;
    connection.query(querySaldo, function(error, results){
        if(error)
        {
            throw error
        };
        
        valorSaldo = results.valor_total;
    });

    if(tipo == 1)
    {
        valorFinal = valorSaldo + valor;
    }
    else
    {
        valorFinal = valorSaldo - valor;
    }
        
    //Atualiza a tabela de conta com valor atual
        var queryTipo = String.concat('UPDATE conta SET valor_total = ,',valorFinal);
        connection.query(queryTipoAporte, function(error, results){
            if(error)
            {
                throw error
            };

            res.send(results);
        });
  })

app.listen(9001, '0.0.0.0', function(){
    console.log('port 9001');
})