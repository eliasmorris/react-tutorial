import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TexField from "./components/TextField";
import Select from "./components/Select";
import { getPosts } from "./services";

const CARS = [
  "Ford Musting",
  "Mercedes Benz",
  "Ferarri",
  "Shelby",
  "Bughatti",
  "Audi",
  "Toyota LandCruizer",
];

const FORM_DATA = {
  firstName: "",
  lastName: "",
  age: "",
  favoriteCar: "",
};

const App = () => {
  const [formData, setFormData] = useState(FORM_DATA);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const posts = await getPosts();
    setPosts(posts.filter((post) => post.id <= 2));
  };

  const save = (event: any) => {
    event.preventDefault();
    console.log("formData", formData);
  };

  const setForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="App">
      <Header name="header" title={"Mutm + Vite"} />
      <form>
        <TexField handleChange={setForm} name="firstName" label="First Name" />
        <TexField handleChange={setForm} name="lastName" label="Last Name" />
        <TexField type="number" handleChange={setForm} name="age" label="Age" />
        <Select
          handleChange={setForm}
          label="Favorite Car"
          name="favoriteCar"
          items={CARS}
        />
        <button type="submit" onClick={(e) => save(e)}>
          Save
        </button>
      </form>

      <table>
        <tr>
          <th>#</th>
          <th>ID</th>
          <th>Title</th>
        </tr>
        {posts.map((post, index) => (
          <tr key={index}>
            <td>{index+1}</td>
            <td>{post.id}</td>
            <td>{post.title}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default App;
