import axios from "axios";


const customerKey: string | undefined = process.env.REACT_APP_WC_API_KEY || "";
const secretKey: string | undefined = process.env.REACT_APP_WC_API_SECRET || "";

//custom axios with username and password

const customAxios = axios.create({
  baseURL: "https://mobiroid.ir/wp-json/",
  headers: {
    "Content-Type": "application/json",
  },
  auth: {
    username: customerKey,
    password: secretKey,
  },
});



export default customAxios;
