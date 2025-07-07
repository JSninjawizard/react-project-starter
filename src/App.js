import Card from './Card'
import Slava from './images/Slava.png'
import Vova from './images/Vova.png'
import './App.css'

function App() {
   return (
    <div className='container'>
        <div className='container--title'>BudgieZaurs</div>
        <div className='container--card'>
            <Card title = "Abuslav" atts='Hooligan' image= {Slava}/>
            <Card title = "Vova" atts='Handsome' image={Vova}/>
        </div>
    </div>
   ) 
}

export default App