import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import s from './style.css';

export default React.createClass({
  mixins: [PureRenderMixin],
  update: function(event) {},
  render: function() {
    return (
      <div className={s.container}>
        <h2 className={s.info}>
          <span className={s.length}>2 DAY CONFERENCE</span>
          <span className={s.day}>24 • 25 OCT 2016</span>
          <span className={s.location}>Stamford Grand, Adelaide SA</span>
        </h2>
        <h1 className={s.name}>
          <span className={s.nameLine}>De<span className={s.nameHyphen}>–</span></span><span className={s.nameLine}>sign<span className={s.nameHyphen}>–</span></span><span className={s.nameLine}>ing</span>
          <span className={s.nameLine}>Health</span>
        </h1>
        <h3 className={s.blurbs}>
          <span className={s.blurb}>Insights from </span>
          <span className={s.blurb}>Design Thinking, </span>
          <span className={s.blurb}>Operations Research </span>
          <span className={s.blurb}>and Systems Thinking</span>
        </h3>
      </div>
    );
  }
});