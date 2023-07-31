import axios from 'axios';
import queryString from 'query-string';
import { WorkingHoursInterface, WorkingHoursGetQueryInterface } from 'interfaces/working-hours';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getWorkingHours = async (
  query?: WorkingHoursGetQueryInterface,
): Promise<PaginatedInterface<WorkingHoursInterface>> => {
  const response = await axios.get('/api/working-hours', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createWorkingHours = async (workingHours: WorkingHoursInterface) => {
  const response = await axios.post('/api/working-hours', workingHours);
  return response.data;
};

export const updateWorkingHoursById = async (id: string, workingHours: WorkingHoursInterface) => {
  const response = await axios.put(`/api/working-hours/${id}`, workingHours);
  return response.data;
};

export const getWorkingHoursById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/working-hours/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteWorkingHoursById = async (id: string) => {
  const response = await axios.delete(`/api/working-hours/${id}`);
  return response.data;
};
