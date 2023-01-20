import json from "./parser";
import read from "../reader";

export default class GameSavingLoader {
    load() {
        read()
            .then( data => {
                const getData = data;
                return getData
            })
            .then( getData => {
                json(getData)
                    .then( readData => {
                        const saving = JSON.parse(readData)
                        return saving
                    })
            })
    }
}


