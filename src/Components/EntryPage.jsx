import React from 'react'
import '../App.css'

export default function EntryPage({ setStarted, user }) {
  return (
    <>
      {user.name ? <div className='entry-page'>
        <h1 className='libre-clean'>Hi {user.name}. Welcome.</h1>
        <p className='libre-clean'>I've got a question for you.</p>
        <button style={{ fontSize: "large", fontWeight: "bolder", padding: "5px", cursor: "pointer", borderRadius: "5px", backgroundColor: "pink" }} onClick={() => { setStarted(true) }}>Let's Begin!</button>
      </div> : <></>}
    </>
  )
}
