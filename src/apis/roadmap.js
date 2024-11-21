import auth from './auth';

const SERVER = import.meta.env.VITE_SERVER_DOMAIN_PORT;

// 직업 존재 여부 검증
export const validateJob = async (jobName) => {
  try {
    const response = await auth.post(`${SERVER}/roadmap/validate`, {
      job: jobName,
    });
    return response.data.isValid; // boolean
  } catch (error) {
    console.error('Error validating job:', error);
    throw error;
  }
};

// 전체 로드맵
export const getWholeRoadmap = async (jobName) => {
  try {
    const response = await auth.post(`${SERVER}/roadmap/whole`, {
      job: jobName,
    });
    return response.data.wholeRoadMap; // 그래프비즈 형식으로 리턴
  } catch (error) {
    console.error('Error fetching whole roadmap:', error);
    throw error;
  }
};

// 직업에 대한 1년치 공부 로드맵과 추천 강의
export const getYearlyRoadmap = async (jobName) => {
  try {
    const response = await auth.post(`${SERVER}/roadmap/year`, {
      job: jobName,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching yearly roadmap:', error);
    throw error;
  }
};

// 직업 전망
export const getJobOutlook = async (jobName) => {
  try {
    const response = await auth.post(`${SERVER}/roadmap/outlook`, {
      job: jobName,
    });
    return response.data.outlook; // 마크다운 형식으로 리턴
  } catch (error) {
    console.error('Error fetching job outlook:', error);
    throw error;
  }
};

export default {
  validateJob,
  getWholeRoadmap,
  getYearlyRoadmap,
  getJobOutlook,
};
