import http from "../http-common";

class FactureDataService {
  getAll() {
    return http.get("/factures");
  }

  get(id) {
    return http.get(`/factures/${id}`);
  }

  create(data) {
    return http.post("/factures", data);
  }

  update(id, data) {
    return http.put(`/factures/${id}`, data);
  }

  delete(id) {
    return http.delete(`/factures/${id}`);
  }

  deleteAll() {
    return http.delete(`/factures`);
  }

  findByTitle(nom) {
    return http.get(`/factures?title=${nom}`);
  }
}

export default new FactureDataService();