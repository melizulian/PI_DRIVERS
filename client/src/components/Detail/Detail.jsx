import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './Detail.module.scss';
const URL = 'http://localhost:3001/drivers';


const Detail = () => {
  const { id } = useParams();
  const [driver, setDriver] = useState({})

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const { data } = await axios(`${URL}/${id}`);

        if (data.length > 0) {
          setDriver(data[0])
        } else {
          window.alert ('Detail not found')
        }

      } catch (error) {
        console.error('This is what happened: ', error.message)
        window.alert('Invalid ID. Please, try another one.')
      }
    }

    fetchDetail();
  }, [id])

  return (
    <div className={styles.detail_container} key={driver.driver_id}>
      {driver.driver_name && (
        <>
        <div className={styles.container_1}>
          <div id={styles.name_wrapper}>
            <h2>{driver.driver_name} {driver.lastname}</h2>
            <img src={driver.image} title={`${driver.lastname}'s pic`} alt={`${driver.lastname}'s pic`}/>
          </div>

          <div className={styles.container_2}>

              <h3>NATIONALITY: {driver.nationality}</h3>
              <h3>DATE OF BIRTH: {driver.dob}</h3>
              <div className={styles.id_source}>
              <h5>ID: {driver.driver_id}</h5>
              {driver.origin === 'db' ? <h5>SOURCE: Database</h5> : 
              <h5>SOURCE: API</h5>}
              </div>
              
            
          </div>

        </div>

        <div className={styles.teams_container}>
          <h3>TEAMS</h3>
          <div className={styles.teams_wrapper}>
            {driver.teams?.map(team => {
              return (
                <h4>{team}</h4>
              )
              })}
          </div>
        </div>

        <div className={styles.description_container}>
          <h3>DESCRIPTION</h3> 
          <p>{driver.description}</p>
          
        </div>

        </>
      )}
    </div>
  )
}

export default Detail;