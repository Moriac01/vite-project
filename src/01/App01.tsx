import log from './web.jpg'
// Mon premier composant React
function App01 (){
    return (
        <div className="t01">
            <div>
                <img src={log} alt="" width={300} className='img'/>
            </div>
            Mon premier composant React
        </div>
    )
}

export default App01