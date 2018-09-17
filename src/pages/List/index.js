import React from 'react';
import { Table, Modal, Button, Form, Input } from 'antd';
import { connect } from 'dva';
import FormItem from '_antd@3.9.2@antd/lib/form/FormItem';

const FromItem = Form.Item;


function mapStateToProps(state) {
    return {
      cardsList: state.cards.cardsList,
      cardsLoading: state.loading.effects['cards/queryList'],
    };
  }




class List extends React.Component {

    state = {
        visible: false,
    };

    showModal = () => {
        this.setState({
            visible : true
        });
    }

    dismissModal = () => {
        this.setState({
            visible: false
        })
    }

    submit = () => {
        const { dispatch, form: {validateFields} } = this.props;
        validateFields((err, values) => {
            if(err == null) {
                dispatch({
                    type: 'cards/addOne',
                    payload: [values],
                });
                this.dismissModal();
            }
        })
    }

    componentDidMount() {
        this.props.dispatch({
          type: 'cards/queryList',
        });
    }

    columns = [
        {
            title: '名称',
            dataIndex: 'name',
        },
        {
            title: '描述',
            dataIndex: 'desc'
        }, {
            title: '链接',
            dataIndex: 'url',
            render: value => <a href={value} targe={'_blank'}>{value}</a>,
        }
    ];


    render() {
        const { cardsList, cardsLoading } = this.props;

        const { visible } = this.state;
        const { form: { getFieldDecorator } } = this.props;

        return (
            <div>
                <Table
                    columns={this.columns}
                    dataSource={cardsList}
                    loading={cardsLoading}
                    rowKey='id'
                ></Table>

                <Button onClick={this.showModal}>新增</Button>
                <Modal 
                    title="新增"
                    visible={visible}
                    onOk={this.submit}
                    onCancel={this.dismissModal}
                    >
                    <Form>
                        <FormItem label="名称">
                            {
                                getFieldDecorator('name', {
                                    rules: [{ required: true }]
                                })(
                                    <Input/>
                                )
                            }
                        </FormItem>
                        <FormItem label="描述">
                            {
                                getFieldDecorator('desc')(
                                    <Input/>
                                )
                            }
                        </FormItem>
                        <FormItem label="链接">
                            {
                                getFieldDecorator('url', {
                                    rules: [{ type: 'url' }]
                                })(
                                    <Input/>
                                )
                            }
                        </FormItem>
                    </Form>
                </Modal>
            </div>
        )
    }

}

export default connect(mapStateToProps)(Form.create()(List));

