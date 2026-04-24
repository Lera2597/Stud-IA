import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from '../pages/Login.jsx'
import Dashboard from '../pages/Dashboard.jsx'
import PrivateRoute from './PrivateRoute.jsx'
import Tasks from '../pages/Tasks.jsx'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route 
                    path="/" 
                    element={<Login />} 
                />
                <Route 
                    path="/dashboard" 
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }
                />

                <Route 
                    path="/projects/:projectId/tasks" 
                    element={
                        <PrivateRoute>
                            <Tasks />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}
export default AppRouter