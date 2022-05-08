import { useEffect, useState } from 'react';

const useMedicine = () => {
    const [medicines, setMedicines] = useState([]);

    useEffect(() => {
        fetch('https://stark-waters-32279.herokuapp.com/medicine')
            .then(res => res.json())
            .then(data => setMedicines(data));
    }, []);
    return [medicines, setMedicines];
};

export default useMedicine;