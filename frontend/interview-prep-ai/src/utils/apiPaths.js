export const BASE_URL="http://localhost:8000";

export const API_PATHS={
    AUTH:{
        REGISTER:"/api/auth/register",//Signup
        LOGIN:"/api/auth/login",//Authenticate user 7 return JWT token
        GET_PROFILE:"/api/auth/profile",//get logged user details
    },
    IMAGE:{
        UPLOAD_IMAGE:"/api/auth/upload-image",//upload profile picture
    },
    AI:{
        GENERATE_QUESTIONS:"/api/ai/generate-questions",//Generate interview questions and answer using gemini
        GENERATE_EXPLANATION:"/api/ai/generate-explanation",//generate concept explanation using gemini
    },
    SESSION:{
        CREATE:"/api/sessions/create",//create a new interview session with questions
        GET_ALL:"/api/sessions/my-sessions",//Get all user sessions
        GET_ONE: (id) => `/api/sessions/${id}`,//get session details with question
        DELETE:(id) =>  `/api/sessions/${id}`,//delete a session
    },
    QUESTION:{
        ADD_TO_SESSION:"/api/questions/add",//Add more question to a session
        PIN:(id)=>`/api/questions/${id}/pin`,//pin or unpin a question
        UPDATE_NOTE:(id)=>`/api/questions/${id}/note`//update or add a note to a question
    },
}
