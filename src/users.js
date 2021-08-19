import data from "./data";
import React, {useState} from "react";

const Data = () => {

    const [users, setUsers] = useState(data)

    return (
        <div>
            {
                users.sort((a, b) => a > b ? 1 : -1 ).map(el => (
                    <div key={el.id}>
                        <div>{el.name}</div>
                        <div>{el.email}</div>
                    </div>
                ))
            }
        </div>
    )
}

export default Data