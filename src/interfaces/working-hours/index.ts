import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface WorkingHoursInterface {
  id?: string;
  user_id?: string;
  hours: number;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface WorkingHoursGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
}
