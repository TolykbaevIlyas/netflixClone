import { Button } from '@/shared/ui/Button';
import React from 'react'

interface ILeftPanel{
  onClick?: ()=>void;
  open?: boolean;
}

const LeftPanel = ({open,onClick}:ILeftPanel) => {
  return (
    <div className='fixed h-full bg-slate-600 top-0 left-0 w-72 text-center'>
      <div className='p-10 float-right'>
        <Button onClick={onClick}>Close</Button>
      </div>
      <div className='mt-24'>
        <p>Main</p>
        <p>Main</p>
        <p>Main</p>
        <p>Main</p>        
      </div>
    </div>
  )
}

export default LeftPanel