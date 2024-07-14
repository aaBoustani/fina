import axios from 'axios';
import FormData from 'form-data';
import { BASE_URL } from '@/lib';
import { UploadResponse } from '@/models';

async function uploadImage(fileImage: File) {
    const data = new FormData();
    data.append('file', fileImage);

    try {
        const response = await axios.post(`${BASE_URL}/uploads`, data);
        if (response.status === 201) {
            console.info('Image uploaded successfully.');
            return response.data as UploadResponse;
        } else {
            console.error('Error uploading image.', response);
            throw new Error('Error uploading image.');
        }
    } catch (error) {
        console.error('Error uploading image.', error);
        throw error;
    }
}

export { uploadImage };