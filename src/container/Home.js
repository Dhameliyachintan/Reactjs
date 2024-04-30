import React from 'react';
import Banner from '../component/Banner';
import Bannerimage from '../../src/assest/images/phone-laptop.png';
import Phoneimage from '../../src/assest/images/phone.png';
import leptopimage from '../../src/assest/images/laptop.png';
import squaremage from '../../src/assest/images/img-square2.png';
import Modarn from '../component/Modarn';
import Feature from '../component/Feature';
import Aspects from '../component/Aspects';
import Usecase from '../component/Usecase';
import Twoside from '../component/Twoside';

export const Home = () => {
    return (
        <div>
            <Banner heading="Beautiful Landing Page" paragraph="We built this template to help you create modern and beautiful marketing page." imagecomponent={Bannerimage} />
            <Modarn h5heading="Description" h2heading="Modern Layout" paragraph={<p>This template is built on top of  <strong className="font-weight-bold"> Bootstrap 4 </strong>, the latest version of Bootstrap. Additionally, it usescustom CSS classes to get easily the result that you see. Use only additional CSS rules for complex customization.</p>} />
            <Feature h2heading="Nice Feature" h4heading="Mobile ready" paragraph="This is a placeholder text. Replace it with your awesome call to action text. Build stunning landing page easily with this template" phoneimage={Phoneimage} />
            <Feature h2heading="Smart Design" h4heading="Multi-browser" paragraph="This is a placeholder text. Replace it with your awesome call to action text. Build stunning landing page easily with this template" leptopimage={leptopimage} featuresection />
            <Aspects h2heading="Attractive Aspects" paragraph="This is a placeholder text. Replace it with your awesome call to action text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet malesuada feugiat." />
            <Usecase />
            <Twoside />
        </div>
    );
}
