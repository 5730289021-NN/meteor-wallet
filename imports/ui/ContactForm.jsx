import React, { useState } from "react"
import { ContactsCollection } from "../api/ContactsCollection"

export const ContactForm = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [imageUrl, setImageUrl] = useState("")

    const saveContact = () => {
        console.log({ name, email, imageUrl })
        ContactsCollection.insert({ name, email, imageUrl })
        setName("")
        setEmail("")
        setImageUrl("")
    }

    return (
        <form>
            <div>
                <label htmlFor='name'>
                    Name
                </label>
                <input id="name" type='text' value={name} onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div>
                <label htmlFor='email'>Email</label>
                <input id="email" type='text' value={email} onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div>
                <label htmlFor='imageUrl'>Image URL</label>
                <input id="imageUrl" type='text' value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}></input>
            </div>
            <div>
                <button type="button" onClick={saveContact}>Save Contact</button>
            </div>
        </form>
    )
}