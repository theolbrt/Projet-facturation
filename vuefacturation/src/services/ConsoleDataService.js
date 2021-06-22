import http from "../http-common";

class ConsoleDataService {
  getAll() {
    return http.get("/consoles");
  }

  get(id) {
    return http.get(`/consoles/${id}`);
  }

  create(data) {
    return http.post("/consoles", data);
  }

  update(id, data) {
    return http.put(`/consoles/${id}`, data);
  }

  delete(id) {
    return http.delete(`/consoles/${id}`);
  }

  deleteAll() {
    return http.delete(`/consoles`);
  }

  findByTitle(name) {
    return http.get(`/consoles?title=${name}`);
  }
}

export default new ConsoleDataService();