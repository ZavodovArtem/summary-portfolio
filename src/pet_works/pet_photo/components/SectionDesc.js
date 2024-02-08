import fly from '../img/fly.svg'
import heart from '../img/heart.svg'
import heartTwo from '../img/heart-two.svg'
import sunSmall from   '../img/sun-small.svg'
import ball from '../img/ball.svg'
import sun from  '../img/sun.svg'
import './SectionDesc.css'


function SectioDesc () {
    return (
        <>
            <div className='photoBody'>
                <div className='description'>
                    <img src={fly} />
                    <img src={sun} />
                            
                    <p className='oneText'> There are no rules for good photos, there are only good photos. <br/> Beauty can be seen in everything, seeing and composing beauty is what separates a shot from a photograph.  <br /> For me, photography is the art of observation. It's about looking for something interesting in an ordinary place... I found that it has little to do with what you see and anything to do with how you see

    </p>

                </div>
                <div className='description-two'>
                    <img src={heart} />
                    <img src={sunSmall} />
                    <img src={ball} />

                    <p className='twoText'>A photograph can only represent the present. Once you take a picture of it, it becomes part of the past.  <br/> I have always thought that good photos are like good jokes. If you explain them, they are no longer so good. <br/> A good shot stops a fleeting moment


    </p>
                </div>
            </div>
        </>
    )
}

export default SectioDesc