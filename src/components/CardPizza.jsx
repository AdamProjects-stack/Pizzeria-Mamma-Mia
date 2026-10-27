import { formatNumber } from '../utils/formatNumber'

const CardPizza = ({ name, price, ingredients, img }) => {
    return (
        <div className="card h-100 shadow-sm">
            <img src={img} className="card-img-top" alt={name} />

            <div className="card-body">
                <h5 className="card-title text-capitalize">Pizza {name}</h5>
                <hr />

                <p className="text-center text-muted mb-1">Ingredientes:</p>
                <p className="text-center">🍕 {ingredients.join(', ')}</p>
                <hr />

                <h4 className="text-center mb-3">Precio: ${formatNumber(price)}</h4>

                <div className="d-flex justify-content-between">
                    <button className="btn btn-outline-dark">Ver más 👀</button>
                    <button className="btn btn-dark">Añadir 🛒</button>
                </div>
            </div>
        </div>
    )
}

export default CardPizza