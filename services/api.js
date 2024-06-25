import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://dnliqryrajhxmckaaaix.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRubGlxcnlyYWpoeG1ja2FhYWl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg5NDMzMzksImV4cCI6MjAzNDUxOTMzOX0.9oVekMwOpo9f3X0gnYpeo33RxEuZq0lpYvOwrp0adjE",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRubGlxcnlyYWpoeG1ja2FhYWl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg5NDMzMzksImV4cCI6MjAzNDUxOTMzOX0.9oVekMwOpo9f3X0gnYpeo33RxEuZq0lpYvOwrp0adjE"
    }
})