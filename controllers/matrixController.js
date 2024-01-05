const matrixController = (repositories, data) => {
  const { matrix } = data

  const hello = async (req) => {
    return {
      status: `Hello ${req.params.name}, I'm still here...`
    }
  }

  const joinRoom = async (roomId) => {
    await matrix.joinRoom(roomId)
  }
  
  const getPublicRooms = async () => {
    return new Promise((resolve, reject) => {
      matrix.publicRooms((err, data) => {
        if (err) {
          console.log({err})
          reject(err)
        } else {
          resolve(data)
        }
      })
    })
  }

  return { hello, joinRoom, getPublicRooms }
}

module.exports = matrixController