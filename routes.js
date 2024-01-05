const routes = async (app, controllers) => {
  const { matrixController } = controllers

  app.get('/', async (req, res) => {
    try {
      const publicRooms = await matrixController.getPublicRooms();
      res.json(publicRooms);
    } catch (error) {
      res.status(500).send({error});
    }
  })

  app.get('/:name', async (req, res) => {
    const result = await matrixController.hello(req)
    res.send(result);
  })

  app.get('/join/:roomId', async (req, res) => {
    const { roomId } = req.params;
 
    try {
      await matrixController.joinRoom(roomId);
      req.session.roomId = roomId;
      res.redirect('/chat');
    } catch (error) {
      console.error(error);
      res.status(500).send({error});
    }
  });

  return app;
};

module.exports = routes;
