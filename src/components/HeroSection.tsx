export default function HeroSection() {
  return (
    <>
      <div className="bg-[#facf41] text-black h-screen flex flex-col p-8 pt-20">
        <div className="container mx-auto">
          <div className="w-fit ">
            <div className="text-6xl md:text-8xl">ORDINARY IS TAKEN.</div>
            <div className="text-6xl md:text-8xl">WANT SOMETHING ELSE?</div>
            <div className="text-2xl text-right pt-2">
              THAMBA. CREATIVE AGENCY
            </div>
          </div>
          <div className="pt-5 w-full md:w-2/3 font-light">
            <div className="text-2xl md:text-5xl">WHAT WE DO</div>
            <div className="text-xl md:text-3xl pt-5">
              We are a creative design studio where we build brands that look
              sharp, feel right, and make noise. From strategy to design, we
              craft everything you need to stand out.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
