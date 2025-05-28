import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Edit = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [data, setData] = useState({ title: '', content: '', tags: '' });

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8080/get/${id}`)
        .then(res => setData(res.data))
        .catch(() => alert("Error loading note"));
    }
  }, [id]);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  const updateNote = () => {
    axios.post('http://localhost:8080/edit', { ...data, _id: id })
      .then(res => {
        if (res.data.status === 'Success') {
          alert('Note updated');
          navigate('/');
        } else {
          alert('Update failed');
        }
      })
      .catch(() => alert("Error updating note"));
  };

  return (
    <div className="container mt-3">
      <h3>Edit Note</h3>
      <input
        type="text"
        name="title"
        value={data.title}
        onChange={inputHandler}
        placeholder="Title"
        className="form-control mb-2"
      />
      <textarea
        name="content"
        value={data.content}
        onChange={inputHandler}
        placeholder="Content"
        className="form-control mb-2"
        rows={5}
      />
      <input
        type="text"
        name="tags"
        value={data.tags}
        onChange={inputHandler}
        placeholder="Tags"
        className="form-control mb-3"
      />
      <button onClick={updateNote} className="btn btn-primary">Update Note</button>
    </div>
  );
};

export default Edit;
