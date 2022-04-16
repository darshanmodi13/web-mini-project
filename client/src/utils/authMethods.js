import jsCookie from "js-cookie";

const authMethods = {
  getIdToken: function () {
    const id = jsCookie.get("id");
    const token = jsCookie.get("token");
    const name = jsCookie.get("name");
    return { id, token, name };
  },

  setIdToken: function (id, token, name) {
    jsCookie.set("id", id, { expires: 30 });
    jsCookie.set("token", token, { expires: 30 });
    jsCookie.set("name", name, { expires: 30 });
  },

  clearStorage: function () {
    jsCookie.remove("id");
    jsCookie.remove("token");
    jsCookie.remove("name");
  },
};

export default authMethods;
