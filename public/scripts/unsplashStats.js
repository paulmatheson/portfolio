const fetchData = async () => {
    try {
        const response = await fetch('../functions/api-proxy', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ /* Your request payload */ }),
        });

        const data = await response.json();
        console.log('Data from API:', data);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
};

fetchData();