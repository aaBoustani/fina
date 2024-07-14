import { request } from '@/lib';
import { Analysis } from '@/models';

async function getAnalysisData(fileID: string) {
    try {
        const result = await request('GET', `/analysis/${fileID}`);
        return result as Analysis;
    } catch (error) {
        console.error('Error getting analysis data.', error);
        throw error;
    }
}

export { getAnalysisData };