import React, { Component, useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { connect, history } from 'umi';
import { Table, Space, Button, Modal } from 'antd';

const Delemodel = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    const { dispatch, staff = {}, valueIndex } = props;
    const { staffList = [] } = staff;
    const value = staffList[valueIndex];
    dispatch({
      type: 'staff/deleStaff',
      payload: { value },
    });
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" shape="round" danger onClick={showModal}>
        删除
      </Button>
      <Modal title="删除提示" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>是否删除该员工信息？</p>
      </Modal>
    </>
  );
};

class GetStaff extends Component {
  constructor(...args) {
    super(...args);

    this.getAllStaff = this.getAllStaff.bind(this);

    this.columns = [
      {
        title: '序号',
        dataIndex: 'key',
      },
      {
        title: '员工姓名',
        dataIndex: 'staffName',
      },
      {
        title: '员工类型',
        dataIndex: 'staffTypeName',
      },
      {
        title: '性别',
        dataIndex: 'sex',
      },
      {
        title: '员工简介',
        dataIndex: 'information',
      },
      {
        title: '操作',
        key: 'action',
        render: (text, record, index) => {
          return (
            <Space size="middle">
              <Button
                type="primary"
                shape="round"
                onClick={() => {
                  history.push({
                    pathname: '/innerStaff/changeStaff',
                    query: {
                      valueIndex: index,
                      value: this.props.staff.staffList[index],
                    },
                  });
                }}
              >
                查看详情
              </Button>
              <Delemodel valueIndex={index} {...this.props} />
            </Space>
          );
        },
      },
    ];

    this.state = {};
  }

  componentDidMount() {
    this.getAllStaff();
  }

  getAllStaff() {
    const { dispatch } = this.props;
    dispatch({
      type: 'staff/getStaff',
    });
  }

  render() {
    const { staff } = this.props;
    const { staffList } = staff;
    return (
      <PageContainer>
        <Table columns={this.columns} dataSource={staffList} />
      </PageContainer>
    );
  }
}

export default connect(({ login, loading, staff }) => ({
  userLogin: login,
  loading,
  staff,
}))(GetStaff);
