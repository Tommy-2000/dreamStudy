import { AxiosResponse } from "axios";
import { dreamStudyAxios } from "../config";

export default async function getAllStudyContent<StudyContentSchema>(
  requestUrl: string,
  zodSchema: StudyContentSchema
): Promise<StudyContentSchema> {
    try {
        const axiosResponse: AxiosResponse<unknown> = await dreamStudyAxios.get(requestUrl);
        const validatedResponse = zodSchema.parse(axiosResponse.data);
        return validatedResponse;
    }
};

