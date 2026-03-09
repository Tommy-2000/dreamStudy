import { dreamStudyAxios } from './config';

const requestInterceptor = dreamStudyAxios.interceptors.request.use(
  axiosConfig => {
    alert(axiosConfig.baseURL?.toString + ' has sent a request successfully');
    return axiosConfig;
  },
  axiosError => {
    if (axiosError.request) {
      switch (axiosError.request.status) {
        case 400:
          alert('Bad Request');
          break;
        case 401:
          alert('Unauthorized');
          break;
        case 404:
          alert('Not Found');
          break;
        default:
          alert('Unknown Error Occurred');
      }
    }
  }
);

const responseInterceptor = dreamStudyAxios.interceptors.response.use(
  axiosResponse => {
    return axiosResponse;
  },
  axiosError => {
    if (axiosError.response) {
      switch (axiosError.response.status) {
        case 400:
          alert('Bad Request');
          break;
        case 401:
          alert('Unauthorized');
          break;
        case 404:
          alert('Not Found');
          break;
        default:
          alert('Unknown Error Occurred');
      }
    }
  }
);
