const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Enable trust proxy so Render can see the visitor's real IP, not the load balancer's IP
app.set('trust proxy', true);

app.get('/', (req, res) => {
    // 1. Capture the IP address
    const visitorIp = req.ip || req.headers['x-forwarded-for'];
    
    // 2. Print it to the server console log
    console.log(`[LOG] Visitor IP Captured: ${visitorIp} at ${new Date().toISOString()}`);
    
    // 3. Silently redirect them to your destination site instantly
    res.redirect(302, 'https://www.canva.com/design/DAHZWslFtp0/x6kzknLW7JOTe2fjeF8k3g/edit');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
