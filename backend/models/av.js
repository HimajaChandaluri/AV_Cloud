class AV {
  static getCount() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(400);
      }, 300);
    });
  }

  static getStatesAndNumbers() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const avStates = [
          { state: "active", count: 350 },
          { state: "inactive", count: 50 },
        ];
        resolve(avStates);
      }, 300);
    });
  }
}

module.exports.AV = AV;
