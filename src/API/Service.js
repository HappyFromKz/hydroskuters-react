import axios from "axios";

export default class Service {
    static async getData(url) {
        const {data, status} = await axios.get(url)
        if (status === 200) return data
    }
}
