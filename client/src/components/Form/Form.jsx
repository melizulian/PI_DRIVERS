import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addDriver } from '../../redux/actions';
import validations from '../../utils/validations';
import styles from './Form.module.scss';


const Form = ({ arrayTeams }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userInput, setUserInput] = useState({
    driver_name: '',
    lastname:'',
    nationality:'',
    image:'',
    dob:'',
    description:'',
    teams: []
  });

  const [errors, setErrors] = useState({
    driver_name: '',
    lastname:'',
    nationality:'',
    image:'',
    dob:'',
    description:'',
    teams: []
  });

  const handleOnChange = (event) => {
    setUserInput({
      ...userInput,
      [event.target.name]: event.target.value
    });

    setErrors(
      validations({
      ...userInput,
      [event.target.name]: event.target.value
      })
    );
  };

  const handleSelectChange = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions, option => option.value);
    setUserInput(prevState => ({
      ...prevState,
      teams: [...new Set(selectedOptions)] 
    }));
  
    setErrors(
      validations({
        ...userInput,
        teams: selectedOptions
      })
    );
  };

  const uniqueTeams = [...new Set(arrayTeams)];

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
      try {
        dispatch(
          addDriver({
            driver_name: userInput.driver_name,
            lastname:userInput.lastname,
            nationality: userInput.nationality,
            image: userInput.image,
            dob: userInput.dob,
            description: userInput.description,
            teams: userInput.teams
          })
        );
        window.alert ('Congratulations! Your driver has been successfully created!')
        navigate('/home');
      } catch (error) {
        window.alert (error.message)
      }
    }
  }

  return (
      <form onSubmit={handleSubmit} className={styles.form_container}>
        <label htmlFor="name">Name </label>
          <input
            className={styles.text_input} 
            key='driver_name'
            name='driver_name'
            type='text' 
            value={userInput.driver_name} 
            onChange={handleOnChange} 
            placeholder="Name"
          />
        <p className="error_message">{errors.driver_name}</p>

        <label htmlFor="lastname">Lastname </label>
          <input
            className={styles.text_input} 
            key='lastname'
            name='lastname'
            type='text' 
            value={userInput.lastname} 
            onChange={handleOnChange} 
            placeholder="Lastname"
          />
        <p className="error_message">{errors.lastname}</p>

        <label htmlFor="nationality">Nationality </label>
          <input
            className={styles.text_input} 
            key='nationality'
            name='nationality'
            type='text' 
            value={userInput.nationality} 
            onChange={handleOnChange} 
            placeholder="Nationality"
          />
        <p className="error_message">{errors.nationality}</p>

        <label htmlFor="dob">Date of birth </label>
          <input
            className={styles.text_input} 
            key='dob'
            name='dob'
            type='text' 
            value={userInput.dob} 
            onChange={handleOnChange} 
            placeholder="YYYY/MM/DD"
          />
        <p className="error_message">{errors.dob}</p>

        <label htmlFor="image"> Profile picture </label>
          <input
            className={styles.text_input} 
            key='image'
            name='image' 
            type='text' 
            value={userInput.image}
            onChange={handleOnChange}
            placeholder="URL"
          />
        <p className="error_message">{errors.image}</p>

        <label htmlFor="description">Description </label>
          <textarea
            id={styles.description_input} 
            key='description'
            name='description'
            value={userInput.description}
            onChange={handleOnChange}
            rows={15}
            cols={40}
            minLength={15}
            maxLength={2501}
            placeholder="Write a brief description of your driver"
          />
        <p className="error_message">{errors.description}</p>
    
        <h5>Teams</h5>
        <p className="error_message">{errors.teams}</p>
        
        <select
          multiple
          id={styles.allTeams_container}
          name='teams'
          value={userInput.teams}
          onChange={(e) => handleSelectChange(e)}
        >
          {/* Mapeamos las opciones usando uniqueTeams */}
          {uniqueTeams.map((team) => (
            <option key={team} value={team}>
              {team}
            </option>
          ))}
        </select>
        
        <button type='submit' disabled={Form.driver_name || Object.keys(errors).length}>Create Driver</button>

        

      </form>
    
  )
}

export default Form;