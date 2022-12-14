import "../stylesheets/HomeView.css"

function HomeView() {
  return (
    <>
      <div className="d-flex flex-column align-items-center mt-5">
        <h1>Bienvenido a <span className="fw-bold">Happy Cake</span></h1>
        <h4>El lugar de los pasteles felices</h4>
        <p>🎂</p>
        <img className="w-25 rounded mx-auto d-block" src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=789&q=80" alt="foto de un pastel" />
      </div>
    </>
  )
}

export default HomeView;
