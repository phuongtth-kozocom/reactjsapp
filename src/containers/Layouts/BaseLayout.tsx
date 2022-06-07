import { FC } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Header from './Slidebar/Header'
import AppMenu from './Slidebar/components/AppMenu'

const BaseLayout: FC = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Header />
            <AppMenu />
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        fontFamily: 'Hiragino Sans, sans-serif',
        background: '#EDF1F8',
        height: '100vh'
    },

}))

export default BaseLayout
