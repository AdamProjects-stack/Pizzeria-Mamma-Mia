import Header from './Header'
import CardPizza from './CardPizza'

const Home = () => {
    return (
        <>
            <Header />

            <main className="container my-4">
                <div className="row g-4">
                    <div className="col-12 col-md-4">
                        <CardPizza
                            name="Napolitana"
                            price={5950}
                            ingredients={['mozzarella', 'tomates', 'jamón', 'orégano']}
                            img="https://imgs.search.brave.com/LUH-5YZTr3eCo-PjMX0ZUou4-2MK4gRXz5aTb1yZ7iA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9tYXJn/YXJpdGEtbmFwb2xp/dGFuby1kZS1sYS1w/aXp6YS1lbi1sYS10/YWJsYS1kZS1tYWRl/cmEtdmllamEtMzgz/NjcxMzYuanBn"
                        />
                    </div>

                    <div className="col-12 col-md-4">
                        <CardPizza
                            name="Española"
                            price={6950}
                            ingredients={['mozzarella', 'gorgonzola', 'parmesano', 'provolone']}
                            img="https://img.rtve.es/n/2082774/?w=1600"
                        />
                    </div>

                    <div className="col-12 col-md-4">
                        <CardPizza
                            name="Pepperoni"
                            price={6950}
                            ingredients={['mozzarella', 'pepperoni', 'orégano']}
                            img="https://imgs.search.brave.com/Ch0xazTAz6rIcIHqM10QktjA4KE8SWzpc-Tp_GuODwo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YmxvZy5wYXVsaW5h/Y29jaW5hLm5ldC93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNC8x/MC9waXp6YS1wZXBw/ZXJvbmktMTcyOTg0/NzMzMS5qcGc"
                        />
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home