import React from 'react'
import Navigation from '../components/NavigationComponent/Navigation'

const AppLayout = (props) => {
    return (
        <div>
            <Navigation />
            <main>{props.children}</main>
        </div>
    )
}

export default AppLayout;