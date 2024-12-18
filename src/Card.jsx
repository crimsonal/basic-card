import profilePic from './assets/pfp.png'

function Card() {

    return (
        <div className="card">
            <img className="card-image" alt="profile picture" src={profilePic}></img>
            <h2 className="card-title">Christopher Artis</h2>
            <p className="card-text">Old Dominion University student aspiring to work in the software engineering space. </p>
        </div>
    )

}

export default Card