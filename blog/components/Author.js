import { Avatar, Divider } from 'antd'
import { GithubOutlined, QqOutlined, WechatOutlined } from '@ant-design/icons';
import OUT_LINK from '../pages/utils/outLinkConfig'

const Author =()=>{
    const accountSty = {
        'backgroundColor': '#999',
        'margin': '0 .5rem',
        'cursor': 'pointer'
    }
    const openSource = type => {
        let url = ''
        switch (type) {
            case 1:
                url = OUT_LINK.gitHubSrc
                break
            case 2:
                url = ''
                break
            default:
                url = ''
                break
        }
        window.open(url, '_blank')
    }
    return (
        <div className="author-div comm-box">
            <div><Avatar size={100} src={OUT_LINK.avatarImg} /></div>
            <div className="author-introduction">
                fine, thank you, and you?
                <Divider>社交账号</Divider>
                <Avatar size={28} icon={<GithubOutlined />} onClick={() => openSource(1)} style={accountSty} />
                <Avatar size={28} icon={<QqOutlined />}  style={accountSty} />
                <Avatar size={28} icon={<WechatOutlined />}  style={accountSty} />
            </div>
        </div>
    )
}

export default Author