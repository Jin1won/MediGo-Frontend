import { PrescriptionType } from '../interfaces/info.d';
import { axiosAuthInstance } from '../apis/axiosInstance';

export const getInputInfo = async (month: number) => {
  console.log(month);
  const { data } = await axiosAuthInstance({
    url: `/api/v1/info-input/${month}`,
    method: 'GET',
  });

  return data;
};

export const patchInputInfo = async (prescriptions: PrescriptionType[]) => {
  const { data } = await axiosAuthInstance({
    url: '/api/v1/info-input/',
    method: 'PATCH',
    data: {
      prescriptions,
    },
  });

  return data;
};
