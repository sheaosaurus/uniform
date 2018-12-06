import React, { Component } from 'react';
import ContentPhoto1 from '../../../resources/images/content-1.jpg';
import ContentPhoto2 from '../../../resources/images/store.jpg';
import ContentCard from '../../utils/contentCard';


class ContentCollection extends Component {

    render() {
        return (
        		<div className="collection row">
        				<ContentCard 
							image={ContentPhoto1}
							link="/shop"
							header="Permanent Collection"
							text="Discover our permanent collection of exceptional desingers." />
	        			<ContentCard 
						image={ContentPhoto2}
						link="/ourstory"
						header="Soho Flagship Store"
						text="Experience a curated shopping experience of footwear, leather accessories and more." />
            	</div>
        );
    }
}

export default ContentCollection;
