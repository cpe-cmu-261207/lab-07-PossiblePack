import Link from 'next/link'

const Gallery = () => {
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
      <>
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
        <h1 class = "title">Gallery</h1>
        <div>
            <table class = "main-table">
                <tr>
                    <td><img class = "gallery" src="photo/1.jpg" alt="pic1"/>
                        <p class = "description">I like to see a view from the plane.</p>
                    </td>
                    <td><img class = "gallery" src="photo/2.jpg" alt="pic2"/>
                        <p class = "description">This is beautiful pic.</p>
                    </td>
                    <td><img class = "gallery" src="photo/3.jpg" alt="pic3"/>
                        <p class = "description">I choose this pic because I want to go to Japan.</p>
                    </td>
                    <td><img class = "gallery" src="photo/4.jpg" alt="pic4"/>
                        <p class = "description">This is reason why I came to study at CMU.</p>
                    </td>
                </tr>
                <tr>
                    <td><img class = "gallery" src="photo/5.jpg" alt="pic5"/>
                    <p class = "description">I want this room in my house.</p>
                    </td>
                    <td><img class = "gallery" src="photo/6.jpg" alt="pic6"/>
                    <p class = "description">I like the beach at sunset.</p>
                    </td>
                    <td><img class = "gallery" src="photo/7.jpg" alt="pic7"/>
                    <p class = "description">My safe zone be like this room.</p>
                    </td>
                    <td><img class = "gallery" src="photo/8.jpg" alt="pic8"/>
                    <p class = "description">Sometime I want private cinema room.</p>
                    </td>
                </tr>
            </table>
        </div>
      </>
  )
}

export default Gallery