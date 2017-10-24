import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setMovieList, fetchMovieList } from '../../actions.js';
import './styles.css';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentWillMount() {
    this.props.setMovieList(null);
    this.props.fetchMovieList(`https://facebook.github.io/react-native/movies.json`);
  }

  componentWillReceiveProps({ app }) {
    if (this.props.app.movieList == null && app.movieList != null) {
      this.setState({ isLoading: false });
    }
  }

  render() {
    let html;
    const { isLoading } = this.state;
    const { movieList } = this.props.app;
    if (!isLoading) {
      let itemListHtml = movieList.map((i, k) => {
        return (
          <div
            key={k}
            className="item"
            onClick={() => {
              this.props.history.push(`/show${i.title}`);
            }}
          >
            {i.title}
          </div>
        );
      });
      html = <div>{itemListHtml}</div>;
    }
    return <div>{html}</div>;
  }
}

function mapStateToProps({ app }) {
  return {
    app
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setMovieList: val => {
      dispatch(setMovieList(val));
    },
    fetchMovieList: url => {
      dispatch(fetchMovieList(url));
    }
  };
}

Index.contextTypes = {
  router: PropTypes.object.isRequired
};

Index.defaultProps = {
  app: {},
  fetchMovieList: () => {}
};

Index.propTypes = {
  app: PropTypes.object,
  setMovieList: PropTypes.func,
  fetchMovieList: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
