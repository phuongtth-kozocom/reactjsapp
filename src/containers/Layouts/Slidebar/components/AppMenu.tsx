import { Link } from "react-router-dom"
import List from '@material-ui/core/List'
import { makeStyles } from '@material-ui/core/styles'
import { ListItem, ListItemText } from '@material-ui/core'
import { ExpandMore, Stop as StopIcon } from '@material-ui/icons'

import { PATH_NAME } from 'constants/index'

function ListItemLink(props: any) {
    return <ListItem button component="a" {...props} />;
}

export default function AppMenu() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <p className={classes.text}>MCP Showcase</p>
            <List component="nav" aria-label="secondary mailbox folders" className={classes.nav}>
                <ListItem button className={classes.item}>
                    <ListItemText  style={{textAlign: 'center'}} primary="デマンド登録・設定" />
                </ListItem>
                <ListItemLink href="#" className={classes.item}>
                    <ListItemText style={{textAlign: 'center'}} primary="実行中" />
                </ListItemLink>
                <ListItemLink href="#" className={classes.item}>
                    <ListItemText style={{textAlign: 'center'}} primary="完了" />
                </ListItemLink>
                <ListItemLink href="#" className={classes.item}>
                    <ListItemText style={{textAlign: 'center'}} primary="失敗・キャンセル" />
                </ListItemLink>
        </List>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 270,
        backgroundColor: '#6F8EC6',
        position: 'fixed',
        height: '100%',
    },
    logo: {
        background: 'rgb(255, 255, 255)',
        width: '270px',
        height: '153px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: '18px',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 20
    },
    nav: {
        paddingTop: 0
    },
    item: {
        background: '#6180AB',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        maxHeight: 45,
        color: '#fff',
        '& .MuiTypography-body1': {
            fontFamily: 'Hiragino Sans, sans-serif',
            fontSize: '12px',
        }
    },
}));
