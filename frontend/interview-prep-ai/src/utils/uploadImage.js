import {API_PATHS} from './apiPaths';
import axiosInstance from './axiosInstance';

const uploadImage =async (imageFile) =>{
    const fromData=new FormData();
    //append image file to form data
    FormData.append('image',imageFile);

    try{
        const response=await axiosInstance.post(API_PATHS.IMAGE.UPLOAD_IMAGE, FormData, {
            headers:{
                'Content-TYpe':'multipart/form-data' //set header for file upload
            },
        });
        return response.data;

    }catch(error){
        console.error('Error uploading the image',error);
        throw error;//rethrow error for handling
    }
}

export default uploadImage;