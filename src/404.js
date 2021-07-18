import { Link } from 'react-router-dom';

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>404</h2>
            <Link to='/'>Back to Home Page....</Link>
        </div>
     );
}
 
export default NotFound;