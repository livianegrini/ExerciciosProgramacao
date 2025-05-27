const produtos = [];

module.exports = {
  index: (req, res) => {
    res.render('index', { produtos });
  },

  formNovo: (req, res) => {
    res.render('novo');
  },

  criar: (req, res) => {
    const { nome, preco } = req.body;
    produtos.push({ id: Date.now(), nome, preco });
    res.redirect('/');
  },

  formEditar: (req, res) => {
    const produto = produtos.find(p => p.id == req.params.id);
    res.render('editar', { produto });
  },

  atualizar: (req, res) => {
    const { nome, preco } = req.body;
    const produto = produtos.find(p => p.id == req.params.id);
    produto.nome = nome;
    produto.preco = preco;
    res.redirect('/');
  },

  deletar: (req, res) => {
    const index = produtos.findIndex(p => p.id == req.params.id);
    produtos.splice(index, 1);
    res.redirect('/');
  }
};