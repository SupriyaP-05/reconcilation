import React, { useState } from 'react';

const Listing = () => {
    const [items, setItems] = useState([
        { name: "AAA", id: 1 },
        { name: "BBB", id: 2 },
        { name: "CCC", id: 3 }
    ])
    return (
        <div className="App">
            {
                items.map((item, index) => {
                    return (
                        <li key={item.id}>
                            {item.name}
                        </li>
                    )
                })
            }
            <button onClick={() => { setItems([{ name: "DDD", id: 4 }, ...items]) }}>Add Item</button>

        </div>
    );
}

export default Listing;
