

const AddDoctor = () => {




  const handleSubmit = (event) => {
    event.preventDefault()



    const form = event.target;
    // const name = form.name.value;
    // const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)




  }
  return (
    <div>

      {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

<section className="bg-gray-100">
  <div className=" w-3/5 mx-auto max-w-screen px-4 py-6 sm:px-6 lg:px-8">
<h2 className="text-3xl font-bold py-4">Add a Doctor</h2>
   

      <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
        <form onSubmit={handleSubmit} action="" className="space-y-4">
          <div>
            <label className="sr-only" htmlFor="name">Name</label>
            <input
              className="w-full rounded-lg border-2 border-gray-200 p-3 text-sm"
              placeholder="Name"
              type="text"
              id="name"
            />
          </div>
          <div>
              <label className="sr-only" htmlFor="phone">Expertise</label>
              <input
                className="w-full rounded-lg border-2 border-gray-200 p-3 text-sm"
                placeholder="e.g: BDS, MDS - Periodontics"
                type="text"
                id="phone"
              />
            </div>
          <div>
              <label className="sr-only" htmlFor="Chamber">Chamber</label>
              <input
                className="w-full rounded-lg border-2 border-gray-200 p-3 text-sm"
                placeholder="e.g: 406 no room , Popular , DhaKa"
                type="text"
                name="chamber"
              />
            </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" htmlFor="email">Email</label>
              <input
                className="w-full rounded-lg border-2 border-gray-200 p-3 text-sm"
                placeholder="Email address"
                type="email"
                name="email"
                id="email"
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="phone">Phone</label>
              <input
                className="w-full rounded-lg border-2 border-gray-200 p-3 text-sm"
                placeholder="Phone Number"
                type="tel"
                name="number"
                id="phone"
              />
            </div>
           
          </div>

         
            <div>
            <label className="sr-only" htmlFor="phone">Phone</label>
              <input
               className="w-full rounded-lg border-2 border-gray-200 p-3 text-sm"
                placeholder="e.g : Teeth Orthodontics"
                type="text"
                tabIndex="-1"
                name="specialize"
              />
            </div>

          

          <div>
            <label className="sr-only" htmlFor="message">About</label>

            <textarea
              className="w-full rounded-lg border-2 border-gray-200 p-3 text-sm"
              placeholder="About yourself"
              rows="8"
              id="message"
            ></textarea>
          </div>
          <div>
            <label className="sr-only" htmlFor="image">Image</label>

        <input type="file" name="image" className="w-full  rounded-lg border-2 border-gray-200 p-3 text-sm" id="" />
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="inline-block w-full rounded-lg bg-green-800 hover:bg-green-700 px-5 py-3 font-medium text-white max-w-full"
            >
              ADD
            </button>
          </div>
        </form>
      </div>
    {/* </div> */}
  </div>
</section>


    </div>
  );
};

export default AddDoctor;