import { formatNumber } from '../utils/formatNumber'

const Navbar = () => {
    const total = 25000
    const token = false

    return (
        <nav className="navbar navbar-dark bg-dark px-3">
            <div className="d-flex align-items-center gap-2">
                <span className="navbar-brand mb-0 h1">Pizzería Mamma Mía!</span>

                <button className="btn btn-outline-light">🍕 Home</button>

                {token ? (
                    <>
                        <button className="btn btn-outline-light">🔓 Profile</button>
                        <button className="btn btn-outline-light">🔒 Logout</button>
                    </>
                ) : (
                    <>
                        <button className="btn btn-outline-light">🔐 Login</button>
                        <button className="btn btn-outline-light">🔐 Register</button>
                    </>
                )}
            </div>

            <button className="btn btn-outline-info">
                🛒 Total: ${formatNumber(total)}
            </button>
        </nav>
    )
}

export default Navbar