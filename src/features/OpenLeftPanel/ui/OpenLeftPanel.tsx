import { Button } from '@/shared/ui/Button'
import React, { useState } from 'react'

interface IOpenLeftPanel{
    onClick?: () => void;
    open?: boolean;
}

const OpenLeftPanel = ({onClick,open}:IOpenLeftPanel) => {

  return (
    <div>
        <Button onClick={onClick}>#</Button>
    </div>
  )
}

export default OpenLeftPanel