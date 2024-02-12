import React, { useState } from 'react'
import { db } from "../firebase"
import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";

export default function CreatePage() {

  const [data, setData] = useState({
    name: "",
    url_name: "",
    final_message: ""
  })

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

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
        setSuccess("Created Successfully. 🎉\n Please visit https://mystery.yashmhatre.in/" + data.url_name)
      }

    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <div className='normal-font'>
      <label htmlFor='name'>Name</label>
      <br />
      <input type="text"
        name="name"
        onChange={handleInput} placeholder='Name of your partner' />
      <br />
      <label htmlFor='url_name'>URL Name (Optional)</label>
      <br />
      <input type="text"
        name="url_name"
        onChange={handleInput} placeholder='https://webite.com/{URL NAME}' />
      <br />
      <label htmlFor='final_message'>Dedicated Message</label>
      <br />
      <textarea onChange={handleInput} name="final_message"></textarea>
      <br />

      <button className='normal-font' onClick={onSubmit}>Create</button>

      {error ? <p style={{ color: "red" }}>{error}</p> : <></>}
      {success ? <p style={{ color: "green" }}>{success}</p> : <></>}
    </div>
  )
}
