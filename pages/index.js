import {useEffect} from 'react';
import axios from 'axios'
import Link from 'next/link'

const baseURL = 'https://dummyapi.io/data/api'
const Home = () => {
  const style = {
    backgroundColor: '#FF0099',
    border: 'none',
    color: 'white',
    padding: '10px 10px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer',
  }

  return (
      <div >
        <table id ="Link">
            <tr >
                <td style= {style}><Link href="/">Home</Link></td>
                <td style= {style}><Link href="/gallery">Gallery</Link></td>
                <td style= {style}><Link href="/contact">Contact</Link></td>
                <td style= {style}><Link href="/gpa">GPA calculator</Link></td>
                <td style= {style}><Link href="/post">post</Link></td>
            </tr>
        </table>
        <table>
            <tr class = "name-tag">
                    <td><h1>Sahadsawad Chailuan</h1>
                        <h2>Student</h2>
                        <h2>sahadsawad_ch@cmu.ac.th</h2></td>
                    <td><img class = "profile" src="photo/image.jpg" alt="this is me."/></td>
            </tr>
        </table>
        <h1  class = "title">Home</h1>        
        <table>
            <tr>
                <td>
                    <h2 class = "sub-title">About me</h2>
                    <p >I am sophomore student in Department of Computer Engineering at Chiang Mai university.</p>
                </td>
            </tr>
            <tr>
                <td>
                    <h2 class = "sub-title" >Skills</h2>
                    <table class = "skill" >
                        <tr >
                            <td >c++ lv.5 </td>
                            <td >java lv.4</td>
                            <td >python lv.6</td>
                        </tr>
                        <tr >
                            <td >guitar lv.6</td>
                            <td >football lv.7</td>
                            <td >sleeping lv.10</td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td>
                    <h2 class = "sub-title" >Hobby</h2>
                    <table >
                        <tr>
                            <td ></td>
                            <td>
                                <ul>
                                    <li>play guitar</li>
                                    <li>listen to music</li>
                                    <li>play football</li>
                                    <li>programming</li>
                                </ul>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
      </div>
  )
}

export default Home
