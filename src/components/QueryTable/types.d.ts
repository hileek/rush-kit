import { TableProps, FormInstance } from 'antd';

export interface QueryTableProps<RecordType, DataType = any> extends TableProps<RecordType> {
  fields: Field[];
  initData?: DataType[];
  fetchData?: (params: any) => Promise<{ data: DataType[]; pageInfo: PageInfo }>;
}

export interface QueryTableRef<DataSource = any> extends FormInstance {
  loading: boolean;
  dataSource: DataSource[];
  onSearch: () => void;
}
