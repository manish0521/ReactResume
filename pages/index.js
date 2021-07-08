import { useState } from 'react'
import Navbar from '../components/Navbar';
import Introduction from '../components/Introduction';
import About from '../components/About';
import Experience from '../components/Experience';
import Skill from '../components/Skill';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Layout from '../components/Layout';

export default function Home() {
  
  return (
    <div >
       <Layout>
       <Introduction/>
       <About/>
       <Experience/>
       <Skill/>
       <Contact/>
       </Layout>
    </div>
  )
}
