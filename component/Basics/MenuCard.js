import React from 'react'

const MenuCard = ({menuData}) => {
    // console.log(menuData)
  return (
    <>
        <section className="main-card--cointainer">
            {menuData.map((curElem) => {
                return(
                    <>
                        <div className="card-container" key = {curElem.id}>
                            <div className="card">
                              <div className="card-body">
                                <span className="card-number card-circle sublte">{curElem.id}</span>
                                <span className="card-author sublte">{curElem.name}</span>
                                <h2 className="card-title">{curElem.name}</h2>
                                <span className="card-description subtle">
                                {curElem.description}
                                </span>
                                <div className="card-read">{curElem.id}</div>
                                <img src={curElem.image} alt="images" className="card-media" /> 
                                <span className="card-tag subtle">Order Now</span>
                              </div>
                            </div>
                        </div>
                    </>
                )
            })}
        </section>
    </>
  )
}

export default MenuCard