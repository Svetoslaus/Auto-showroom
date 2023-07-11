import { CarProps } from '@/types';
import React from 'react'

interface CarDetailsProps {
    car: CarProps;
    isOpen: boolean;
    closeModal: () => void; 
}

const CarDetails = ({car, isOpen, closeModal}: CarDetailsProps) => {
  return (
    <div>
      Car Details
    </div>
  )
}

export default CarDetails
