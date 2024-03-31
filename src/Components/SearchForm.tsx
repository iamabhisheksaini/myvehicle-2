import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

interface SearchFormProps {
  onSubmit: (query: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSubmit }) => {
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    onSubmit(values.query);
    form.resetFields(); // Clear input after submission
  };

  return (
    <Form form={form} onFinish={handleSubmit} style={{ marginBottom: '20px', display: 'flex' }}>
      <Form.Item name="query" style={{ marginRight: '5px', flex: 1 }}>
        <Input
          placeholder="Search..."
          prefix={<SearchOutlined />}
          size="large"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ borderRadius: '4px' }}>
          Search
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SearchForm;
