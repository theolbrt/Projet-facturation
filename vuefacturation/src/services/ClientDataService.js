import http from "../http-common";

class ConsoleDataService {
  getAll() {
    return http.get("/clients");
  }

  get(id) {
    return http.get(`/clients/${id}`);
  }

  create(data) {
    return http.post("/clients", data);
  }

  update(id, data) {
    return http.put(`/clients/${id}`, data);
  }

  delete(id) {
    return http.delete(`/clients/${id}`);
  }

  deleteAll() {
    return http.delete(`/clients`);
  }

  findByTitle(nom) {
    return http.get(`/clients?title=${nom}`);
  }
}

export default new ConsoleDataService();