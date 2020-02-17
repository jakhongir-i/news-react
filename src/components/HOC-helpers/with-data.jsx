import React, { Component } from 'react';
import MyLoader from "../Loader/Loader";

const withData = (View, getData) => {
  return class extends Component {

    state = {
      data: [],
      page: 1
    };

    componentDidMount() {
      this.fetchMoreData();
    }


    fetchMoreData = () => {
      
      getData(this.state.page)
        .then((data) => {
          this.setState(state => ({
            data: [...state.data, ...data],
            page: state.page + 1
          }))
        });
    }

    render() {
      const { data } = this.state;

      if (data.length === 0) {
        return  <h1>Data loading...</h1>
      }

      return <View {...this.props} data={data} fetchMoreData={this.fetchMoreData}/>;
    }
  };
};

export default withData;
