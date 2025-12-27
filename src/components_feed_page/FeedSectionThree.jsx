import React from 'react'
import ImagesSection from './ImagesSection';

function FeedSectionThree() {
    const Section_Data = {
        img: './assets/images/girl_ellipse_one.png',
        name: 'Username',
        event_name: 'Post event name',
        title: 'Fusce adipiscing nunc et tellus eu, tristique sodales sit aliquet.',
        paragraph_one: 'Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla. Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.',
        paragraph_two: 'Sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.',
        img_one: './assets/images/partyone.png',
        img_two: './assets/images/partytwo.png',
        img_three: './assets/images/partythree.png',
        img_four: './assets/images/partyfour.png',
    };

    return (
        <div className='max-w-330 mx-auto px-3'>
            <div className='mb-26'>
                {Array(5).fill(Section_Data).map((item, i) => {
                    return <div key={i} className='pt-7.75 pl-8.5 pr-8.5 pb-8.75 border border-[#00000033] bg-white rounded-[30px] mt-11.25 hover:shadow-lg hover:border-white'>
                        <ImagesSection
                            img={item.img}
                            name={item.name}
                            event_name={item.event_name}
                            title={item.title}
                            paragraph_one={item.paragraph_one}
                            paragraph_two={item.paragraph_two}
                            img_one={item.img_one}
                            img_two={item.img_two}
                            img_three={item.img_three}
                            img_four={item.img_four}
                        />
                    </div>
                })}
            </div>
        </div>
    )
}

export default FeedSectionThree