import React from 'react'



const Insurance = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <div>
        <img src="../Assets/Insurance/section1.png" className=' h-[75vh]' />
        </div>
        <div className='flex flex-col bg-[#FFDDCC] text-white w-full justify-center items-center p-20 mt-5'>
            <h2 className='text-4xl font-bold'>🐶Love by 1000+ parents🐶</h2>
            <br/>
            <h4>💗YOUR SAFE PLACE💗</h4>
        </div>

        <div>
        <div className="flex flex-col items-center p-8 space-y-8">
      <h1 className="text-3xl font-bold text-center">
        India’s #1 Online <span className="text-red-400">Dog Insurance</span> for Dogs
      </h1>
      <p className="text-xl text-center">
        Get Pet Insurance in <span className="font-bold">3</span> Simple Steps
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Step 1 */}
        <div className="card w-96 bg-base-100 shadow-xl p-6">
          <div className="flex justify-center mb-4">
            <div className="badge badge-secondary text-xl">1</div>
          </div>
          <figure>
            <img
              src="../Assets/Insurance/1.png"
              alt="Step 1 Illustration"
              className="h-36 w-28"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Enroll your Pet</h2>
            <p>
              Enter your details and your pet’s details like age & breed.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="card w-96 bg-base-100 shadow-xl p-6">
          <div className="flex justify-center mb-4">
            <div className="badge badge-secondary text-xl">2</div>
          </div>
          <figure>
            <img
              src="../Assets/Insurance/2.png"
              alt="Step 2 Illustration"
              className="h-36 w-28"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Choose a Plan</h2>
            <p>
              Check the basic plan that covers surgeries, OPD, hospitalization, and more.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="card w-96 bg-base-100 shadow-xl p-6">
          <div className="flex justify-center mb-4">
            <div className="badge badge-secondary text-xl">3</div>
          </div>
          <figure>
            <img
              src="../Assets/Insurance/3.png"
              alt="Step 3 Illustration"
              className="h-36 w-28"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Select Add-ons</h2>
            <p>
              Select your preferred add-on and get maximum coverage of up to 1 lac.
            </p>
          </div>
        </div>
      </div>
    </div>
        </div>

        <div>
        <img src="../Assets/Insurance/section3.png" className=' h-full w-full m-0' />
        </div>
        <div>
        <img src="../Assets/Insurance/section4.png" className=' h-full w-full mt-5 mb-5' />
        </div>
        <div className='flex flex-col  text-[#FFDDCC] w-full justify-center items-center p-20'>
            <h4>💗YOUR SAFE PLACE💗</h4>
        </div>
        <div>
        <img src="../Assets/Insurance/section5.jpg" className=' h-[75vh] w-full mt-5 mb-5' />
        </div>

        <div className="flex flex-col items-center p-8 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1 */}
        <div className="card bg-base-100 shadow-xl p-6 border">
          <div className="card-body">
            <h2 className="card-title text-red-400">Unexpected Vet Bills</h2>
            <h3 className="text-2xl font-bold">Stressing You?</h3>
            <p>
              One visit to the veterinarian can cost you thousands in one go.
              Luckily, we have an add-on for you that’ll save you this expense.
              With our veterinary consultation and doctor-on-call cover, all
              your consultation fees will be taken care of.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card bg-base-100 shadow-xl p-6 border">
          <div className="card-body">
            <h2 className="card-title text-red-400">Dog Bit Someone</h2>
            <h3 className="text-2xl font-bold">Accidentally?</h3>
            <p>
              Your dog can sometimes harm public property or hurt another human
              being. It’s not their fault, as they lack the human sense of
              judgment. But you don’t! Opt for the liability cover and stay
              protected against any third-party damage.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card bg-base-100 shadow-xl p-6 border">
          <div className="card-body">
            <h2 className="card-title text-red-400">Easing</h2>
            <h3 className="text-2xl font-bold">Pet Parenting</h3>
            <p>
              With our policy in place, you can know that your dog's care
              expenses will be taken care of. Our coverage will help you secure
              the services of a minder/caretaker, so your furry friend receives
              the best possible protection.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="card bg-base-100 shadow-xl p-6 border">
          <div className="card-body">
            <h2 className="card-title text-red-400">Lost Your</h2>
            <h3 className="text-2xl font-bold">Pet?</h3>
            <p>
              Your dog can sometimes wander off and get lost or may get stolen
              from you. We’ll help you cover the cost of finding your dog, so
              you can quickly get them back.
            </p>
          </div>
        </div>
      </div>
    </div>
{/* next section*/}

    <div className="hero text-[#b09588] rounded-lg shadow-lg mb-10 h-[75vh]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img 
            src="../Assets/Insurance/section6.jpg" 
            className="max-w-sm rounded-lg shadow-2xl" 
            alt="Dog" 
          />
          <div>
          <h2 className='text-4xl font-bold'>CUSTOMIZE YOU DOG INSURANCE PLAN ACCORDING TO YOUR NEED</h2>
          <p>Make the best plan with our specialists advice</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center p-8 space-y-8">
      <h1 className="text-3xl font-bold text-center">
        Your Guide To Make An Informed Decision
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="card bg-base-100 shadow-xl p-6 border">
          <div className="card-body">
            <h2 className="card-title font-bold">Is Dog Insurance Worth It?</h2>
            <p>
              Dog insurance can be a valuable investment as it can help cover
              the cost of unexpected veterinary expenses, such as accidents or
              illnesses. This can provide peace of mind and financial protection
              for pet owners.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card bg-base-100 shadow-xl p-6 border">
          <div className="card-body">
            <h2 className="card-title font-bold">How Will I Get Paid For A Claim?</h2>
            <p>
              Our aim is to provide fast and efficient claims service to ensure
              payment to you for any valid claim as quickly as possible. Approved
              claims will be paid directly to your account.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card bg-base-100 shadow-xl p-6 border">
          <div className="card-body">
            <h2 className="card-title font-bold">Can I Go To Any Vet?</h2>
            <p>
              You can go to any vet you like in India. We won't interfere with
              your veterinary visits as long as they're licensed to provide
              veterinary care.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="card bg-base-100 shadow-xl p-6 border">
          <div className="card-body">
            <h2 className="card-title font-bold">Can I Cancel My Policy At Any Time?</h2>
            <p>
              You can cancel your policy at any time with 30 days' written
              notice. Note: Pre-existing conditions will not be covered in the
              future policy.
            </p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="card bg-base-100 shadow-xl p-6 border">
          <div className="card-body">
            <h2 className="card-title font-bold">Are The Claims Available Outside India?</h2>
            <p>
              The cover provided under this policy is restricted to claims
              occurring in India. The obligation of the company to make a
              payment shall be in Indian Rupees only.
            </p>
          </div>
        </div>

        {/* Card 6 */}
        <div className="card bg-base-100 shadow-xl p-6 border">
          <div className="card-body">
            <h2 className="card-title font-bold">Are There Any Exclusions In The Policy?</h2>
            <p>
              Yes, there are exclusions in the policy, like pre-existing
              conditions, cosmetic procedures, etc. But our comprehensive
              coverages include a lot more to safeguard your dog's health.
            </p>
          </div>
        </div>

        {/* Card 7 */}
        <div className="card bg-base-100 shadow-xl p-6 border">
          <div className="card-body">
            <h2 className="card-title font-bold">
              What Are Pre-Existing Conditions & Are They Covered?
            </h2>
            <p>
              Anything your pet has shown signs of before you opt for the policy
              is considered a pre-existing condition. We don’t cover pre-existing
              conditions currently, but we’ve got your back for future illnesses
              or accidents.
            </p>
          </div>
        </div>

        {/* Card 8 */}
        <div className="card bg-base-100 shadow-xl p-6 border">
          <div className="card-body">
            <h2 className="card-title font-bold">
              Is There Any Entry Age Limits For Dog Insurance?
            </h2>
            <p>
              Eligibility Criteria: Small, Medium, and Large Breeds Entry Age -
              6 months onwards up to age of 7 years Exit Age - 10 years Giant
              Breeds Entry Age - 6 months onwards up to age of 4 years Exit Age
              - 6 years
            </p>
          </div>
        </div>

        {/* Card 9 */}
        <div className="card bg-base-100 shadow-xl p-6 border">
          <div className="card-body">
            <h2 className="card-title font-bold">
              What Happens After You Enroll For PawsIndia Dog Health Insurance?
            </h2>
            <p>
              Once you have purchased the policy, you will receive the policy
              schedule, premiums receipt, policy coverage, and terms & conditions, etc.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div>
        <img src="../Assets/Insurance/section7.png" className=' h-[75vh] w-full mt-5 mb-5' />
        </div>

    </div>

  )
}

export default Insurance
