import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((r) => {
        return r.json();
      })
      .then((d) => {
        setData(d);
      });
  }, [url]);
  return [data];
};

export default useFetch;
