import axios from "axios";

const chefkartAPI = axios.create({
  baseURL: "https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io",
});

export default chefkartAPI;
