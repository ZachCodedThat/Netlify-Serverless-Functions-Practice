exports.handler = async function () {
  return {
    statusCode: 200,
    body: JSON.stringify({
      firstName: "Zach",
      lastName: "Przybilski",
      age: "30",
    }),
  };
};
