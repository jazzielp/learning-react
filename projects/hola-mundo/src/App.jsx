import './App.css'
import TwitterFollowCard from './TwitterFollowCard'
function App() {
   
    return (
        <>
            < TwitterFollowCard
                name='Miguel Ángel Durán'
                userName='midudev'
                isFollowing
            />

            < TwitterFollowCard 
                name='Héctor de León' 
                userName='powerhdeleon'  
            />

            < TwitterFollowCard 
                name='Franco Pisso' 
                userName='FPisso'  
            />
        </>
    )
}

export default App