import { dataTypes } from "./dataTypes";

export type deleteType = {
  DeleteImage: Function;
};

export type refreshType = {
  RefreshImage: Function;
};

export type shareType = {
  shareImage: Function;
  data: dataTypes;
};
