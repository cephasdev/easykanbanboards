import IUser from '@/entities/interfaces/IUser';

interface IGetAllUsersResponse {
  data: {
    getAllUsers: IUser[];
  };
}

export default IGetAllUsersResponse;
