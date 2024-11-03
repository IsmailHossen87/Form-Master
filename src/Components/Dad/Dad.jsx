import React from 'react'
import Myself from '../Myself/Myself'
import Brother from '../Brother/Brother'
import Sister from '../Sister/Sister'

export default function Dad() {
  return (
    <div className='text-center'>
      <h3>Dad</h3>
      <section className='flex'>
        <Myself></Myself>
        <Brother></Brother>
        <Sister></Sister>
      </section>
    </div>
  )
}
