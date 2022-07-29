import ironhackersImg from "../assets/ironhackers.avif"

function HomePage() {
    return (
        <div className="home">
            <h1>Welcome</h1>
            <img src={ironhackersImg} alt="ironhackers" />
        </div>
    )
}
export default HomePage;