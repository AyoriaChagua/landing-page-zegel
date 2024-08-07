import { Form, Input, Modal } from 'antd';
import { useState } from 'react';
import { TrackerModalProps, UserLogin } from '../../utils/types';
import { EyeOutlined, HeartOutlined } from '@ant-design/icons';

export default function TrackerModal({
  handleCancel,
  handleOk,
  isModalOpen,
  userTracker
}: TrackerModalProps) {

  const credentials = {
    password: "admin",
    username: "admin"
  };

  const [isAdmin, setIsAdmin] = useState(false);

  const onFinish = (values: UserLogin) => {
    if (values.password === credentials.password && values.username === credentials.password) setIsAdmin(true);
  };

  return (
    <Modal title="Ingrese las credenciales para poder ver las estadísticas" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <Form
        layout='vertical'
        className='flex flex-col p-3 bg-white rounded-lg'
        onFinish={onFinish}
        initialValues={{ remember: true }}
      >
        <div className='flex flex-row gap-3'>
          <Form.Item label="Usuario" style={{ width: "50%" }} name={"username"}>
            <Input />
          </Form.Item>
          <Form.Item label="Contraseña" style={{ width: "50%" }} name={"password"}>
            <Input.Password />
          </Form.Item>
        </div>
        <Form.Item>
          <button
            className='w-full bg-red-500 text-white rounded-lg p-2'
            type='submit'>
            <span className='font-semibold'>Validar</span>
          </button>
        </Form.Item>
      </Form>
      {isAdmin && <>
        <hr className='mb-9' />
        <div className='flex flex-row justify-center border border-gray-300 py-5 rounded-xl'>
          <div className='flex flex-row w-1/2 justify-around'>
            <div className='flex flex-col items-center'>
              <div className='flex flex-row gap-4'>
                <EyeOutlined className='text-2xl text-blue-500' />
                <span className='text-2xl text-blue-500'>{userTracker?.length}</span>
              </div>
              <span className='text-2xl text-blue-500'>Visitas</span>
            </div>
          </div>
          <div className='w-px bg-gray-300 mx-4' />
          <div className='flex flex-row w-1/2 justify-around'>
            <div className='flex flex-col items-center'>
              <div className='flex flex-row gap-4'>
                <HeartOutlined className='text-2xl text-red-500' />
                <span className='text-2xl text-red-500'>{userTracker?.filter(track => track.me_gusta).length}</span>
              </div>
              <span className='text-2xl text-red-500'>Me gusta</span>
            </div>
          </div>
        </div>
      </>
      }
    </Modal>
  );
}
