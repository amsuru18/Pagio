import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import EditorPage from './pages/EditorPage';
import ViewBookPage from './pages/ViewBookPage';
import ProtectedRoute from './components/auth/ProtectedRoute';

function App() {
    return (
        <div>
            <Routes>
                {/* Public Paths */}
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />

                {/* Protected Paths */}
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <DashboardPage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/profile"
                    element={
                        <ProtectedRoute>
                            <ProfilePage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/editor/:bookId"
                    element={
                        <ProtectedRoute>
                            <EditorPage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/view-book/:bookId"
                    element={
                        <ProtectedRoute>
                            <ViewBookPage />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
