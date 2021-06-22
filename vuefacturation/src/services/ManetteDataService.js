import http from "../http-common";

class ManetteDataService {
  getAll() {
    return http.get("/manettes");
  }

  get(id) {
    return http.get(`/manettes/${id}`);
  }

  create(data) {
    return http.post("/manettes", data);
  }

  update(id, data) {
    return http.put(`/manettes/${id}`, data);
  }

  delete(id) {
    return http.delete(`/manettes/${id}`);
  }

  deleteAll() {
    return http.delete(`/manettes`);
  }

  findByTitle(name) {
    return http.get(`/manettes?title=${name}`);
  }
}

export default new ManetteDataService();