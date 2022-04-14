export const convertJSON = (data) => {
  if (data != "") {
    try {
      const jsonString = JSON.parse(data);

      return jsonString.data.map((element) => {
        return element.message;
      });
    } catch (err) {
      console.log(err);
    }
  }
};
