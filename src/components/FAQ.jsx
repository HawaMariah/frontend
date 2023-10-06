import React from 'react'

function FAQ() {
  return (
    <div >
     
 <section style={{backgroundColor:'#7E8F90'}} class="mb-24 text-center">
    <div class="flex justify-center object-fill">
      <div class="">
        <h2 style={{fontColor:"white"}} class="mb-12 ml-2 mt-2 text-5xl text-white font-bold tracking-tight md:text-6xl xl:text-7xl">
          FAQs 
           </h2>
           
       
      </div>
    </div>
  </section>


<div class="container mt-2 my-24 mx-auto md:px-3">
  
  <section class="mb-32">
    <div class="grid gap-4 md:grid-cols-3">
      <div style={{backgroundColor:'#7E8F90'}} class="mb-6 md:mb-0">
        <h2 class="mb-16 mt-20 ml-4 text-4xl text-white  ">DELIVERY</h2>
        <h2 class="mb-16 ml-4 text-4xl text-white  ">ACCOUNT</h2>
        <h2 class="mb-16 ml-4 text-4xl text-white ">FIND US</h2>
        <h2 class="mb-16 ml-4 text-4xl text-white ">JOIN US</h2>
        <h2 class="mb-16 ml-4 text-4xl text-white ">REGISTRATION</h2>


      </div>

      <div class="mb-6 md:mb-0 col-span-2">
        <p class="mb-4 mt-16 font-bold text-black text-3xl">How often are meals distributed?</p>
        <p class="mb-12 text-black ">
        Meal distribution schedules may vary. Typically, we aim to provide meals on a [specific frequency, e.g., daily, weekly]. Please refer to our program events updates.
        </p>

        <p class="mb-4 font-bold text-black text-3xl">How can I sign up for the feeding program?</p>
        <p class="mb-12 text-black ">
        To sign up for our feeding program, please visit our registration page on our website and follow the instructions provided.
        </p>

        <p class="mb-4 font-bold text-black text-3xl">
        How can I get in touch with the program organizers for additional questions?
        </p>
        <p class="mb-12 text-black">
        You can reach out to us via email at info@nourishnow.org . We're here to help with any further inquiries you may have.
        </p>
        
      </div>
      
       
    </div>
    <p class=" flex justify-center mt-11 font-bold text-black text-2xl">
       If you have any more queries reach via our contact page
        </p>
    
  </section>

</div>

      
    </div>
  )
}

export default FAQ
