module.exports = app => {
  const controller = app.controllers.manutencoes;

  app.route('/api/v1/manutencoes')
    .get(controller.listarManutencoes)
    .post(controller.adicionarManutencao)
    .delete(controller.truncate);
  
  app.route('/api/v1/manutencoes/:id')
    .delete(controller.deletarManutencao);

  app.route('/api/v1/manutencoes/:viatura')
    .put(controller.atualizarManutencaoPorViatura);

  app.route('/api/v1/quinzenas')
    .get(controller.listarManutencoesPorQuinzena);
}