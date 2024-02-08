import './Header.css'
import '../Photo.css'
import './SectionMe.css'
import photoMe from '../img/section-me.jpg'
import me from '../img/me.jpeg'

function SectionMe () {
    return (
        <>
        <div className='photoBody'>
            <div className='me'>
                <img className='me-photo' src={me} />

                <div>
                    <p className='me-p'>DREAM</p>
                    <br />
                    <p className='me-p'>BEAUTY</p>
                    <br />
                    <p className='me-p'>INSPIRATION</p>
                </div>

            </div>
        </div>

        </>
    )
}

export default SectionMe