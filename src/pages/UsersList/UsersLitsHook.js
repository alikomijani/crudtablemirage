import { useState, useEffect } from "react";

function UsersLitsHook(url) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [filters, _setFilters] = useState({
    first_name: "",
    lastName: "",
  });
  const setFilters = (obj) => {
    _setFilters({ ...filters, ...obj });
  };
  useEffect(() => {
    setLoading(true);
    const param = new URLSearchParams(filters).toString();
    fetch(`${url}?${param}`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
      })
      .catch((e) => {
        console.log(e);
        console.log(e.message);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url, filters]);
  return [users, loading, error,filters ,  setFilters];
}

export default UsersLitsHook;
