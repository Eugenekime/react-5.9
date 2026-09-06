'use client';

import { LoadingOutlined } from '@ant-design/icons';
import { Flex, Spin } from 'antd';

const Loading: React.FC = () => (
  <Flex justify="center" align="center" style={{ minHeight: '100vh' }}>
    <Spin indicator={<LoadingOutlined spin />} size="large" />
  </Flex>
);

export default Loading;
