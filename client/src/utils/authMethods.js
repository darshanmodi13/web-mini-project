import jsCookie from "js-cookie";

const authMethods = {
  getIdToken: function () {
    const id = jsCookie.get("id");
    const token = jsCookie.get("token");
    return { id, token };
  },

  setIdToken: function (id, token) {
    jsCookie.set("id", id, { expires: 30 });
    jsCookie.set("token", token, { expires: 30 });
  },

  clearStorage: function () {
    jsCookie.remove("id");
    jsCookie.remove("token");
  },
};

export default authMethods;
