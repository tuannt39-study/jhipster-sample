import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'ebe493c7-e0e0-4be5-99c3-eb92e48697d0',
};

export const sampleWithPartialData: IAuthority = {
  name: '2451657b-ac80-4bc4-925b-df36605698ad',
};

export const sampleWithFullData: IAuthority = {
  name: 'e8d3881d-2520-472d-9c42-6cb063c6bb74',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
