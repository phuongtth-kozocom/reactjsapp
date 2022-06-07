import { Fragment } from 'react'
import { RouteItem } from 'utils/types'
import { Switch, Route } from 'react-router-dom'
import { PATH_NAME } from 'constants/index'

import Home from 'containers/Home'
import BaseLayout from 'containers/Layouts/BaseLayout'

const routes: RouteItem[] = [
    {
        path: PATH_NAME.HOME,
        exact: true,
        component: Home,
        layout: BaseLayout,
    },
]

const renderRoutes = (routes: RouteItem[]) => {
    return routes ? (
        <Switch>
            {routes.map((route: RouteItem, idx: number) => {
                // const Guard = route.guard || Fragment
                const Layout = route.layout || Fragment
                const Component = route.component

                return (
                    <Route
                        key={`routes-${idx}`}
                        path={route.path}
                        exact={route.exact}
                        render={(props: any) => (
                            // <Guard>
                                <Layout>{route.routes ? renderRoutes(route.routes) : <Component {...props} />}</Layout>
                            // </Guard>
                        )}
                    />
                )
            })}
        </Switch>
    ) : null
}

function Routes() {
    return renderRoutes(routes)
}

export default Routes
