import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 24813,
  login: 'tM@NF3p\\AgLjJ9\\ik',
};

export const sampleWithPartialData: IUser = {
  id: 23611,
  login: 'hZCm0N@pDp7n',
};

export const sampleWithFullData: IUser = {
  id: 25883,
  login: '0~*@DqD\\(nVmsL\\tt90\\J31ogDX',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
