import { useState, useEffect } from "react";
export function usePostTitle() {
    const [post, setPost] = useState({});
  async function getPost() {
    //await new Promise((resolve) => setTimeout(resolve, 2000)); // used to show that the component is first rendered with an
    //empty post object. After the first render, the function inside the useEffect() hook is called, which causes a re-render
    //when setPost is called.
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/2");
    const data = await response.json();
    setPost(data);
  }

  useEffect(() => {
    getPost();
  }, []);
  return post;
}

export function useFetch(url) {
  const [finalData, setFinalData] = useState({});

  async function getData() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await fetch(url);
    const data = await response.json();
    console.log(`data: ${JSON.stringify(data)}`)
    setFinalData(data);
  }

  useEffect(() => {
    getData();
  }, [url]);
  return finalData;
}