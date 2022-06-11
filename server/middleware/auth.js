import jwt from 'jsonwebtoken';

// Wants to like post 
// click like button => middleware authorise and pass or reject
const auth = async (req, res, next) => {
    try {

        const token = req.headers.authorization.split(" ")[1];

        const isCustomAuth = token.length <500;

        let decodedData;

        if(token && isCustomAuth){
            decodedData = jwt.verify(token , 'test');

            req.userId = decodedData?.id;
        }
        else{
            decodedData = jwt.decode(token);

            req.userId = decodedData?.sub;
        }

        next();
        
    } catch (error) {
        console.log(error);
    }
}

export default auth;