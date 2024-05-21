import { useEffect, useState } from "react";

const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMenu = async () => {
      const res = await fetch("http://localhost:5000/menu");
      const data = await res.json();

      setMenu(data);
      setLoading(false);
    };

    getMenu();
  }, []);

  return [menu, loading];
};

export default useMenu;
