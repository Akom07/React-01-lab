import './App.css'
import Companies from './component/Companies'
function App() {

  return (
    <div className='app'>
    <Companies
    companyName = 'aramco'
    emploeeNumber = '5000'
    fondYear = '1950'
    serves = 'oil'
    price='10,000'
    name1='ali'
    lang='english'
    years='9'
    company='aramco'
    />

    <Companies
    companyName = 'tuwaiq'
    emploeeNumber = '500'
    fondYear = '1990'
    serves = 'teaching'
    price='free'
    name1='amer'
    lang='js'
    years='4'
    company='tuwaiq'
    />

    <Companies
    companyName = 'alibaba'
    emploeeNumber = '5,000,000'
    fondYear = '1900'
    serves = 'traid'
    price='5000'
    name1='fahad'
    lang='js'
    years='6'
    company='tuwaiq'
    />


    </div>
  )
}

export default App
