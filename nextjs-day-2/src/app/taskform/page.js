"use client";
import React, { useState } from "react";
import "./FormStyles.css";
import axios from "axios";

const TaskForm = () => {
  const [message,setmessage]=useState()
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    status: "pending",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let temp = {
      title: formData.title,
      content: formData.content,
      status: formData.status,
      userid: "658c15fdd9551ffca85041ee",
    };

    try {
      const result = await axios.post("/api/task", temp); // Assuming you have an API route at /api/task
      console.log("data is", result.data);
      console.log(result.data.body.message)
      setmessage(result.data.body.message)
      console.log(message)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Task Form</h1>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="status">Status:</label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleInputChange}
          >
            <option value="pending">Pending</option>
            <option value="complete">Complete</option>
          </select>
        </div>
        <p style={{color:"red",textAlign:"center"}}>{message}</p>

        <button className="button1" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
