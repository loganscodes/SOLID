// import axios from "axios";

//esta abierto a la extencion, pero no a la modificacion

export class HttpClient{

    // async get(url: string){
    //     const { data, status } = await axios.get(url)
    //     console.log({data, status})
    //     return { data, status }
    // }


    async get(url: string){
        const resp = await fetch(url)
        const data = await resp.json()

        return { data, status: resp.status }
    }

}