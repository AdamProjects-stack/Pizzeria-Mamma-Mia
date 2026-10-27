const Header = () => {
    return (
        <header
            className="text-center text-white py-5"
            style={{
                backgroundColor: '#212529',
                backgroundImage: "url('/Header.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '300px',
            }}
        >
            <h1 className="display-4 fw-bold">¡Pizzería Mamma Mía!</h1>
            <p className="lead">¡Tenemos las mejores pizzas que podrás encontrar!</p>
            <hr className="w-50 mx-auto" />
        </header>
    )
}

export default Header