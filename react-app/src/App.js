import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import NavBar from "./components/Navbar/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { authenticate } from "./store/session";
import Footer from "./components/Global/Elements/Footer";
import CreateEvent from "./components/Events/Pages/CreateEvent";
import EventDetailPage from "./components/Events/Pages/EventDetails";
import Homepage from "./components/Homepage/Homepage";
import Events from "./components/Events/Pages/Events";
import Dashboard from "./components/User/Dashboard";
import { getApiKeys } from "./store/mapkeys";
import Page404 from "./components/404";

function App() {
    const [loaded, setLoaded] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            await dispatch(authenticate());
            await dispatch(getApiKeys());
            setLoaded(true);
        })();
    }, [dispatch]);

    if (!loaded) {
        return null;
    }

    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route path="/" exact={true}>
                    <Homepage />
                </Route>
                <Route path="/events" exact={true}>
                    <Events />
                </Route>
                <ProtectedRoute path="/events/create" exact={true}>
                    <CreateEvent />
                </ProtectedRoute>
                <Route path="/events/:eventId" exact={true}>
                    <EventDetailPage />
                </Route>
                <Route path="/dashboard" exact={true}>
                    <Dashboard />
                </Route>
                <Route path="">
                    <Page404 />
                </Route>
            </Switch>

            <Footer />
        </BrowserRouter>
    );
}

export default App;
