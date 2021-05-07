import Head from "next/head";

import { Spotify } from "../components/spotify";
import { Consts } from "../misc/consts";

export default function Home() {
  return (
    <div>
      <Head>
        <title>DEVLOOSKIE | home</title>
      </Head>
      <nav>
        <a href='#' className='noOpacity'>
          <img src='./img/logo.png' alt="DEVLOOSKIE'S LOGO" className='logo' />
        </a>
        <h6>DEVLOOSKIE</h6>
      </nav>
      <main>
        {/* SPOTIFY */}
        <Spotify />

        {/* ABOUT */}
        <span className='headingStarter'>//</span>
        <h1>ABOUT</h1>
        <p>
          Hey, I&apos;m Cody, a 16 y/o full-stack web developer & designer. I
          love building things for the web and tools for people from all over
          the world to use. I&apos;ve contributed to many Open Source(d)
          organizations, and have worked for two notable names, dahliaOS and
          BlissROMS.
        </p>

        <div className='spaceInBetweenSections' />

        {/* PROJECTS */}
        <span className='headingStarter'>//</span>
        <h1>PROJECTS</h1>
        <div className='grid'>
          <div className='gridItem'>
            <h1 className='gridHeader'>IMPERIAL</h1>
            <p className='gridParagraph'>
              IMPERIAL is a code/text storing site where you can share, edit, or
              encrypt documents.
            </p>
            <a
              href='https://imperialb.in/'
              className='gridLink'
              target='_blank'
              rel='noreferrer'
            >
              WEBSITE
            </a>
          </div>
          <div className='gridItem'>
            <h1 className='gridHeader'>creatable</h1>
            <p className='gridParagraph'>
              Small portfolio website made for Creatable. A mutual Python
              developer.
            </p>
            <a
              href='https://creatable.cafe'
              className='gridLink'
              target='_blank'
              rel='noreferrer'
            >
              WEBSITE
            </a>
          </div>
          <br /> {/* We're breaking here so they don't go all inline */}
          <div className='gridItem'>
            <h1 className='gridHeader'>dahliaOS</h1>
            <p className='gridParagraph'>
              dahliaOS is a modern, secure, lightweight and responsive operating
              system, combining the best of GNU/Linux and Fuchsia OS.
            </p>
            <a
              href='https://dahliaOS.io'
              className='gridLink'
              target='_blank'
              rel='noreferrer'
            >
              WEBSITE
            </a>
          </div>
          <div className='gridItem'>
            <h1 className='gridHeader'>blissroms</h1>
            <p className='gridParagraph'>
              BlissROMS is an Open Sourced OS based on Android bringing many
              customizations, options, and added security features.
            </p>
            <a
              href='https://blissroms.com'
              className='gridLink'
              target='_blank'
              rel='noreferrer'
            >
              WEBSITE
            </a>
          </div>
        </div>

        <div className='spaceInBetweenSections' />

        {/* DESIGNS */}
        <span className='headingStarter'>//</span>
        <h1>DESIGNS</h1>
        <div className='designGrid'>
          <div className='designGridItem'>
            <a className='noOpacity designGridAnchor' href='#'>
              <img
                src='/img/designs/QUADECA.jpg'
                className='designGridImage'
                alt='QUADECA web design'
              />
            </a>
          </div>
          <div className='designGridItem'>
            <a className='noOpacity designGridAnchor' href='#'>
              <img
                src='/img/designs/OFFWHITE.jpg'
                className='designGridImage'
                alt='ARIES web design'
              />
            </a>
          </div>
          <div className='designGridItem'>
            <a className='noOpacity designGridAnchor' href='#'>
              <img
                src='/img/designs/ARIES.jpg'
                className='designGridImage'
                alt='OFFWHITE web design'
              />
            </a>
          </div>
          <div className='designGridItem'>
            <a className='noOpacity designGridAnchor' href='#'>
              <img
                src='/img/designs/DBRAND.jpg'
                className='designGridImage'
                alt='DBRAND web design'
              />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
