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
                  Welcome to Texttinker, your go-to tool for transforming text effortlessly! We understand the power of words and how they can shape your message. With Texttinker, we empower you to analyze and modify text to suit your needs, providing a versatile platform for enhancing your communication.
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
                  Texttinker is committed to making text transformation accessible to everyone. That's why we've made our tool completely free to use. No hidden fees, no subscriptions – just a simple and powerful text manipulation tool at your fingertips. Whether you're a student, professional, or casual user, Texttinker is here for you, providing a seamless experience without any cost barriers.
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
                  Curious to explore the features and capabilities of Texttinker further? Our 'Read More' section is designed just for you. Dive into in-depth guides, tutorials, and tips on how to make the most of our tool. Discover advanced techniques, explore creative applications, and unlock the full potential of text transformation. We're not just a tool; we're your partner in crafting compelling content. Join us on this linguistic journey with Texttinker, where words transform and ideas come to life. Let your creativity flow as you analyze, enjoy the freedom of our free-to-use platform, and delve deeper into the possibilities with our 'Read More' section. Texttinker – where text meets innovation!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
