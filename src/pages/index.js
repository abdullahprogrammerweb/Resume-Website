import CustomLink from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex fixed w-full justify-between items-center p-[-15px ] bg-[#A7727D]">
        <div className="flex justify-center items-center md:order-2">
          <div id="On" className="hamburger md:hidden  ">
            <div className="line h-1 w-6 my-2  bg-black" />
            <div className="line h-1 w-6 my-2  bg-black" />
            <div className="line h-1 w-6 my-2  bg-black" />
          </div>
        </div>

        <div className=" md:order-1 flex gap-3 hover:text-red-200   cursor-pointer text-white font-thin text-2xl mx-5">
          <Image
            alt="image"
            src="/la.png"
            width={70}
            height={70}
            className="rounded-full"
          ></Image>
        </div>

        {/* navbar start */}
        <div className="logo md:order-1 = flex justify-center item-center  ">
          <div className="text-md gap-5  feature sticky  text-white md:-translate-x-0 md:static md:w-auto inset-0 md:flex md:items-center md:mx-10 md:space-x-3  -translate-x-96">
            <div className="How It Work hover:text-red-200  cursor-pointer">
              Home
            </div>
            <div className="Apply hover:text-red-200   hover:cursor-pointer">
              About
            </div>
            <div className="Available Program hover:text-red-200  cursor-pointer">
              Skills
            </div>
            <div className="About hover:text-red-200  cursor-pointer">
              Experience
            </div>
            <div className="About hover:text-red-200  cursor-pointer">
              Contact
            </div>
          </div>
        </div>
      </div>
      {/* navbar end */}

      {/* slider start */}
      {/*   {/* No we are In the slider */}
      <div className=" container   flex lg:mx-10  ">
        <div className="container  bg-[#EDDBC7]  flex flex-col-reverse justify-center items-center  md:flex-row   text-white    ">
          <div className="left flex flex-col      py-2  m-5 mt-5">
            <h1 className=" mt-20 text-4xl  text-black  py-2  font-serif mx-4">
              Mohummad Abdullah
            </h1>

            <span className=" text-black py-3 font-sans mx-4   ">
              I am inspired by the interaction with computers and tech gadgets
              to become a Successful, Passionate, and Self-taught Freelance
              Website Designer, UI/UX Designer, and Graphic Designer. Since
              then, I have pursued my passion and strived to live the life I
              imagined. In order to achieve this, I have started learning UI/UX
              Design and Web Design. To date, I have learned HTML 5, CSS 3,
              Tailwind CSS, JavaScript, Figma, Canva
            </span>
            <CustomLink href="https://www.piaic.org/">
              {" "}
              <button className="  mx-4 hover:bg-red-400 bg-[#0067b8] text-white rounded h-10 w-20 my-5 ">
                Hire Me
              </button>
            </CustomLink>
          </div>
          <div className="right mt-20  text-black  ">
            <Image
              alt="image"
              src="/home.png"
              width={2000}
              height={4000}
            ></Image>
          </div>
        </div>
      </div>

      {/* Now we are in the Promo */}
      <div className="promo  rounded  lg:mx-10 lg:mr-[1.5rem]  flex flex-col  space-y-5 md:flex-row  md:justify-center lg:justify-center sm:justify-center bg-[#EDDBC7]  ">
        {/* div */}
        <div className="item  flex items-center mx-5 text-[#0067b8]  font-medium mt-5">
          <Image
            alt="image"
            src="/Start/Meta.png"
            width={40}
            height={40}
          ></Image>
        </div>

        {/* div */}
        <div className="item  mx-5 flex items-center mx text-[#0067b8]  font-medium">
          <Image
            alt="image"
            src="/Start/Block.png"
            width={40}
            height={40}
          ></Image>
        </div>
        {/* div */}
        <div
          className="item  flex items-center mx-5
         text-black font-medium"
        >
          <Image
            alt="image"
            src="/Start/Ai3.png"
            width={40}
            height={40}
          ></Image>
        </div>
        {/* div */}
        <div
          className="item  flex items-center
         mx-5 hover:text-red-400  hover:coursorpointer  cursor-pointer text-[#0067b8] font-medium"
        >
          <Image
            alt="image"
            src="/Start/cloud.png"
            width={40}
            height={40}
          ></Image>
        </div>
      </div>
      {/* now the promo end */}
      {/* slider End */}

      {/* Our card section */}
      <h1 className=" font-mono flex justify-center items-center m-10  capitalize text-2xl font-">
        About Me
      </h1>
      <hr className="w-1/2 mx-auto mb-10 h-4" />

      {/*  */}
      {/* slider start */}
      {/*   {/* No we are In the slider */}
      <div className=" container   flex lg:mx-10 ">
        <div className="container rounded   flex flex-col-reverse justify-center items-center  md:flex-row   text-white    ">
          <div className="right  text-black   ">
            <Image alt="image" src="/A.png" width={2000} height={4000}></Image>
          </div>
          <div className="left flex flex-col   py-2  m-5 mt-5">
            <h1 className=" text-black text-4xl font-mono py-5 te">
              My Name is Abdullah
            </h1>

            <span className="text-black  py-4 font-sans text-xl ">
              I am inspired by the interaction with computers and tech gadgets
              to become a Successful, Passionate, and Self-taught Freelance
              Website Designer, UI/UX Designer, and Graphic Designer. Since
              then, I have pursued my passion and strived to live the life I
              imagined. In order to achieve this, I have started learning UI/UX
              Design and Web Design. To date, I have learned HTML 5, CSS 3,
              Bootstrap, jQuery, JavaScript, Shopify, WordPress, Unbounce,
              Figma, Canva, Adobe Photoshop, and Adobe Illustrator.
            </span>
            <CustomLink href="https://www.piaic.org/">
              {" "}
              <button className=" font-thin hover:bg-red-300   cursor-pointer text-center bg-[#0067b8] text-white rounded h-10 w-40 my-6 uppercase ">
                Hire me
              </button>
            </CustomLink>
          </div>
        </div>
      </div>
      {/* slider End */}

      {/*  */}
      <div className="   bg-[#F8EAD8]">
        <h1 className="mx-10 mt-10 text-xl">SKILLS</h1>
        <h1 className=" text-6xl font-serif mb-2 mx-10 block">
          My own developer's and design skills.
        </h1>

        <p className="mb-10 mx-10  ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae vel id
          cumque fuga? Nisi, vel cum! Animi soluta sint modi. Est quia minima
          nihil ipsa possimus facilis, quis officia illo!
        </p>

        <div className="progress w-[50%] mx-10  ">
          <div className="flex justify-between ">
            <h1 className="mx-2 uppercase py-3">html </h1>
            <h1 className="mx-2 uppercase py-3"> 85%</h1>
          </div>
          <div class="mb-6 h-3 w-full   bg-neutral-200 dark:bg-neutral-600 rounded solid-border border-2 border-green-400">
            <div class="h-2 bg-green-400  w-[80%] rounded"></div>
          </div>
          <div className="flex justify-between ">
            <h1 className="mx-2 uppercase py-3">CSS </h1>
            <h1 className="mx-2 uppercase py-3"> 70%</h1>
          </div>
          <div class="mb-6 h-3 w-full   bg-neutral-200 dark:bg-neutral-600 rounded solid-border border-2 border-green-400">
            <div class="h-2 bg-green-400  w-[70%] rounded"></div>
          </div>
          <div className="flex justify-between ">
            <h1 className="mx-2 uppercase py-3">javascript </h1>
            <h1 className="mx-2 uppercase py-3"> 90%</h1>
          </div>
          <div class="mb-6 h-3 w-full   bg-neutral-200 dark:bg-neutral-600 rounded solid-border border-2 border-green-400">
            <div class="h-2 bg-green-400  w-[90%] rounded"></div>
          </div>
          <div className="flex justify-between ">
            <h1 className="mx-2 uppercase py-3">React </h1>
            <h1 className="mx-2 uppercase py-3"> 60%</h1>
          </div>
          <div class="mb-6 h-3 w-full   bg-neutral-200 dark:bg-neutral-600 rounded solid-border border-2 border-green-400">
            <div class="h-2 bg-green-400  w-[60%] rounded"></div>
          </div>
          <div className="flex justify-between ">
            <h1 className="mx-2 uppercase py-3">Next.js </h1>
            <h1 className="mx-2 uppercase py-3"> 40%</h1>
          </div>
          <div class="mb-6 h-3 w-full   bg-neutral-200 dark:bg-neutral-600 rounded solid-border border-2 border-green-400">
            <div class="h-2 bg-green-400  w-[40%] rounded"></div>
          </div>
          <div className="flex justify-between ">
            <h1 className="mx-2 uppercase py-3">Figma </h1>
            <h1 className="mx-2 uppercase py-3"> 50%</h1>
          </div>
          <div class="mb-6 h-3 w-full   bg-neutral-200 dark:bg-neutral-600 rounded solid-border border-2 border-green-400">
            <div class="h-2 bg-green-400  w-[50%] rounded"></div>
          </div>
          <div className="flex justify-between  ">
            <h1 className="mx-2 uppercase py-3">Chakraui </h1>
            <h1 className="mx-2 uppercase py-3"> 60%</h1>
          </div>
          <div class="mb-10 h-3 w-full   bg-neutral-200 dark:bg-neutral-600 rounded solid-border border-2 border-green-400">
            <div class="h-2 bg-green-400  w-[60%] rounded"></div>
          </div>
        </div>
      </div>

      <div className=" mt-40 text-center ">
        <h1 className="mx-10 mt-10">PROJECTS</h1>
        <h1 className=" text-6xl font-serif mb-2 mx-10 block">
          My featured projects for my customer
        </h1>
      </div>

      <div class="grid  rounded sm:grid-col-1 md:grid-cols-2  gap-1 justify-center items-center lg:mx-40 ">
        <div class="block max-w-sm rounded-lg bg-[#F7C8E0]  shadow-lg dark:bg-neutral-700 my-10">
          <Image
            alt="image"
            class="rounded-t-lg"
            height={400}
            width={400}
            src="/project/resume.png"
          ></Image>

          <div class="p-6 ">
            <h5 class="mb-2 text-xl font-medium text-center leading-tight text-black dark:text-neutral-50">
              Resume Website
            </h5>
            <p class="mb-4 text-base text-neutral-900 dark:text-neutral-200">
              I create this resume website with animation and fully repsonsive
              for all devices thanks you
            </p>
            <div className="flex justify-center items-center">
              <a href="#" className="text-xl text-blue-900 ">
                See More
              </a>
            </div>
          </div>
        </div>

        <div class="block max-w-sm rounded-lg bg-[#F7C8E0]  shadow-lg text-black my-10">
          <Image
            alt="image"
            class="rounded-t-lg"
            height={400}
            width={400}
            src="/project/pana.png"
          ></Image>

          <div class="p-6 ">
            <h5 class="mb-2 text-xl font-medium text-center leading-tight text-black dark:text-neutral-50">
              My Institude website
            </h5>
            <p class="mb-4 text-base text-neutral-900 dark:text-neutral-200">
              I create my institude website with animation and fully repsonsive
              for all devices thanks you
            </p>

            <div className="flex justify-center items-center">
              <a href="#" className="text-xl text-blue-900 ">
                See More
              </a>
            </div>
          </div>
        </div>

        <div class="block max-w-sm rounded-lg bg-[#F7C8E0]  shadow-lg text-black my-10">
          <Image
            alt="image"
            class="rounded-t-lg"
            height={400}
            width={400}
            src="/project/game.png"
          ></Image>

          <div class="p-6 ">
            <h5 class="mb-2 text-xl font-medium text-center leading-tight text-black dark:text-neutral-50">
              Dragon Game
            </h5>
            <p class="mb-4 text-base text-neutral-900 dark:text-neutral-200">
              I create this Dragon game with animation and fully repsonsive for
              all devices thanks you
            </p>
            <div className="flex justify-center items-center">
              <a href="#" className="text-xl text-blue-900 ">
                See More
              </a>
            </div>
          </div>
        </div>

        <div class="block max-w-sm rounded-lg bg-[#F7C8E0]  shadow-lg dark:bg-neutral-700 my-10 gap-10">
          <Image
            alt="image"
            class="rounded-t-lg"
            height={400}
            width={400}
            src="/project/window.png"
          ></Image>

          <div class="p-6 ">
            <h5 class="mb-2 text-xl font-medium text-center leading-tight text-blackdark:text-neutral-50">
              Window 11 landing page
            </h5>
            <p class="mb-4 text-base text-neutral-900 dark:text-neutral-200">
              I create this window 11 landing page with animation and fully
              repsonsive for all devices thanks you
            </p>
            <div className="flex justify-center items-center">
              <a href="#" className="text-xl text-blue-900 ">
                See More
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="sub footer bg-[#EDDBC7] w-full">
        <h1 className="font-mono text-center mt-10 mb-5 capitalize text-2xl font-thin">
          Interests
        </h1>
        <hr className="w-1/2 mx-auto" />
        <div className="subfooter flex items-center sm:flex-row flex-col  gap-2 justify-around mt-10">
          <div>
            <Image
              alt="image"
              src="/intrest/g.png"
              width={100}
              height={100}
            ></Image>
            <p className="text-centre text-xl font-thin uppercase mt-4">
              Gaming
            </p>
          </div>
          <div>
            <Image
              src="/intrest/m.png"
              width={100}
              height={100}
              alt="background image"
            />
            <p className="text-centre text-xl font-thin uppercase mt-4">
              Movie
            </p>
          </div>
          <div>
            <Image
              src="/intrest/c.png"
              width={100}
              height={100}
              alt="background image"
            />
            <p className="text-centre text-xl font-thin uppercase mt-4">
              Cricket
            </p>
          </div>
          <div>
            <Image alt="image" src="/intrest/t.png" width={100} height={100} />
            <p className="text-centre text-xl font-thin uppercase mt-4">
              Traveling
            </p>
          </div>
        </div>
      </div>

      {/*  */}
      <h1 className=" flex  text-black text-4xl font-mono py-5 text-center justify-center items-center m-20">
        My Services
      </h1>
      <div class="grid bg-[#61C0BF  ] rounded lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 items-center gap-4 ] justify-center m-20  mt-5">
        <div class="block max-w-sm rounded-lg bg-[#FFE7CC] shadow-lg dark:bg-neutral-700">
          <div className="flex justify-center items-center">
            <a href="#">
              <Image
                alt="image"
                src="/ser/coding.png"
                width={90}
                height={90}
              ></Image>
            </a>
          </div>
          <div class="p-6">
            <h5 class="mb-2 text-xl text-center m-2 font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Website Development
            </h5>
            <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              The web development process involves taking the graphical elements
              defined in the design process and coding them into a custom
              Wordpress theme.
            </p>
          </div>
        </div>

        <div class="block max-w-sm rounded- bg-[#FFE7CC] shadow-lg dark:bg-neutral-700">
          <div className="flex justify-center items-center">
            <a href="#">
              <Image
                alt="image"
                src="/ser/ui.png"
                width={90}
                height={90}
              ></Image>
            </a>
          </div>
          <div class="p-6">
            <h5 class="mb-2 text-xl text-center m-2 font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Website Design
            </h5>
            <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Our approach to website design is to create a website that
              strengthens your company’s brand while ensuring ease of use and
              simplicity for your audience.
            </p>
          </div>
        </div>
        <div class="block max-w-sm rounded- bg-[#FFE7CC] shadow-lg dark:bg-neutral-700">
          <div className="flex justify-center items-center">
            <a href="#">
              <Image
                alt="image"
                src="/ser/responsive.png"
                width={90}
                height={90}
              ></Image>
            </a>
          </div>
          <div class="p-6">
            <h5 class="mb-2 text-xl text-center m-2 font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Responsive Website Design
            </h5>
            <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Having a responsive layout means that your website fluidly resizes
              for optimal viewing regardless of the screen size or device (e.g.
              iPhone, iPad).
            </p>
          </div>
        </div>

        <div class="block max-w-sm rounded- bg-[#FFE7CC] shadow-lg dark:bg-neutral-700">
          <div className="flex justify-center items-center">
            <a href="#">
              <Image
                alt="image"
                src="/ser/dev.png"
                width={90}
                height={90}
              ></Image>
            </a>
          </div>
          <div class="p-6">
            <h5 class="mb-2 text-xl text-center m-2 font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              SEO (Search Engine Optimisation) Training
            </h5>
            <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              We offer customised SEO (Search Engine Optimisation) training to
              ensure your website is rising the ranks in Google and staying at
              the top.
            </p>
          </div>
        </div>

        <div class="block max-w-sm rounded- bg-[#FFE7CC] shadow-lg dark:bg-neutral-700">
          <div className="flex justify-center items-center">
            <a href="#">
              <Image
                alt="image"
                src="/ser/sec.png"
                width={90}
                height={90}
              ></Image>
            </a>
          </div>
          <div class="p-6">
            <h5 class="mb-2 text-xl text-center m-2 font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Website Security Maintenance & Updates
            </h5>
            <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              If your website is built with developer it's crucial to keep the
              developer to up-to-date to eliminate vulnerabilities.
            </p>
          </div>
        </div>

        <div class="block max-w-sm rounded- bg-[#FFE7CC] shadow-lg dark:bg-neutral-700">
          <div className="flex justify-center items-center">
            <a href="#">
              <Image
                alt="image"
                src="/ser/c-t.png"
                width={90}
                height={90}
              ></Image>
            </a>
          </div>
          <div class="p-6">
            <h5 class="mb-2 text-xl text-center m-2 font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Photo Edit
            </h5>
            <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Nicholas Grundy is available to travel to any location for your
              desired photo shoot. All types of photography can be created for
              your website.
            </p>
          </div>
        </div>

        <div class="block max-w-sm rounded- bg-[#FFE7CC] shadow-lg dark:bg-neutral-700">
          <div className="flex justify-center items-center">
            <a href="#">
              <Image
                alt="image"
                src="/ser/l-d.png"
                width={90}
                height={90}
              ></Image>
            </a>
          </div>
          <div class="p-6">
            <h5 class="mb-2 text-xl text-center m-2 font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Logo Design
            </h5>
            <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Our goal is to design a professional yet creative logo that
              reflects your company’s spirit and leaves a lasting, memorable
              effect.
            </p>
          </div>
        </div>

        <div class="block max-w-sm rounded- bg-[#FFE7CC] shadow-lg dark:bg-neutral-700">
          <div className="flex justify-center items-center">
            <a href="#">
              <Image
                alt="image"
                src="/ser/ui.png"
                width={90}
                height={90}
              ></Image>
            </a>
          </div>
          <div class="p-6">
            <h5 class="mb-2 text-xl text-center m-2 font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Social Media Integration
            </h5>
            <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Social media integration enables your website to post updates to
              Facebook, displays a Twitter feed, and links to your social media
              accounts.
            </p>
          </div>
        </div>

        <div class="block max-w-sm rounded-lg  bg-[#FFE7CC] shadow-lg dark:bg-neutral-700">
          <div className="flex justify-center items-center">
            <a href="#">
              <Image
                alt="image"
                src="/ser/photgraphy.png"
                width={90}
                height={90}
              ></Image>
            </a>
          </div>
          <div class="p-6">
            <h5 class="mb-2 text-xl text-center m-2 font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Responsive Website Design
            </h5>
            <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Having a responsive layout means that your website fluidly resizes
              for optimal viewing regardless of the screen size or device (e.g.
              iPhone, iPad).
            </p>
          </div>
        </div>
      </div>
      {/*  */}

      {/*   {/* No we are In the slider */}
      <div className="  rounded-full container   flex lg:mx-10 ">
        <div className="container  bg-[#A7727D] flex flex-col-reverse justify-center items-center  md:flex-row   text-white    ">
          <div className="right  text-black ">
            <Image alt="image" src="/lo.png" width={2000} height={4000}></Image>
          </div>
          <div className="left flex flex-col      py-2  m-5 mt-5">
            <h1 className=" text-black text-4xl font-mono py-5 te">
              Achievements
            </h1>

            <span className="text-black bgpin py-4 font-sans text-xl ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. At quas
              eveniet dolorem aliquam facere quo, tempore velit architecto,
              porro, saepe numquam modi ullam molestiae vero. Voluptas commodi
              ipsam beatae aspernatur?
            </span>
            <CustomLink href="https://www.piaic.org/">
              {" "}
              <button className=" font-thin hover:bg-red-300   cursor-pointer text-center bg-[#0067b8] text-white rounded h-10 w-40 my-6 uppercase ">
                See more
              </button>
            </CustomLink>
          </div>
        </div>
      </div>
      {/* slider End */}

      {/*  */}
      <footer>
        <footer className="sub footer  rounded w-full  bg-[#EDDBC7] ">
          <h1 className="font-mono text-center mt-10 mb-5 capitalize text-2xl font-thin">
            Contact us
          </h1>
          <hr className="w-1/2 mx-auto" />

          <div className="flex  items-center justify-around m-20 gap-y-4 lg:flex-row  flex-col">
            <div className="flex justify-center rounded-full shadow-lg items-center bg-gray-200 w-56 h-56">
              <div className="flex justify-center items-center">
                <Image
                  alt="image"
                  src="/github.png"
                  width={100}
                  height={100}
                ></Image>
              </div>
            </div>
            <div className="flex justify-center rounded-full shadow-lg items-center bg-gray-200 w-56 h-56">
              <div className="flex justify-center items-center">
                <Image
                  alt="image"
                  src="/facebook.png"
                  width={100}
                  height={100}
                ></Image>
              </div>
            </div>
            <div className="flex justify-center rounded-full shadow-lg items-center bg-gray-200 w-56 h-56">
              <div className="flex justify-center items-center">
                <Image
                  alt="image"
                  src="/icon/what.png"
                  width={100}
                  height={100}
                ></Image>
              </div>
            </div>
            <div className="flex justify-center rounded-full shadow-lg items-center bg-gray-200 w-56 h-56">
              <div className="flex justify-center items-center">
                <Image
                  alt="image"
                  src="/icon/link.png"
                  width={100}
                  height={100}
                ></Image>
              </div>
            </div>
          </div>
        </footer>

        <div className="rounded flex justify-center items-center">
          <Image alt="image" src="/la.png" width={200} height={200}></Image>
        </div>

        <div className="link-col h-14 bg-[#A7727D] text-white mt-30  p-14 rounded">
          <h1 className="  text-xl flex justify-center items-center ">
            Created by Abdullah
          </h1>
          <h1 className=" flex justify-center items-center">
            {" "}
            Copyright © 2023 Abdullah Freelance Web Designer & Developer
          </h1>
        </div>
      </footer>
    </>
  );
}
