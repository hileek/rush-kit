import React, { useRef, useEffect, useState, useCallback } from 'react';
import { FormInstance, TablePaginationConfig } from 'antd';
import { Table, TableProps } from 'antd';
import DynamicForm from '../DynamicForm';

interface QueryTableProps<RecordType> extends TableProps<RecordType> {
  fields: Field[];
  fetchData: (params: any) => Promise<any>;
  showLoading: boolean;
}

const QueryTable = <RecordType extends object>(
  { fields, fetchData, showLoading, ...tableProps }: QueryTableProps<RecordType>
) => {
  const formInstance = useRef<FormInstance<any>>(null);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [pagination, setPagination] = useState<TablePaginationConfig | false>(
    tableProps.pagination === undefined ? {} : tableProps.pagination
  );

  const handleSearch = useCallback(async () => {
    const formData = formInstance.current?.getFieldsValue();
    const params = pagination ? {
      formData,
      pageInfo: {
        current: pagination.current,
        pageSize: pagination.pageSize,
      },
    } : { formData };
    const { data, pageInfo } = await fetchData(params);
    setPagination((prevPagination) => ({ ...prevPagination, ...pageInfo }));
  }, [fetchData, pagination]);

  useEffect(() => {
    handleSearch;
  }, [handleSearch]);

  return (
    <div>
      <DynamicForm fields={fields} ref={formInstance} onFinish={() => handleSearch()} />
      <Table {...tableProps} pagination={pagination} loading={showLoading && loading} />
    </div>
  );
};

export default QueryTable;
