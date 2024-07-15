import FormData from 'form-data';
import { request } from '@/lib';
import { Upload } from '@/models';


async function uploadImage(fileImage: File) {
    const data = new FormData();
    data.append('file', fileImage);

    try {
        const resp = await request('POST', '/uploads', data);
        return resp as Upload;
    } catch (error) {
        console.error(error);
        throw new Error('Error uploading image. Please try again!');
    }
}

async function getUploadWithAnalysis(fileID: string) {
    const result: Upload = await request('GET', `/analysis/${fileID}`);
    if (result === {} as Upload) {
        throw new Error('No data found.');
    }
    if (!result.analysis) {
        throw new Error('Analysis data not found.');
    }
    return result;
}


export {
    uploadImage,
    getUploadWithAnalysis,
};