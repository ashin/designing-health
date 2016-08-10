import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import s from './style.css';
import image1 from './port2.png';
import image2 from './port1.png';


export default React.createClass({
  mixins: [PureRenderMixin],
  update: function(event) {},
  render: function() {
    return (
	<div className={s.container}>
		<h4 className={s.title}>Keynote speakers</h4>
		  <ul className={s.list}>
		    <li className={s.listItem}>
		      <div className={s.listInfo}>
		        <h5 className={s.listTitle}>Harold G. Nelson PhD</h5>
		        <span className={s.listCountry}>USA</span>
		      </div>
		      <div className={s.imgWrapper}>
		          <img src={image1} className={s.img} />
		      </div>
		      <div className={s.info}>
		        <h5 className={s.infoTitle}>
		          Harold Nelson has spent a lifetime teaching, researching and practicing in the fields of complex systems inquiry and organisational systems design.
		        </h5>
			    <div className={s.infoText}>
			    	<div className={s.infoPara}>
			    		Harold’s exceptional career started in design as an architect. Mentored in his early career by the great American philosopher and systems scientist C West Churchman, Harold has developed a depth of insight into systemic design surpassed by none. Together with Eric Stolterman, Harold authored The Design Way, a book considered by some to the Rosetta Stone in the field.
			    	</div>
			    	<div className={s.infoPara}>
			    		Professor Nelson is former Nierenberg Distinguished Professor of Design in the School of Design at Carnegie Mellon University. He is past President of the International Society for the Systems Sciences (2000), a prestigious position shared with some of the greatest system science luminaries of the past 60 years.
			    	</div>
			    	<div className={s.infoPara}>
			    		Harolds current passion is helping organisations understand the crucial importance of design competency to innovation leadership in our increasingly complex world. Nowhere is this more important than in health care, described by Peter Drucker as the most complex system yet devised by man.
			    	</div>
			    </div>
			  </div>
		    </li>
		    <li className={s.listItem}>
		      <div className={s.listInfo}>
		        <h5 className={s.listTitle}>Terry Young PhD</h5>
		        <span className={s.listCountry}>USA</span>
		      </div>
		      <div className={s.imgWrapper}>
		          <img src={image2} className={s.img} />
		      </div>
		      <div className={s.info}>
		        <h5 className={s.infoTitle}>
		        	Terry Young is Professor of Healthcare Systems, Brunel University London and Director of the UK Cumberland Initiative. In 2013 the UK Health Service Journal ranked him in it’s
Top 50 Innovators in the NHS.
		        </h5>
			    <div className={s.infoText}>
			    	<div className={s.infoPara}>
						Terry has an unusual breadth of experience, strong management, teaching and research credentials, forged over 12 years in academia and 16 years in industry.
						He has an exceptional track record of developing and leading groups of powerful and independent thinkers. He is a member of the International			    	</div>
			    	<div className={s.infoPara}>
			    		Scientific Advisory Committee to the €350M CTMM programme in the Netherlands, and sits on the editorial boards of a number of journals.<br />
						The British Government has challenged it’s health care system, the NHS, to achieve efficiency savings on a scale like never before while improving quality.
			    	</div>
			    	<div className={s.infoPara}>
			    		To this end Terry has led from the front, actively promoting and supporting radical rethinking and systematic remodelling of healthcare systems. He cofounded the Cumberland Initiative in the UK as a vehicle for this and has generously encouraged the development of an Australian sister initiative.
			    	</div>
			    </div>
			  </div>
		    </li>
		  </ul>
	  </div>
	);
  }
});