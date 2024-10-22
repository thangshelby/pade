export interface CreateTableType {
  tableName: string;
  columns: string;
  values: string;
}

export interface ReadTableType {
  tableName: string;
  columns: string;
  filter: string;
}
export interface UpdateTableType {
  tableName: string;
  columnsAndValues: string;
  filter: string;
}

export interface DeleteTableType {
  tableName: string;
  filter: string;
}
export interface UserType{
    UserID: number;
    UserType: string;
    Email: string;
    UserName: string;
    Password: string;
    BirthDay: string;
    Phone: string;
}

