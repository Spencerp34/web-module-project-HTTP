import React, {useState} from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

const AddMovieForm = (props) => {
    const [newMovie, setNewMovie] = useState({
        title:"",
		director: "",
		genre: "",
		metascore: 0,
		description: ""
    })
    const { push } = useHistory();


    const handleChange = () =>{
        console.log('change')
    }

    const handleSubmit = () =>{
        console.log('submit')
    }

    return(
        <div className='add-form'>
            {/* <div className="modal-content">

			{/* <form onSubmit={handleSubmit}>
				<div className="modal-header">						
					<h4 className="modal-title"> <strong>Adding Movie</strong></h4>
				</div>
				<div className="modal-body">					
					<div className="form-group">
						<label>Title</label>
						<input onChange={handleChange} name="title" type="text" className="form-control"/>
					</div>
					<div className="form-group">
						<label>Director</label>
						<input onChange={handleChange} name="director" type="text" className="form-control"/>
					</div>
					<div className="form-group">
						<label>Genre</label>
						<input value='genre' onChange={handleChange} name="genre" type="text" className="form-control"/>
					</div>
					<div className="form-group">
						<label>Metascore</label>
						<input value='metascore' onChange={handleChange} name="metascore" type="number" className="form-control"/>
					</div>		
					<div className="form-group">
						<label>Description</label>
						<textarea value='description' onChange={handleChange} name="description" className="form-control"></textarea>
					</div>
									
				</div>
				<div className="modal-footer">			    
					<input type="submit" className="btn btn-info" value="Save"/>
					<Link to={`/movies`}><input type="button" className="btn btn-default" value="Cancel"/></Link>
				</div>
			</form> */}
		    {/* </div>  */}

            <div className='newMovie'> 
                <form onSubmit={handleSubmit}>
                    <input type='text'>Title</input>
                </form>
            </div>
        </div>
    )
}

export default AddMovieForm;