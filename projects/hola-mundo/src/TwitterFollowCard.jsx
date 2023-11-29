import propTypes from 'prop-types'
function TwitterFollowCard ({ userName, name, isFollowing=false }) {
    const text = isFollowing ? 'Siguiendo' : 'Seguir' 
    const imageSrc = `https://unavatar.io/twitter/${userName}`
    return (
        <article>
        <header>
            <img src={imageSrc} alt="Foto de perfil" />
            <div>
                <strong>{name}</strong>
                <span>@{userName}</span>
            </div>
        </header>
        <aside>
            <button>
                {text}
            </button>
        </aside>
      </article>  
    )
}

TwitterFollowCard.propTypes = {
    userName: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    isFollowing: propTypes.bool
}
export default TwitterFollowCard