

const ContactUs = () => {
  return (
    <section className="grid justify-center m-auto w-6/12 mt-[4rem]">
        <h1 className="text-center">Contact Us</h1>
        <form action="" className="grid mx-auto">
          <input type="text" placeholder="name" className="p-2 my-5 border border-gray-200 outline-none rounded-md" />
          <input type="text" placeholder="message" className="p-2 border border-gray-200 outline-none rounded-md mb-5  w-[30rem] h-auto"  />
        </form>
        <button className="py-2 px-4 bg-blue-400">Submit</button>
    </section>
  )
}

export default ContactUs