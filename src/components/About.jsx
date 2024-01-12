import React, { useEffect } from 'react'
import { AiOutlineCloudDownload } from 'react-icons/ai'
import '../App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    })

    return (
        <div name="about" className='w-full h-auto bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-auto'>
                <div className='pb-8'>

                    <h2 className='text-4xl  font-bold inline border-b-4 border-gray-500'>About</h2>

                </div>

                <p data-aos="slide-up" data-aos-duration="500" className='text-xl mt-5 ease-in fade-in'>
                    I embarked my journey as a B.Tech Computer Science & Engineering student at Heritage Institute Of Technology in 2021. Along the way, I fearlessly explored various fields, including Web Development,Android App Development,Cyber Security. I delved into the world of cutting-edge technologies, such as Python, Cloud computing, React and Firebase. I also took my passion for technology and leadership to new heights by becoming a technical team member at the Google Developer Student Clubs in my college, alongside my equally enthusiastic classmates. At present, I serve GDSC as the Technical Team Member and holds the significant responsibility of being the member by taking part in various tech workshops and seminars organised by GDSC.
                </p>
                <br />
                <p data-aos="slide-up" data-aos-duration="500" className='text-xl mt-5 ease-in fade-in'>
                    In a constant pursuit of sharing knowledge and fostering growth, I've organized numerous technical workshops, imparting valuable insights on technologies like Python, Android, and Google Cloud to aspiring learners. With a commitment to personal development and a drive for making a positive impact within the tech community.
                </p>
                {/* <br />
                <p data-aos="fade-in" data-aos-duration="500" className='text-xl mt-5 ease-in  fade-in'>
                    
                </p> */}
                
            </div>
        </div>
    )
}

export default About