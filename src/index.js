import React, {lazy, Suspense} from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter, Switch, Route, useParams} from "react-router-dom";
import store from "./redux/store";
import {Provider} from "react-redux";
import Layout from "./components/layout/layout";
import Loading from "./components/layout/loading";
import FourOhFour from "./pages/404";
import * as serviceWorker from './serviceWorker';
import "./index.css";


const Page = () => {
    let { id = "index" } = useParams();
    const Page = lazy(() => import('./pages/' + id)
        .catch(() => ({
            default: () => <FourOhFour/>
        }))
    );
    return <Page/>;
};


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Layout>
                <Suspense fallback={<Loading/>}>
                    <Switch>
                        <Route exact path="/">
                            <Page/>
                        </Route>
                        <Route path="/:id">
                            <Page/>
                        </Route>
                    </Switch>
                </Suspense>
            </Layout>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);


serviceWorker.unregister();