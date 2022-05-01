import { useEffect, useState } from 'react';

const useMedicine = () => {
    const [medicine, setMedicine] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/medicine')
            .then(res => res.json())
            .then(data => setMedicine(data));
    }, []);
    return [medicine, setMedicine];
};

export default useMedicine;