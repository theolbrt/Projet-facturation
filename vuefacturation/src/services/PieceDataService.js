import http from "../http-common";

class PieceDataService {
  getAll() {
    return http.get("/pieces");
  }

  get(id) {
    return http.get(`/pieces/${id}`);
  }

  create(data) {
    return http.post("/pieces", data);
  }

  update(id, data) {
    return http.put(`/pieces/${id}`, data);
  }

  delete(id) {
    return http.delete(`/pieces/${id}`);
  }

  deleteAll() {
    return http.delete(`/pieces`);
  }

  findByTitle(name) {
    return http.get(`/pieces?title=${name}`);
  }
}

export default new PieceDataService();