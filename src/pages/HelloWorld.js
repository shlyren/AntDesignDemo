import { Card } from 'antd';

export default () => {
    const style = {
        width: '400px',
        margin: '30px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        border: '1px solid #e8e8e8',
    };

    return (
        <div>
            <div>hello world</div>
            <Card style={style} actions={[<a>操作一</a>, <a>操作二</a>]}>
                <Card.Meta 
                    avatar={<img 
                            style={{width:'64px', height:'64px'}}
                            src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png"/>}
                    title="Alipay"
                    description="AlipayAlipayAlipay"
                >

            </Card.Meta>
        </Card>
        </div>

    );
}