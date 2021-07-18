import { useState } from 'react';
import { useHistory } from 'react-router-dom';



const Create = () => {

    const [title, setTitle] = useState(''); 
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Mario');

    const [isLoading, setisLoading] = useState(false);

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author};
        setisLoading(true);
        console.log(blog);
        fetch('http://localhost:8000/blogs',{
            method : 'POST',
            headers : {"Content-Type":"application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log('Blog Added');
            setisLoading(false);
            history.push('/');
        })

    }

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Blog Title : </label>
                <input 
                type="text"
                required
                value = {title}
                onChange = {(e) => setTitle(e.target.value)}
                />
                <label htmlFor="">Blog Body : </label>
                <textarea
                required
                value = {body}
                onChange = {(e) => setBody(e.target.value)}
                ></textarea>
                <label htmlFor="">Blog Author : </label>
                <select 
                value = {author}
                onChange = {(e) => setAuthor(e.target.value)}>
                    <option value="Mario">Mario</option>
                    <option value="Yoshi">Yoshi</option>
                </select>
                { !isLoading && <button>Add Blog</button> }
                { isLoading && <button disabled>Adding Blog....</button> }
            </form>
        </div>
     );
}
 
export default Create;