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
        <img src='./logo.png' alt="DEVLOOSKIE'S LOGO" className='logo' />
        <h6>DEVLOOSKIE</h6>
      </nav>
      <main>
        {/* SPOTIFY */}
        <Spotify />

        {/* ABOUT */}
        <span className='headingStarter'>//</span>
        <h1>ABOUT</h1>
        <p>16 y/o fullstack webdeveloper and designer</p>
        <br />
        <br />
        <br />
        <br />

        {/* PROJECTS */}
        <span className='headingStarter'>//</span>
        <h1>PROJECTS</h1>
        <div className='grid'>
          <div className='gridItem'>
            <h1 className='gridHeader'>Lorem, ipsum.</h1>
            <p className='gridParagraph'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
              optio voluptate accusamus sapiente facilis, p
            </p>
            <a href='#' className='gridLink'>
              WEBSITE
            </a>
          </div>
          <div className='gridItem'>
            <h1 className='gridHeader'>Lorem, ipsum.</h1>
            <p className='gridParagraph'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
              optio voluptate accusamus sapiente facilis, p{" "}
            </p>
            <a href='#' className='gridLink'>
              WEBSITE
            </a>
          </div>
          <div className='gridItem'>
            <h1 className='gridHeader'>Lorem, ipsum.</h1>
            <p className='gridParagraph'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
              optio voluptate accusamus sapiente facilis, p{" "}
            </p>
            <a href='#' className='gridLink'>
              WEBSITE
            </a>
          </div>
          <div className='gridItem'>
            <h1 className='gridHeader'>Lorem, ipsum.</h1>
            <p className='gridParagraph'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
              optio voluptate accusamus sapiente facilis, p{" "}
            </p>
            <a href='#' className='gridLink'>
              WEBSITE
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
