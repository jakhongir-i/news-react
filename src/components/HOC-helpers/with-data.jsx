import React, { Component } from 'react';
import MyLoader from "../Loader/Loader";

const withData = (View, getData) => {
  return class extends Component {

    state = {
      data: [],
      page: 1
    };

    componentDidMount() {
      getData(this.state.page)
        .then((data) => {
          console.log(data, this.state.page);

          this.setState(state => ({
            data: [...state.data, ...data],
            page: state.page + 1
          }))

          console.log(data, this.state.page);
        });
    }

    render() {
      const { data } = this.state;

      if (data.length === 0) {
        return  <h1>Data loading...</h1>
      }

      return <View {...this.props} data={data} fetchMoreData={getData}/>;
    }
  };
};

export default withData;
