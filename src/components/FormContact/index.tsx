import { SendOutlined } from '@ant-design/icons'
import { Form, Input, Radio, Select } from 'antd'

export default function FormContact() {
  const { TextArea } = Input
  return (
    <div className="relative  w-full">
      <div className="absolute -top-2 -right-2">
        <SendOutlined style={{ fontSize: '24px', color: '#f56565' }} className='-rotate-45'/>
      </div>
      <Form
        layout='vertical'
        className='flex flex-col p-3 bg-white rounded-lg shadow-md'
      >
        <span className='text-red-500 font-semibold text-base mb-5'>Conversemos, contactanos ahora.</span>
        <div className='flex flex-row gap-3'>
          <Form.Item label="Nombres" style={{ width: "50%" }}>
            <Input />
          </Form.Item>
          <Form.Item label="Apellidos" style={{ width: "50%" }}>
            <Input />
          </Form.Item>
        </div>
        <div className='flex flex-row gap-3'>
          <Form.Item label="Celular" style={{ width: "50%" }}>
            <Input />
          </Form.Item>
          <Form.Item label="Correo electrónico" style={{ width: "50%" }}>
            <Input />
          </Form.Item>
        </div>
        <Form.Item label="¿En qué estás interesad@?">
          <Select>
            <Select.Option value="precios">Precios</Select.Option>
            <Select.Option value="financiamiento">Financiamiento</Select.Option>
            <Select.Option value="garantia">Garantía</Select.Option>
            <Select.Option value="carreras">Carreras</Select.Option>
            <Select.Option value="otros">Otros</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Escribenos tus dudas">
          <TextArea rows={4} />
        </Form.Item>
        <hr className='mb-4' />
        <Form.Item label="¿Qué medio usamos para comunicarnos?">
          <Radio.Group>
            <Radio value="WhatsApp" checked={true} > WhatsApp </Radio>
            <Radio value="Llamada"> Llamada </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item>
          <button
            className='w-full bg-red-500 text-white rounded-lg p-2'
            type='submit'>
            <span className='font-semibold'>Enviar</span>
          </button>
        </Form.Item>
      </Form>
    </div>
  )
}