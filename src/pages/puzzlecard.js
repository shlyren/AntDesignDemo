import React, { Component } from 'react';
import { Card ,Button } from 'antd';
import { connect } from 'dva';

const namespace = 'puzzlecard';

const mapStateToProps = (state) => {
    const CardList = state[namespace].data;
    // 5.注入组件中
    return {
        CardList,
    };
};

const mapDispathToProps = (dispatch) => {
    return {
        onDidMount: () => {
            dispatch({
                //2. 初始化数据
                type: `${namespace}/queryInitCards`,
            });
        }
    }
}

@connect(mapStateToProps, mapDispathToProps)
export default class PuzzleCardPage extends Component {
    componentDidMount() {
        // 1 触发 dispathch 事件
        this.props.onDidMount();
    }

    render() {
        return (
            <div>
                {
                    // 6.重新渲染
                    this.props.CardList.map( card => {
                        return (
                            <Card style={{marginTop: 5}} key={card.id}>
                                <div>Q: {card.setup}</div>
                                <div>
                                    <strong>A: {card.punchline}</strong>
                                </div>
                            </Card>
                        );
                    })
                }
                <div>
                    <Button style={{marginTop: 10, float:"right"}} onClick={ () => this.props.onDidMount()}>添加卡片</Button>
                </div>
            </div>
        )
    }
}