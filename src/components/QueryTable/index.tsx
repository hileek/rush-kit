import React from 'react';
import { Table, TableProps } from 'antd';
import DynamicForm from '../DynamicForm';

interface QueryTableProps<RecordType> extends TableProps<RecordType> {
  fields: Field[];
}

const QueryTable = <RecordType extends object>(
  { fields, ...tableProps }: QueryTableProps<RecordType>
) => (
  <div>
    <DynamicForm fields={fields} />
    <Table {...tableProps} />
  </div>
);

export default QueryTable;
