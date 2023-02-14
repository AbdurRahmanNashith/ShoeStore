import React from 'react'
import "./Categories.scss"
import { Link } from 'react-router-dom'

const cat = () => {
  return (
    <div className='Categories'>
      <div className="col">
        <div className="row">
            <img src="https://images.pexels.com/photos/7330204/pexels-photo-7330204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""></img>
        <button>
            <Link className="link" to="/products/1"> Men</Link>
        </button>
        </div>
        <div className="row">
        <img src="https://images.pexels.com/photos/8457630/pexels-photo-8457630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""></img>
        <button>
            <Link className="link" to="/products/1"> kids</Link>
        </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
        <img src="https://images.pexels.com/photos/8989571/pexels-photo-8989571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""></img>
        <button>
            <Link className="link" to="/products/1"> women</Link>
        </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
            <div className="col">
                <div className="row">
                <img src="https://images.pexels.com/photos/3852560/pexels-photo-3852560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""></img>
        <button>
            <Link className="link" to="/products/1"> bags</Link>
        </button>
                </div>
            </div>
            <div className="col">
                <div className="row">
                <img src="https://images.pexels.com/photos/8718338/pexels-photo-8718338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""></img>
        <button>
            <Link className="link" to="/products/1"> Jackets</Link>
        </button>
                </div>
            </div>
        </div>
        <div className="row">
        <img src="https://images.pexels.com/photos/7679471/pexels-photo-7679471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""></img>
        <button>
            <Link className="link" to="/products/1">accessories</Link>
        </button>
        </div>
      </div>
    </div>
  )
}

export default cat
