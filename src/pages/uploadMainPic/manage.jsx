import React, { Component } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { connect } from 'umi';

class ManageMainPic extends Component {
  constructor(...args) {
    super(...args);
    this.state = {};
  }

  render() {
    return (
      <PageContainer>
        <div>sss</div>
      </PageContainer>
    );
  }
}

export default connect(({ login, loading, mainPic }) => ({
  userLogin: login,
  loading,
  mainPic,
}))(ManageMainPic);
