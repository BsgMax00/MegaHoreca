import React from 'react';

export default function Price({ price, style }) {
    return <div>
        {/* <p className="fw-bold lh-1 h5">
            <span>€{price.slice(0, 3)}</span>
            <span className="small">{price.slice(3, 5)}</span>
        </p> */}
        <p className={`fw-bold mb-0 ${style}`}>
            <span>€ {price.toString().includes(".00") ? price.toString().replace(".00", ",-") : price.toString().replace(".", ",")}</span>
        </p>
    </div>
}
