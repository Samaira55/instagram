
const axios = require('axios');

const authenticateUser = async (req, res, next) => {
  console.log("Req Header : ",req.headers)
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  console.log("Token is :",token)
  if (token == null) return res.sendStatus(401).json({ message: 'Authentication token missing' });

  try {
    const response = await axios.get('https://api.github.com/user', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    console.log("Authentication :",response.status)
    if (response.status === 200) {
      next()
    }
  } catch (error) {
    console.log("Catch error : ", error.message);
  }
};

module.exports = authenticateUser;
