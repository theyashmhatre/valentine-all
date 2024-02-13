import React, { useState } from 'react'
import { db } from "../firebase"
import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";
import { FaExternalLinkAlt, FaExternalLinkSquareAlt } from "react-icons/fa";
import { MdOutlineContentCopy } from "react-icons/md";
import ConfettiExplosion from 'react-confetti-explosion';

export default function CreatePage() {

  const [data, setData] = useState({
    name: "",
    url_name: "",
    final_message: ""
  })

  const PROD_URL = "https://mystery.yashmhatre.in/"

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  function handleInput(e) {
    e.preventDefault();
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  async function onSubmit() {
    console.log(data);
    try {
      // const docRef = await addDoc(collection(db, "users", data.url_name), {
      //   name: data.name,
      //   url_name: data.url_name,
      //   final_message: data.final_message
      // });
      const docRef = doc(db, "users", data.url_name);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setError("⚠️ URL of the same name already exists. Please retry.")
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        await setDoc(doc(db, "users", data.url_name), {
          name: data.name,
          url_name: data.url_name,
          final_message: data.final_message
        });

        setError("")
        setSuccess(true)
      }

    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  function openURL() {
    window.open(PROD_URL + data.url_name);
  }

  return (
    <div className='normal-font'>
      <h1>Create your own Valentine's Proposal 💘</h1>
      <label htmlFor='name'>Name</label>
      <br />
      <input type="text"
        name="name"
        style={{ marginBottom: "10px", width: "12rem" }}
        onChange={handleInput} placeholder='Name of your partner' />
      <br />
      <label htmlFor='url_name'>Unique Name for URL</label>
      <br />
      <input type="text"
        name="url_name"
        style={{ marginBottom: "10px", width: "12rem" }}
        onChange={handleInput} placeholder='e.g. deepika' />
      <br />
      <label htmlFor='final_message'>Dedicated Message</label>
      <br />
      <textarea onChange={handleInput} style={{ marginBottom: "10px", width: "12rem", height: "4rem" }} name="final_message"></textarea>
      <br />

      <button className='normal-font' onClick={onSubmit}>Create</button>

      {error ? <p style={{ color: "red" }}>{error}</p> : <></>}
      {success ? <>
        <p style={{ color: "green", fontWeight: "bold", fontSize: "20px" }}>Created Successfully.🎉 </p>
        <p style={{ fontSize: "25px" }}>Please visit <span style={{ textDecoration: "underline" }}>{PROD_URL + data.url_name}</span>
        </p>
        <FaExternalLinkSquareAlt size={"25px"} style={{ marginRight: "10px", cursor: "pointer" }} onClick={openURL} />
        <MdOutlineContentCopy size={"25px"} style={{ cursor: "pointer" }} onClick={() => { navigator.clipboard.writeText(PROD_URL + data.url_name) }} />
      </> : <></>}

    </div>
  )
}
