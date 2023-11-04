import React from 'react'

export default function About(props) {
  let myStyle = {
    color: props.mode === 'dark' ? 'white' : 'black',
    backgroundColor: props.mode === 'dark' ? '#252f3e' : 'white'
  }

  return (
    <>
      <div className='container my-4' style={myStyle}>
        <h1>About Us</h1>
        <div  >
          <div className="accordion my-3" id="accordionExample" >
            <div className="accordion-item  " style={myStyle} >
              <h2 className="accordion-header">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <strong> Analyze Your Text </strong>
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, sit temporibus aspernatur in, laudantium adipisci rerum quasi maiores blanditiis dolores a distinctio fugit porro fugiat?
                </div>
              </div>
            </div>
            <div className="accordion-item" style={myStyle}>
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  <strong> Free to use </strong>
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio adipisci at ad ducimus ipsa laudantium! Ab dolore, quod iusto omnis maxime quaerat possimus alias laborum, totam nobis reprehenderit architecto odit quas quam veniam magni quia consequatur, non facere numquam culpa! Obcaecati sed consectetur possimus veniam?
                </div>
              </div>
            </div>
            <div className="accordion-item" style={myStyle}>
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  <strong>Read More </strong>
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt maiores nulla accusantium, illum enim doloribus similique, quidem distinctio eligendi, magnam nihil vero animi eos officiis libero nemo totam repudiandae accusamus. Suscipit totam facere corrupti accusamus deleniti sapiente. Fuga, alias quaerat quidem, repudiandae aliquid vero quo nostrum libero repellendus aspernatur neque obcaecati et voluptatum voluptate cum.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
