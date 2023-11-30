import "./App.css";
import HeroCarousel from "./components/heroCarousel";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { UserContext } from "./context/UserContext";
function App() {
  const { userState } = useContext(UserContext);

  return (
    <div>
      {/* Hero Section */}
      <HeroCarousel />
      <section className="hero flex flex-col w-full ">
        <div className="hero-content text-center text-white flex flex-col justify-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">
            MAKE SOME NOISE AND THE WORLD WILL LISTEN
          </h1>
          <div className="container mx-auto text-center">
            <p className="text-lg lg:text-xl mb-8">
              Elevate your music journey with Pulse, a cutting-edge music player
              designed for music enthusiasts like you. Immerse yourself in a
              seamless and immersive audio experience, where your favorite tunes
              come to life,Pulse combines sleek design with powerful features to
              redefine how you experience music. Discover a vast library of
              tracks, create personalized playlists, and enjoy crystal-clear
              sound quality like never before.
            </p>
          </div>
          <div className="w-full flex justify-center">
          {userState?.name? (<Link to="/explore"><button className="mx-auto lg:mx-0  hover:underline bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            {userState?.name ? "Explore" : null}
          </button></Link>) : null}
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className=" py-24 overflow-x-hidden">
        <div class="container max-w-5xl mx-auto m-8">
          <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
            THAT SOUNDS GREAT!
          </h2>
          <div class="w-full mb-4">
            <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div class="flex flex-wrap mt-12">
            <div class="w-1/6 sm:w-1/2 pt-6 pl-6">
              <h3 class="text-3xl text-white text-whitefont-bold leading-none mb-3">
                Unlimited. Downloads.
              </h3>
              <p class="text-white mb-8">
                Download any song. Play it offline. Save Data.
              </p>
            </div>
            <div className="w-1/4 h-1/4 sm:w-1/2 ">
              <img
                className="w-2/6 h-2/6"
                src="https://phoenix.anghcdn.co/adminupload/1541509210339.png"
                alt=""
              />
            </div>
          </div>
          <div class="flex flex-wrap mt-12">
            <div className="w-1/4 h-1/4 sm:w-1/2 ">
              <img
                className="w-2/6 h-2/6"
                src="https://phoenix.anghcdn.co/adminupload/1541509228462.png"
                alt=""
              />
            </div>
            <div class="w-1/6 sm:w-1/2 pt-6 pl-6">
              <h3 class="text-3xl text-white text-whitefont-bold leading-none mb-3">
                Exclusive music
              </h3>
              <p class="text-white mb-8">
                As a Pulse Plus user, you can benefit from listening to your
                favorite artists’ new songs exclusively on Pulse Plus.
              </p>
            </div>
          </div>
          <div class="flex flex-wrap mt-12">
            <div class="w-1/6 sm:w-1/2 pt-6 pl-6">
              <h3 class="text-3xl text-white text-whitefont-bold leading-none mb-3">
                High quality music
              </h3>
              <p class="text-white mb-8">
                Play music in high-definition sound with Dolby 320 Kbps,
              </p>
            </div>
            <div className="w-1/4 h-1/4 sm:w-1/2 ">
              <img
                className="w-2/6 h-2/6"
                src="https://phoenix.anghcdn.co/adminupload/1541509131284.png"
                alt=""
              />
            </div>
          </div>
          <div class="flex flex-wrap mt-12">
            <div className="w-1/4 h-1/4 sm:w-1/2 ">
              <img
                className="w-2/6 h-2/6"
                src="https://phoenix.anghcdn.co/adminupload/1541509181704.png"
                alt=""
              />
            </div>
            <div class="w-1/6 sm:w-1/2 pt-6 pl-6">
              <h3 class="text-3xl text-white text-whitefont-bold leading-none mb-3">
                Connect Phones. Control Music.
              </h3>
              <p class="text-white mb-8">
                Connect phones remotely without bluetooth and control your
                music.
              </p>
            </div>
          </div>
          <div class="flex flex-wrap mt-12">
            <div class="w-1/6 sm:w-1/2 pt-6 pl-6">
              <h3 class="text-3xl text-white text-whitefont-bold leading-none mb-3">
                Import your music
              </h3>
              <p class="text-white mb-8">
                Upload music you purchase even if they're not on Anghami.
                Install our desktop app from www.anghami.com & start uploading.
              </p>
            </div>
            <div className="w-1/4 h-1/4 sm:w-1/2 ">
              <img
                className="w-2/6 h-2/6"
                src="https://phoenix.anghcdn.co/adminupload/1541509246248.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* User Testimonials Section */}
      <section className="testimonials">{/* Add user testimonials */}</section>

      {/* Subscription Information Section */}
      <section class=" py-8">
        <div class="container mx-auto px-2 pt-4 pb-12 text-gray-800">
          <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
            Pricing
          </h2>
          <div class="w-full mb-4">
            <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div class="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4">
            <div class="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-inherit border mt-4">
              <div class="flex-1 bg-inherit border text-white rounded-t rounded-b-none overflow-hidden shadow">
                <div class="p-8 text-3xl font-bold text-center border-b-4">
                  Free
                </div>
                <ul class="w-full text-center text-sm">
                  <li class="border-b py-4">
                    {" "}
                    <span className="mr-2">&#10003;</span> Play millions of
                    songs
                  </li>
                  <li class="border-b py-4">
                    {" "}
                    <span className="mr-2">&#10007;</span> Unlimited downloads
                  </li>
                  <li class="border-b py-4">
                    {" "}
                    <span className="mr-2">&#10007;</span> No ads
                  </li>
                  <li class="border-b py-4">
                    {" "}
                    <span className="mr-2">&#10007;</span> Lyrics
                  </li>
                  <li class="border-b py-4">
                    {" "}
                    <span className="mr-2">&#10007;</span> Scrub, Rewind, Repeat
                  </li>
                  <li class="border-b py-4">
                    {" "}
                    <span className="mr-2">&#10007;</span> High audio quality
                  </li>
                  <li class="border-b py-4">
                    {" "}
                    <span className="mr-2">&#10007;</span> Apple TV & Sonos
                  </li>
                  <li class="border-b py-4">
                    {" "}
                    <span className="mr-2">&#10007;</span> CarPlay & Android
                    Auto
                  </li>
                  <li class="border-b py-4">
                    {" "}
                    <span className="mr-2">&#10007;</span> Playstation
                  </li>
                </ul>
              </div>
              <div class="flex-none mt-auto bg-inherit border rounded-b rounded-t-none overflow-hidden shadow p-6">
                <div class="w-full pt-6 text-3xl text-white font-bold text-center">
                  £0
                  <span class="text-base"> / one user</span>
                </div>
                <div class="flex items-center justify-center">
                  <button class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
            <div class="flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-inherit border mt-4 sm:-mt-6 shadow-lg z-10">
              <div class="flex-1 bg-inherit border rounded-t rounded-b-none overflow-hidden shadow">
                <div class="w-full p-8 text-3xl text-white font-bold text-center">
                  Pulse Plus
                </div>
                <div class="h-1 w-full gradient  my-0 py-0 rounded-t"></div>
                <ul class="w-full text-center text-white text-base font-bold">
                  <li class="border-b py-4">
                    {" "}
                    <span className="mr-2">&#10003;</span> Play millions of
                    songs
                  </li>
                  <li class="border-b py-4">
                    {" "}
                    <span className="mr-2">&#10003;</span> Unlimited downloads
                  </li>
                  <li class="border-b py-4">
                    {" "}
                    <span className="mr-2">&#10003;</span> No ads
                  </li>
                  <li class="border-b py-4">
                    {" "}
                    <span className="mr-2">&#10003;</span> Lyrics
                  </li>
                  <li class="border-b py-4">
                    {" "}
                    <span className="mr-2">&#10003;</span> Scrub, Rewind, Repeat
                  </li>
                  <li class="border-b py-4">
                    {" "}
                    <span className="mr-2">&#10003;</span> High audio quality
                  </li>
                  <li class="border-b py-4">
                    {" "}
                    <span className="mr-2">&#10003;</span> Apple TV & Sonos
                  </li>
                  <li class="border-b py-4">
                    {" "}
                    <span className="mr-2">&#10003;</span> CarPlay & Android
                    Auto
                  </li>
                  <li class="border-b py-4">
                    {" "}
                    <span className="mr-2">&#10003;</span> Playstation
                  </li>
                </ul>
              </div>
              <div class="flex-none mt-auto bg-inherit border rounded-b rounded-t-none overflow-hidden shadow p-6">
                <div class="w-full pt-6 text-4xl font-bold text-white text-center">
                  £9.99
                  <span class="text-base">/ per user</span>
                </div>
                <div class="flex items-center justify-center">
                  <button class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
            <div class="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-inherit border mt-4">
              <div class="flex-1 bg-inherit border text-white rounded-t rounded-b-none overflow-hidden shadow">
                <div class="p-8 text-3xl font-bold text-center border-b-4">
                  Family Plan
                </div>
                <ul class="w-full text-center text-sm">
                  <li class="border-b py-4">
                    {" "}
                    <span className="mr-2">&#10003;</span> 6 individual
                    accounts, 1 plan
                  </li>
                  <li class="border-b py-4">
                    {" "}
                    <span className="mr-2">&#10003;</span> Play millions of
                    songs
                  </li>
                  <li class="border-b py-4">
                    {" "}
                    <span className="mr-2">&#10003;</span> Unlimited downloads
                  </li>
                  <li class="border-b py-4">
                    {" "}
                    <span className="mr-2">&#10003;</span> No ads
                  </li>
                  <li class="border-b py-4">
                    {" "}
                    <span className="mr-2">&#10003;</span> Lyrics
                  </li>
                  <li class="border-b py-4">
                    {" "}
                    <span className="mr-2">&#10003;</span> Scrub, Rewind, Repeat
                  </li>
                  <li class="border-b py-4">
                    {" "}
                    <span className="mr-2">&#10003;</span> High audio quality
                  </li>
                  <li class="border-b py-4">
                    {" "}
                    <span className="mr-2">&#10003;</span> Apple TV & Sonos
                  </li>
                  <li class="border-b py-4">
                    {" "}
                    <span className="mr-2">&#10003;</span> CarPlay, Android Auto
                    & Playstation
                  </li>
                </ul>
              </div>
              <div class="flex-none mt-auto bg-inherit border rounded-b rounded-t-none overflow-hidden shadow p-6">
                <div class="w-full pt-6 text-3xl text-white font-bold text-center">
                  £12.99
                  <span class="text-base">/ per user</span>
                </div>
                <div class="flex items-center justify-center">
                  <button class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gift */}
      <section className="gift py-24 w-screen">
        <div className="container flex w-full-auto h-full-auto justify-end">
          <div class="flex flex-wrap mt-12">
            <div class="w-3/6 sm:w-1/2 pt-6 pl-6 flex flex-col justify-center">
              <h3 class="text-3xl text-white text-whitefont-bold leading-none mb-3">
                THE GIFT OF MUSIC
              </h3>
              <p class="text-white mb-8">
                Share the joy of music with family and friends
              </p>
              <button className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white font-bold rounded-full py-4 px-8 w-1/4 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                Learn More
              </button>
            </div>
            <div className="w-full h-full sm:w-1/2 ">
              <img
                className="w-4/6-auto h-full-auto"
                src="https://cdnweb.anghami.com/web/assets/img/landing/card@2x.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div class="container mx-auto px-8">
          <div class="w-full flex flex-col md:flex-row py-6">
            <div class="flex-1 mb-6 text-black">
              <Link to="/newsLetter">
                <a
                  class="toggleColour text-pink-500 no-underline hover:no-underline font-bold text-2xl lg:text-4xl flex"
                  href="#"
                >
                  <div className="mr-4">
                    <img
                      src="https://static.vecteezy.com/system/resources/thumbnails/014/391/878/small/heart-rate-pulse-icon-on-transparent-background-free-png.png"
                      alt=""
                      className="h-10 w-10"
                    />
                  </div>
                  News Letter
                </a>
              </Link>
            </div>
            <div class="flex-1">
              <p class="uppercase text-white md:mb-6">Links</p>
              <ul class="list-reset mb-6">
                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    class="no-underline hover:underline text-white hover:text-pink-500"
                  >
                    FAQ
                  </a>
                </li>
                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    class="no-underline hover:underline text-white hover:text-pink-500"
                  >
                    Help
                  </a>
                </li>
                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    class="no-underline hover:underline text-white hover:text-pink-500"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div class="flex-1">
              <p class="uppercase text-white md:mb-6">Legal</p>
              <ul class="list-reset mb-6">
                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    class="no-underline hover:underline text-white hover:text-pink-500"
                  >
                    Terms
                  </a>
                </li>
                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    class="no-underline hover:underline text-white hover:text-pink-500"
                  >
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
            <div class="flex-1">
              <p class="uppercase text-white md:mb-6">Social</p>
              <ul class="list-reset mb-6">
                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    class="no-underline hover:underline text-white hover:text-pink-500"
                  >
                    Facebook
                  </a>
                </li>
                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    class="no-underline hover:underline text-white hover:text-pink-500"
                  >
                    Linkedin
                  </a>
                </li>
                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    class="no-underline hover:underline text-white hover:text-pink-500"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
            <div class="flex-1">
              <p class="uppercase text-white md:mb-6">Company</p>
              <ul class="list-reset mb-6">
                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    class="no-underline hover:underline text-white hover:text-pink-500"
                  >
                    Official Blog
                  </a>
                </li>
                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    class="no-underline hover:underline text-white hover:text-pink-500"
                  >
                    About Us
                  </a>
                </li>
                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    class="no-underline hover:underline text-white hover:text-pink-500"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
