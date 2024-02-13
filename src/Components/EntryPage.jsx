import React from 'react'
import '../App.css'

export default function EntryPage({ setStarted, user }) {
  return (
    <>
      {user.name ? <div className='entry-page'>
        <h1 className='libre-clean'>Hi {user.name}. Welcome.</h1>
        <p className='libre-clean'>I've got a question for you.</p>
        <button style={{ fontSize: "large", fontWeight: "bolder", padding: "5px", cursor: "pointer", borderRadius: "5px", backgroundColor: "pink" }} onClick={() => { setStarted(true) }}>Let's Begin!</button>
        <div style={{ visibility: "hidden" }}>
          Image by <a href="https://www.freepik.com/free-vector/blurred-valentine-s-day-wallpaper_12059543.htm#query=valentine%20background&position=0&from_view=search&track=ais&uuid=e9611bba-d0f8-44e1-9945-20eb7bf67592">Freepik</a>
        </div>
      </div> : <></>}
    </>
  )
}
