const jwt = require("jsonwebtoken");
const config = require("config");
const _ = require("lodash");

const sockets = [];

class SocketHandler {
  static getSockets() {
    return sockets;
  }

  static getSocketsOfAdmins() {
    const adminSocketsArray = [];
    sockets.forEach((socket) => {
      const user = jwt.verify(socket.jwtToken, config.get("jwtPrivateKey"));
      if (user.isAdmin) {
        console.log("USER BEING RETURNED: ", user.email);
        adminSocketsArray.push(socket.socketRef);
      }
    });
    return adminSocketsArray;
  }
  
  // added
  static getSockets() {
    const SocketsArray = [];
    sockets.forEach((socket) => {
      const user = jwt.verify(socket.jwtToken, config.get("jwtPrivateKey"));
      if (!user.isAdmin) {
        console.log("USER BEING RETURNED: ", user.email);
        SocketsArray.push(socket.socketRef);
      }
    });
    return SocketsArray;
  }

  static addSocket(jwtToken, socketRef) {
    sockets.push({ jwtToken, socketRef });
  }

  static deleteSocket(toBeDeletedSocket) {
    _.remove(sockets, function (socket) {
      return socket.socketRef.id == toBeDeletedSocket.id;
    });
  }
}

module.exports.SocketHandler = SocketHandler;
