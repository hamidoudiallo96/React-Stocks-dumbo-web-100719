import React from "react";

const Stock = props => {
	return (
		<div>
			<div className="card">
				<div className="card-body" onClick={e => props.buyStock(props.stock)}>
					<h5 className="card-title">{props.stock.name}</h5>
					<p className="card-text">
						{props.stock.ticker}: {props.stock.price}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Stock;
