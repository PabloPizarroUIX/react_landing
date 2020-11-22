import React from "react";
import FirstSlider from "./statics/slide1.jpg"
import SecondSlider from "./statics/slide2.jpg"


const App = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="./">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" href="./">Home <span class="sr-only">(current)</span></a>
                            <a className="nav-link" href="./">Features</a>
                            <a className="nav-link" href="./">Pricing</a>
                        </div>
                    </div>
                </div>
            </nav>


            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={FirstSlider} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={SecondSlider} className="d-block w-100" alt="..." />
                    </div>

                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div>

            <div clasName="bg-dark py-5">
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4 mb-md-5">
                            <div className="card">
                                <img src="https://picsum.photos/seed/picsum/200/200" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Misión</h5>
                                    <p className="card-text">Conoce nuestra filosofía de empresa</p>
                                    <a href="#" className="btn btn-primary">Acceder</a>
                                </div>
                            </div>


                        </div>
                        <div className="col-12 col-md-6 col-lg-4 mb-md-5">
                            <div className="card">
                                <img src="https://picsum.photos/seed/picsum/200/200" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Quienes Somos</h5>
                                    <p className="card-text">Aprende más sobre la historia de nuetsra compañía</p>
                                    <a href="#" className="btn btn-primary">Acceder</a>
                                </div>
                            </div>


                        </div>
                        <div className="col-12 col-md-6 col-lg-4 mb-md-5">
                            <div className="card">
                                <img src="https://picsum.photos/seed/picsum/200/200" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Equipo</h5>
                                    <p className="card-text">Conoce a todos los miembros de InfiniteMedia</p>
                                    <a href="#" className="btn btn-primary">Acceder</a>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </div>



            <div className="container my-5">
                <div className="row">
                    <div className="col-12 col-lg-6 text-right d-none d-md-flex align-items-center">
                        <div>
                            <h1>CONTACTANOS</h1>
                            <h2>Teneos los mejores prductos</h2>
                        </div>
                    </div>

                    <div className="col-12 col-lg-6">


                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>

                    </div>
                </div>




            </div>

            <footer className="bg-dark">
                <div className="container">

                    <div className="row">

                        <div className="col-4"></div>
                        <div className="col-4"></div>
                        <div className="col-4"></div>
                    </div>

                    <div className="row">
                        <p className="text-center w-100 text-light"> texto</p>
                    </div>

                </div>

            </footer>

        </>
    )
}

export default App; 