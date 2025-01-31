import axios from 'axios';

const API_BASE_URL = 'http://localhost:3005/api/v1';

export const fetchCourses = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/course`);
        return response.data.body;
    } catch (error) {
        console.error('Fetch courses error:', error.response?.data || error.message);
        throw error;
    }
};

export const fetchCourseById = async (courseId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/course/${courseId}`);
        return response.data.body;
    } catch (error) {
        console.error('Fetch course by ID error:', error.response?.data || error.message);
        throw error;
    }
};

export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/register`, userData);
        return response.data;
    } catch (error) {
        console.error('Registration error:', error.response?.data || error.message);
        throw error;
    }
};

export const loginUser = async (loginData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/login`, loginData);
        return response.data;
    } catch (error) {
        console.error('Login error:', error.response?.data || error.message);
        throw error;
    }
};
