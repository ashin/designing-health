import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import * as actionCreators from '../../actionCreators';

import s from './home.css';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';

export const Home = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    const { setBeerState } = this.props;
    return (
      <div className={s.wrapper}>
        <div className={s.container}>
          <Header />
          <Body />
          <Footer />
        </div>
      </div>
    );
  }
});

function mapStateToProps(state) {
  //const showing = state.get('showing');
  return {
    // beers,
    // filters: filters.toList(),
    // filtering,
    // sorters,
    // sortBy,
    // sortingDirection,
    // showing
  }
}

export const HomeContainer = connect(mapStateToProps, actionCreators)(Home);

// lightest: #87d3c8
// light: #69c5bd
// blue: #4ab3ab
// dark: #367681
// white #fff