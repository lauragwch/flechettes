import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { use } from 'react';
import arrowImg from './assets/arrow.png'

function App() {

  //creer un etat total avec valeur par defaut 501
  const [total, setTotal] = useState(501)
  const [isDouble, setIsDouble] = useState(false)
  const [isTriple, setIsTriple] = useState(false)
  const [arrows, setArrows] = useState(3)
  const [tour, setTour] = useState(1)
  const [historique, setHistorique] = useState([])


  //creer une fonction qui vient soustraire la valeur du bouton cliqué a l'etat total
  const soustraction = (value) => {
    if (value == 25 && isTriple == true) {
      alert('Impossible de faire un triple sur le 25')
      return
    }


    let newTotal = total
    let newValue = value

    if (isTriple == true) {
      newTotal = newTotal - (value * 3)
      newValue = value * 3
    } else if
      (isDouble == true) {
      newTotal = newTotal - (value * 2)
      newValue = value * 2
    } else {
      newTotal = newTotal - value
    }

    if (arrows - 1 == 0) {
      setTour(tour + 1)
      setArrows(3)
    } else {
      setArrows(arrows - 1)
    }


    if (newTotal > 0) {
      setTotal(newTotal)
      setHistorique ([...historique, newValue])
    } else if (newTotal == 0) {
      alert('Bravo vous avez gagné')
      setTotal(501)
    } else {
      setTour(tour + 1)
      setArrows(3)
      alert('Vous avez dépassé le score')
    }




    setIsDouble(false)
    setIsTriple(false)
  }


  const double = () => {
    setIsDouble(!isDouble)
    setIsTriple(false)
  }

  const triple = () => {
    setIsTriple(!isTriple)
    setIsDouble(false)
  }

  const annuler = () => {
    if (historique.length > 0) {
      let newTotal = total + historique[historique.length - 1]
      setTotal(newTotal)
      setHistorique(historique.slice(0, historique.length - 1))
      setTour (Math.ceil(historique.length / 3))

      if (arrows != 3) {
        setArrows(arrows + 1)
      } else{
        setArrows(1)
      }
    }
  }

  return (
    <>
      <div className="dartboard-container">

        <div className='resultat'>{total}</div>
        <div className='arrows'>
          {arrows == 3 && <>
          <img className='arrow-img' src={arrowImg} alt='arrow' />
          <img className='arrow-img' src={arrowImg} alt='arrow' />
          <img className='arrow-img' src={arrowImg} alt='arrow' />
        </>}

        {arrows == 2 && <>
          <img className='arrow-img' src={arrowImg} alt='arrow' />
          <img className='arrow-img' src={arrowImg} alt='arrow' />
        </>}

        {arrows == 1 && <>
          <img className='arrow-img' src={arrowImg} alt='arrow' />
        </>}

        </div>
        <div className='resultat'>Tour: {tour}</div>



        {/*chaque bouton faire un OnClick qui appelle la fonction de soustraction */}
        <div className='d-flex gap-3'>
          <Button onClick={() => soustraction(1)}>1</Button>
          <Button onClick={() => soustraction(2)} >2</Button>
          <Button onClick={() => soustraction(3)}>3</Button>
          <Button onClick={() => soustraction(4)}>4</Button>
          <Button onClick={() => soustraction(5)}>5</Button>
        </div>

        <div className='d-flex gap-3'>
          <Button onClick={() => soustraction(6)}>6</Button>
          <Button onClick={() => soustraction(7)}>7</Button>
          <Button onClick={() => soustraction(8)}>8</Button>
          <Button onClick={() => soustraction(9)}>9</Button>
          <Button onClick={() => soustraction(10)}>10</Button>
        </div>

        <div className='d-flex gap-3'>
          <Button onClick={() => soustraction(11)}>11</Button>
          <Button onClick={() => soustraction(12)}>12</Button>
          <Button onClick={() => soustraction(13)}>13</Button>
          <Button onClick={() => soustraction(14)}>14</Button>
          <Button onClick={() => soustraction(15)}>15</Button>
        </div>

        <div className='d-flex gap-3'>
          <Button onClick={() => soustraction(16)}>16</Button>
          <Button onClick={() => soustraction(17)}>17</Button>
          <Button onClick={() => soustraction(18)}>18</Button>
          <Button onClick={() => soustraction(19)}>19</Button>
          <Button onClick={() => soustraction(20)}>20</Button>
        </div>

        <div className='d-flex gap-3'>
          <Button onClick={() => soustraction(0)} variant='danger'>0</Button>
          <Button onClick={() => soustraction(25)} disabled={isTriple == true ? true : false} variant='success'>25</Button>
          <Button onClick={double} variant={isDouble == true ? 'warning' : 'info'} >DOUBLE</Button>
          <Button onClick={triple} variant={isTriple == true ? 'warning' : 'info'}>TRIPLE</Button>
          <Button onClick={annuler} variant='danger'>ANNULER</Button>
        </div>


      </div>






    </>
  )
}

export default App
