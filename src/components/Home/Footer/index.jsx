import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import s from './style.css';

export default React.createClass({
  mixins: [PureRenderMixin],
  update: function(event) {},
  render: function() {
    return (
		<div className={s.container}>
		  <div className={s.cta}>
		    Register now at
		    <a className={s.link} href="//pay.flinders.edu.au/som" target="_blank">pay.flinders.edu.au/som</a>
	    	<a className={s.bottomLink} href="/Program.pdf" target="_blank">Download the program</a>		    	
		  </div>
		  <ul className={s.associates}>
		    <li className={s.associate}>
		      <a className={s.associateLink}>
		        <img src={ require('./images/flinders.png') } alt="Flinders University" className={s.associateImg} />
		      </a>
		    </li>
		    <li className={s.associate}>
		      <a className={s.associateLink}>
		        <img src={ require('./images/ua.png') }  alt="University of Adeilade" className={s.associateImg} />
		      </a>
		    </li>
		    <li className={s.associate}>
		      <a className={s.associateLink}>
		        <img src={ require('./images/mh.png') } alt="Monash Health" className={s.associateImg} />
		      </a>
		    </li>
		    <li className={s.associate}>
		      <a className={s.associateLink}>
		        <img src="" alt="" className={s.associateImg} />
		      </a>
		    </li>
		  </ul>
		</div>
    );
  }
});