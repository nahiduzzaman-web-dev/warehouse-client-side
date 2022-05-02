import { useEffect, useState } from 'react';

const useMedicine = () => {
    const [medicines, setMedicines] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/medicine')
            .then(res => res.json())
            .then(data => setMedicines(data));
    }, []);
    return [medicines, setMedicines];
};

export default useMedicine;