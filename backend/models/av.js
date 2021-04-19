const avData = [
  {
    number: "19 AB 8903",
    status: "active",
  },
  {
    number: "16 FG 3908",
    status: "inactive",
  },
  {
    number: "78 GH 3783",
    status: "active",
  },
  {
    number: "42 SI 7300",
    status: "inactive",
  },
  {
    number: "57 HJ 7350",
    status: "active",
  },
];

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

  static getListOfConnectedAVs() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(avData);
      }, 300);
    });
  }
}

module.exports.AV = AV;
